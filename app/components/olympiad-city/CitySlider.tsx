import { motion } from 'framer-motion';
import { OlympiadMedia } from './OlympiadMedia';
import type { CityFieldsFragment, CityOlympiadFragment } from '~/gql/graphql';
import { cityStatus, filterOutNonOlympiadsForCity, statusColor } from './utils';
import { sharedStadiums } from './settings';
import type { Visit } from 'types/globe';

type SharedOlympiadsProps = {
  olympiads: (CityOlympiadFragment | null)[];
  citySlug: string;
  visits: Visit[];
  handleImageModal: (img: string | null) => void;
};

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
  data: CityFieldsFragment | null;
  visits: Visit[];
  handleImageModal: (img: string | null) => void;
}) {
  if (!data?.name) return null;

  const filteredOlympiads = filterOutNonOlympiadsForCity(data.name, data.olympiads.nodes);

  const { amountCompleted, totalOlympiads } = cityStatus(filteredOlympiads, visits);

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
      <div className="mt-16 md:mt-24">
        {sharedStadiums.includes(data?.name) ? (
          <SharedOlympiads
            olympiads={filteredOlympiads}
            citySlug={data.slug}
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
                <div className="absolute left-[-9px] top-[-6px] flex items-center">
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
                      citySlug={data.slug}
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
