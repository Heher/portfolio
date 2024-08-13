import { motion } from 'framer-motion';
import { OlympiadMedia } from './OlympiadMedia';
import { cityStatus, filterOutNonOlympiadsForCity, statusColor } from './utils';
import { sharedStadiums } from './settings';
import type { Visit } from 'types/globe';
import { Link } from '@remix-run/react';
import EnterIcon from '../icons/Enter';
import PassportPlane from '../icons/PassportPlane';
import PassportTrain from '../icons/PassportTrain';
import PassportFerry from '../icons/PassportFerry';
import PassportBus from '../icons/PassportBus';
import GotoArrow from '../icons/GotoArrow';
import { useState } from 'react';

const MotionArrow = motion(GotoArrow);

type SharedOlympiadsProps = {
  olympiads: (any | null)[];
  citySlug: string;
  visits: Visit[];
  handleImageModal: (img: string | null) => void;
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

  if (!visit.date) return null;

  if (!visit.leg) {
    return (
      <div
        className={`block w-32 rotate-6 justify-self-start rounded-[8px] border-2 border-[#2B4955] p-[1px] text-[#2B4955] md:w-36 ${
          last ? 'mr-0' : 'mr-3'
        }`}
      >
        <div className="rounded-md border-2 border-[#2B4955]">
          <div className="flex justify-between">
            <span className="ml-1 mt-1 block h-6 w-6 rounded-full border-[2px] border-[#2B4955] text-center text-xs leading-[21px] text-[#2B4955]">
              {visit.countryCode}
            </span>
            <div className="flex h-7 items-center border border-r-0 border-t-0 border-black p-1">
              {getVisitIcon(visit.entranceType)}
            </div>
          </div>
          <span className="my-1 block w-full text-center text-red-600 md:my-1">{visit.date.replaceAll('-', '.')}</span>
          <EnterIcon className="mb-1 ml-1 h-6 fill-[#2B4955] stroke-[#2B4955] stroke-[4px]" />
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/trip/route/${visit.leg}?refer=${encodeURI(citySlug || '')}`}
      className={`block w-32 rotate-6 justify-self-start rounded-[8px] border-2 border-[#2B4955] p-[1px] text-[#2B4955] md:w-36 ${
        last ? 'mr-0' : 'mr-3'
      } transition-colors hover:bg-[#ececec]`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="rounded-md border-2 border-[#2B4955]">
        <div className="flex justify-between">
          <span className="ml-1 mt-1 block h-6 w-6 rounded-full border-[2px] border-[#2B4955] text-center text-xs leading-[21px] text-[#2B4955]">
            {visit.countryCode}
          </span>
          <div className="flex h-7 items-center border border-r-0 border-t-0 border-black p-1">
            {getVisitIcon(visit.entranceType)}
          </div>
        </div>
        <div className="my-1 flex w-full items-center justify-center md:my-1">
          <span className="ml-1 block text-center text-base text-red-600">{visit.date.replaceAll('-', '.')}</span>
          <MotionArrow className="ml-1 h-6 w-2 fill-red-600" initial={{ x: 0 }} animate={{ x: hovered ? '2px' : 0 }} />
        </div>
        <EnterIcon className="mb-1 ml-1 h-6 fill-[#2B4955] stroke-[#2B4955] stroke-[4px]" />
      </div>
    </Link>
  );
}

function SharedOlympiads({ olympiads, citySlug, visits, handleImageModal }: SharedOlympiadsProps) {
  const firstOlympiad = olympiads[0];

  if (!firstOlympiad?.olympiadType) return null;

  const visit = visits.find(
    (visit) => visit.year === firstOlympiad.year.toString() && visit.type === firstOlympiad.olympiadType?.toLowerCase()
  );

  const headerText = olympiads.map((olympiad) => olympiad?.year).join(' and ');

  return (
    <div className="mt-7">
      <div className="flex items-center">
        <span
          className={`city-status mr-2 h-4 w-4 rounded-full bg-[var(--negative)] ${visit && 'bg-[var(--positive)]'}`}
        />
        <h3 className="text-xl md:text-xl">{`${headerText} ${
          firstOlympiad.olympiadType.charAt(0) + firstOlympiad.olympiadType.slice(1).toLowerCase()
        } Games`}</h3>
      </div>
      <div className="media mt-[20px] items-end">
        {visit && (
          <OlympiadMedia
            visit={visit}
            citySlug={citySlug}
            olympiadType={firstOlympiad.olympiadType}
            handleImageModal={handleImageModal}
          />
        )}
      </div>
    </div>
  );
}

export default function CitySlider({
  data,
  visits,
  handleImageModal
}: {
  data: any | null;
  visits: Visit[];
  handleImageModal: (img: string | null) => void;
}) {
  if (!data?.name) return null;

  const filteredOlympiads = filterOutNonOlympiadsForCity(data.name, data.olympiads.nodes);

  const { amountCompleted, totalOlympiads } = cityStatus(filteredOlympiads, visits);

  let cityVisits: Visit[] = [];
  let visitDates: string[] = [];

  filteredOlympiads.forEach((olympiad) => {
    if (!olympiad?.olympiadType) return null;

    const foundVisit = visits.find(
      (visit) =>
        visit.year === olympiad.year.toString() &&
        visit.type === olympiad.olympiadType?.toLowerCase() &&
        !visitDates.includes(visit.date)
    );

    if (foundVisit) {
      cityVisits.push(foundVisit);
      visitDates.push(foundVisit.date);
    }
  });

  return (
    <motion.div
      initial={{ x: '-50%', y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`city-status fixed left-1/2 top-1/3 z-20 h-[67dvh] w-full max-w-[800px] overflow-scroll border-t-[20px] bg-[#e0e0e0] px-6 py-12 pb-0 md:p-10 ${statusColor(
        amountCompleted,
        totalOlympiads
      )}`}
    >
      <h1 className="text-4xl font-semibold md:text-5xl">{data?.name}</h1>
      <div className="mt-2 flex items-center md:mt-4">
        {data?.country?.flagByTimestamp?.png && (
          <img src={data.country.flagByTimestamp.png} alt={data.country.name || ''} className="mr-3 h-5 md:h-7" />
        )}
        <h2 className="text-xl md:text-2xl">{data?.country?.name}</h2>
      </div>
      <div className="mt-8 flex items-center md:mt-10">
        {cityVisits.map((visit, index) => {
          if (!visit) return null;
          return <Stamp key={visit.date} visit={visit} citySlug={data?.slug} last={index === cityVisits.length - 1} />;
        })}
      </div>
      <div className="mt-10 md:mt-14">
        {sharedStadiums.includes(data?.name) ? (
          <SharedOlympiads
            olympiads={filteredOlympiads}
            citySlug={data?.slug}
            visits={visits}
            handleImageModal={handleImageModal}
          />
        ) : (
          filteredOlympiads.map((olympiad, index) => {
            if (!olympiad?.olympiadType) return null;

            const visit = visits.find(
              (visit) => visit.year === olympiad.year.toString() && visit.type === olympiad.olympiadType?.toLowerCase()
            );

            const last = index === filteredOlympiads.length - 1;

            return (
              <div
                key={olympiad.id}
                className={`relative border-l-2 ${last ? 'border-transparent' : 'border-[#868686]'} ml-[8px]`}
              >
                <div className="absolute left-[-10px] top-[-6px] flex items-center">
                  <span
                    className={`city-status h-4 w-4 rounded-full bg-[var(--negative)] md:left-[-11px] md:h-5 md:w-5 ${
                      visit && 'bg-[var(--positive)]'
                    }`}
                  />
                  <h3 className="ml-4 text-xl md:text-[22px] md:leading-6">{`${olympiad.year} ${
                    olympiad.olympiadType.charAt(0) + olympiad.olympiadType.slice(1).toLowerCase()
                  } Games`}</h3>
                </div>
                <div className="media ml-5 items-end md:ml-7">
                  {visit && (
                    <OlympiadMedia
                      visit={visit}
                      citySlug={data?.slug}
                      olympiadType={olympiad.olympiadType}
                      handleImageModal={handleImageModal}
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
