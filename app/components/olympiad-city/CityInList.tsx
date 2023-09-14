import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import type { CityFieldsFragment, CityOlympiadFragment } from '~/gql/graphql';
import { useTripContext } from '~/routes/trip';
import { CityOlympiad } from './CityOlympiad';
import { statusColor } from './utils';

const MotionLink = motion(Link);

type CityInListProps = {
  city: CityFieldsFragment;
  amountCompleted: number;
  totalOlympiads: number;
  olympiads: (CityOlympiadFragment | null)[];
  firstRef: React.RefObject<HTMLDivElement> | null;
};

const CityInList = ({ city, amountCompleted, totalOlympiads, olympiads, firstRef }: CityInListProps) => {
  const { visits, appState } = useTripContext();

  if (!city.slug) {
    return null;
  }

  return (
    <MotionLink
      ref={firstRef}
      className={`mb-[20px] flex cursor-pointer rounded-[6px] bg-[#e0e0e0] hover:bg-[#f5f5f5]`}
      to={`/trip/${city.slug}`}
      // layoutId={city.slug}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: appState.selectedCity ? (appState.selectedCity === city.slug ? 0 : -100) : 0 }}
      // exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.span
        className={`city-status block rounded-l-[6px] border-l-[15px] border-solid ${statusColor(
          amountCompleted,
          totalOlympiads
        )}`}
      />
      <div className={`flex px-[25px] py-[30px]`}>
        <div className="text-[var(--text)]">
          <motion.div className="header flex items-center">
            <div className="">
              <motion.h3 className="text-[1.1rem] font-semibold uppercase tracking-wide">{city.name}</motion.h3>
              <motion.h4 className="text-[1rem]">
                {city.country?.name === 'United States of America' ? 'USA' : city.country?.name}
              </motion.h4>
            </div>
          </motion.div>
          <ul className="mt-[20px] flex list-none items-center p-0">
            {olympiads.map((olympiad) => {
              if (!olympiad?.olympiadType) {
                return null;
              }

              const visit = visits.find(
                (visit) =>
                  visit.year === olympiad.year.toString() && visit.type === olympiad?.olympiadType?.toLowerCase()
              );

              return <CityOlympiad key={olympiad.id} olympiad={olympiad} visit={visit} />;
            })}
          </ul>
        </div>
      </div>
    </MotionLink>
  );
};

export default CityInList;
