import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';

import type { SelectedCity } from 'types/city';
import type { Visit } from 'types/globe';

import EnterIcon from '~/icons/Enter';
import GotoArrow from '~/icons/GotoArrow';
import PassportBus from '~/icons/PassportBus';
import PassportFerry from '~/icons/PassportFerry';
import PassportPlane from '~/icons/PassportPlane';
import PassportTrain from '~/icons/PassportTrain';
import { cn } from '~/lib/utils';

import { OlympiadMedia } from './OlympiadMedia';
import { sharedStadiums } from './settings';
import { cityStatus, statusColor } from './utils';

const MotionArrow = motion.create(GotoArrow);

type SharedOlympiadsProps = {
  olympiads: (any | null)[];
  citySlug: string | null;
  visits: Visit[];
};

function getVisitIcon(type: 'plane' | 'train' | 'ferry' | 'bus') {
  switch (type) {
    case 'plane':
      return <PassportPlane className="h-4 fill-[#2B4955]" />;
    case 'train':
      return <PassportTrain className="w-10 fill-[#2B4955] stroke-[#2B4955] stroke-[2px]" />;
    case 'ferry':
      return <PassportFerry className="w-10 fill-[#2B4955]" />;
    case 'bus':
      return <PassportBus className="w-10 fill-[#2B4955]" />;
  }
}

function Stamp({ visit, citySlug, last }: { visit: Visit; citySlug?: string | null; last?: boolean }) {
  const [hovered, setHovered] = useState(false);

  if (!visit.date)
    return null;

  if (!visit.leg) {
    return (
      <div
        className={`
          block w-32 rotate-6 justify-self-start rounded-lg border-2 border-[#2B4955] p-px text-[#2B4955]
          md:w-36
          ${
      last ? 'mr-0' : 'mr-3'
      }
        `}
      >
        <div className="rounded-md border-2 border-[#2B4955]">
          <div className="flex justify-between">
            <span className="mt-1 ml-1 block size-6 rounded-full border-2 border-[#2B4955] text-center text-xs/5.25 text-[#2B4955]">
              {visit.countryCode}
            </span>
            <div className="flex h-7 items-center border border-t-0 border-r-0 border-black p-1">
              {getVisitIcon(visit.entranceType)}
            </div>
          </div>
          <span className="
            my-1 block w-full text-center text-red-600
            md:my-1
          "
          >
            {visit.date.replaceAll('-', '.')}
          </span>
          <EnterIcon className="mb-1 ml-1 h-6 fill-[#2B4955] stroke-[#2B4955] stroke-[4px]" />
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/trip/route/${visit.leg}?refer=${encodeURI(citySlug || '')}`}
      className={cn(
        `
          mr-3 block w-32 rotate-6 justify-self-start rounded-lg border-2 border-[#2B4955] p-px text-[#2B4955] transition-colors
          hover:bg-[#ececec]
          md:w-36
        `,
        last && 'mr-0',
      )}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <div className="rounded-md border-2 border-[#2B4955]">
        <div className="flex justify-between">
          <span className="mt-1 ml-1 block size-6 rounded-full border-2 border-[#2B4955] text-center text-xs/5.25 text-[#2B4955]">
            {visit.countryCode}
          </span>
          <div className="flex h-7 items-center border border-t-0 border-r-0 border-black p-1">
            {getVisitIcon(visit.entranceType)}
          </div>
        </div>
        <div className="
          my-1 flex w-full items-center justify-center
          md:my-1
        "
        >
          <span className="ml-1 block text-center text-base text-red-600">{visit.date.replaceAll('-', '.')}</span>
          <MotionArrow className="ml-1 h-6 w-2 fill-red-600" initial={{ x: 0 }} animate={{ x: hovered ? '2px' : 0 }} />
        </div>
        <EnterIcon className="mb-1 ml-1 h-6 fill-[#2B4955] stroke-[#2B4955] stroke-[4px]" />
      </div>
    </Link>
  );
}

function SharedOlympiads({ olympiads, citySlug, visits }: SharedOlympiadsProps) {
  const firstOlympiad = olympiads[0];

  if (!firstOlympiad?.olympiadType)
    return null;

  const visit = visits.find(
    visit => visit.year === firstOlympiad.year.toString() && visit.type === firstOlympiad.olympiadType?.toLowerCase(),
  );

  const headerText = olympiads.map(olympiad => olympiad?.year).join(' and ');

  return (
    <div className="mt-7">
      <div className="flex items-center">
        <span
          className={`
            mr-2 size-4 rounded-full bg-negative
            ${visit && 'bg-positive'}
          `}
        />
        <h3 className="
          text-xl
          md:text-xl
        "
        >
          {`${headerText} ${
            firstOlympiad.olympiadType.charAt(0) + firstOlympiad.olympiadType.slice(1).toLowerCase()
          } Games`}
        </h3>
      </div>
      <div className="mt-5 items-end">
        {visit && (
          <OlympiadMedia
            visit={visit}
            citySlug={citySlug}
            olympiadType={firstOlympiad.olympiadType}
          />
        )}
      </div>
    </div>
  );
}

export default function CitySlider({
  data,
  visits,
}: {
  data: SelectedCity | null;
  visits: Visit[];
}) {
  if (!data?.name) {
    return null;
  }

  const { amountCompleted, totalOlympiads } = cityStatus(data.olympiads, visits);

  const cityVisits: Visit[] = [];
  const visitDates: string[] = [];

  data.olympiads.forEach((olympiad) => {
    if (!olympiad?.olympiadType)
      return null;

    const foundVisit = visits.find((visit) => {
      if (!visit.year || !visit.type || !visit.date) {
        return false;
      }

      return visit.year === olympiad.year.toString() && visit.type === olympiad.olympiadType?.toLowerCase() && !visitDates.includes(visit.date);
    });

    if (!foundVisit) {
      return;
    }

    cityVisits.push(foundVisit);

    if (foundVisit.date) {
      visitDates.push(foundVisit.date);
    }
  });

  return (
    <motion.div
      initial={{ x: '-50%', y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(`
        fixed top-1/3 left-1/2 z-20 h-[67dvh] w-full max-w-200 overflow-scroll border-t-20 bg-[#e0e0e0] px-6 py-12 pb-0
        md:p-10
      `, statusColor(
        amountCompleted,
        totalOlympiads,
      ))}
    >
      <h1 className="
        text-4xl font-semibold
        md:text-5xl
      "
      >
        {data?.name}
      </h1>
      <div className="
        mt-8 flex items-center
        md:mt-10
      "
      >
        {cityVisits.map((visit, index) => {
          if (!visit) {
            return null;
          }

          return <Stamp key={visit.date} visit={visit} citySlug={data?.slug} last={index === cityVisits.length - 1} />;
        })}
      </div>
      <div className="
        mt-10
        md:mt-14
      "
      >
        {sharedStadiums.includes(data?.name)
          ? (
              <SharedOlympiads
                olympiads={data.olympiads}
                citySlug={data?.slug}
                visits={visits}
              />
            )
          : (
              data.olympiads.map((olympiad, index) => {
                if (!olympiad?.olympiadType) {
                  return null;
                }

                const visit = visits.find(
                  visit => visit.year === olympiad.year.toString() && visit.type === olympiad.olympiadType?.toLowerCase(),
                );

                const last = index === data.olympiads.length - 1;

                return (
                  <div
                    key={olympiad.id}
                    className={cn(`relative ml-2 border-l-2`, last ? 'border-transparent' : 'border-[#868686]')}
                  >
                    <div className="absolute -top-1.5 -left-2.5 flex items-center">
                      <span
                        className={cn(`
                          size-4 rounded-full bg-negative
                          md:-left-2.75 md:size-5
                        `, visit && 'bg-positive')}
                      />
                      <h3 className="
                        ml-4 text-xl
                        md:text-[22px]/6
                      "
                      >
                        {`${olympiad.year} ${
                          olympiad.olympiadType.charAt(0) + olympiad.olympiadType.slice(1).toLowerCase()
                        } Games`}
                      </h3>
                    </div>
                    <div className="
                      ml-5 min-h-50 items-end
                      md:ml-7
                    "
                    >
                      {visit && (
                        <OlympiadMedia
                          visit={visit}
                          citySlug={data?.slug}
                          olympiadType={olympiad.olympiadType}
                        />
                      )}
                    </div>
                  </div>
                );
              })
            )}
      </div>
    </motion.div>
  );
}
