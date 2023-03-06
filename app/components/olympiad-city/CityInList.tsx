import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { CityOlympiad } from './CityOlympiad';
import { statusColor } from './utils';

const MotionLink = motion(Link);

const CityInList = ({ cityRef, cityInfo, amountCompleted, totalOlympiads, olympiads, visits }) => {
  return (
    <MotionLink
      ref={cityRef}
      layout
      initial={false}
      className={`mb-[20px] flex cursor-pointer rounded-[6px] bg-[#e0e0e0]`}
      to={`/trip/${cityInfo.slug}`}
    >
      <motion.span
        className={`city-status block rounded-l-[6px] border-l-[15px] border-solid ${statusColor(
          amountCompleted,
          totalOlympiads
        )}`}
        layoutId={`city-status`}
      />
      <div className={`flex py-[30px] px-[25px]`}>
        <div className="text-[var(--text)]">
          <motion.div className="header flex items-center">
            <div className="">
              <motion.h3 className="text-[1.1rem] font-semibold uppercase tracking-wide">
                {cityInfo.name === 'Squaw Valley' ? 'Palisades Tahoe' : cityInfo.name}
              </motion.h3>
              <motion.h4 className="text-[1rem]">
                {cityInfo.country.name === 'United States of America' ? 'USA' : cityInfo.country.name}
              </motion.h4>
            </div>
          </motion.div>
          <ul className="mt-[20px] flex list-none items-center p-0">
            {olympiads.map((olympiad) => {
              const visit = visits[olympiad.year.toString()]?.[olympiad.olympiadType.toLowerCase()];

              return <CityOlympiad key={olympiad.id} olympiad={olympiad} visit={visit} />;
            })}
          </ul>
        </div>
      </div>
    </MotionLink>
  );
};

export default CityInList;
