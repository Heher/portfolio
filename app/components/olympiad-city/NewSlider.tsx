import { motion } from 'framer-motion';
import { OlympiadMedia } from './OlympiadMedia';
import type { CityFieldsFragment } from '~/gql/graphql';
import { cityStatus, filterOutNonOlympiadsForCity, statusColor } from './utils';
import { sharedStadiums } from './settings';

function SharedOlympiads({ olympiads, visits, handleImageModal }) {
  const firstOlympiad = olympiads[0];

  const visit = visits.find(
    (visit) => visit.year === firstOlympiad.year.toString() && visit.type === firstOlympiad.olympiadType?.toLowerCase()
  );

  const headerText = olympiads.map((olympiad) => olympiad.year).join(' and ');

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
          <OlympiadMedia visit={visit} olympiadType={firstOlympiad.olympiadType} handleImageModal={handleImageModal} />
        )}
      </div>
    </div>
  );
}

export default function NewSlider({
  data,
  visits,
  handleImageModal
}: {
  data: CityFieldsFragment | null;
  visits: any;
  handleImageModal: any;
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
      className={`city-status fixed left-1/2 top-1/3 z-20 h-[67dvh] w-full max-w-[800px] overflow-scroll border-t-[20px] bg-[#e0e0e0] px-6 py-12 md:p-10 ${statusColor(
        amountCompleted,
        totalOlympiads
      )}`}
    >
      <h1 className="text-4xl font-semibold md:text-6xl">{data?.name}</h1>
      <div className="mt-2 flex items-center md:mt-4">
        {data?.country?.flagByTimestamp?.png && (
          <img src={data.country.flagByTimestamp.png} alt={data.country.name || ''} className="mr-3 h-5 md:h-8" />
        )}
        <h2 className="text-xl md:text-3xl">{data?.country?.name}</h2>
      </div>
      <div className="mt-16 md:mt-24">
        {sharedStadiums.includes(data?.name) ? (
          <SharedOlympiads olympiads={filteredOlympiads} visits={visits} handleImageModal={handleImageModal} />
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
                <div className="flex items-center">
                  <span
                    className={`city-status absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-[var(--negative)] md:left-[-11px] md:h-5 md:w-5 ${
                      visit && 'bg-[var(--positive)]'
                    }`}
                  />
                  <h3 className="absolute left-5 top-[-5px] text-xl md:left-7 md:top-[-6px] md:text-2xl">{`${
                    olympiad.year
                  } ${olympiad.olympiadType.charAt(0) + olympiad.olympiadType.slice(1).toLowerCase()} Games`}</h3>
                </div>
                <div className="media ml-5 mt-12 items-end md:ml-7">
                  {visit && (
                    <OlympiadMedia
                      visit={visit}
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
