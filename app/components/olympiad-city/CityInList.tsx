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
};

const CityInList = ({ city, amountCompleted, totalOlympiads, olympiads }: CityInListProps) => {
  const { visits } = useTripContext();

  if (!city.slug) {
    return null;
  }

  return (
    <MotionLink
      layout
      initial={false}
      className={`mb-[20px] flex cursor-pointer rounded-[6px] bg-[#e0e0e0] hover:bg-[#f5f5f5]`}
      to={`/trip/${city.slug}`}
      layoutId={city.slug}
      exit={{ opacity: 0 }}
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
