import { motion } from 'framer-motion';
import { CityOlympiad } from './CityOlympiad';
import { statusColor } from './utils';

const CityInList = ({
  cityRef,
  cityInfo,
  amountCompleted,
  totalOlympiads,
  handleCitySelection,
  olympiads,
  visits,
  setSelectedImg,
  isSelectedCity
}) => {
  return (
    <motion.div
      ref={cityRef}
      layoutId="expandable-card"
      role="button"
      className={`olympiad-city group static mb-[20px] flex w-full cursor-pointer rounded-[6px] border-l-[15px] border-solid bg-[#e0e0e0] py-[30px] px-[25px] md:relative ${
        isSelectedCity && 'md:z-40'
      } ${statusColor(amountCompleted, totalOlympiads)}`}
      onClick={() => handleCitySelection(cityInfo)}
    >
      <div className="text-[var(--text)]">
        <motion.div layoutId="expandable-card-header" className="header flex items-center">
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

            return <CityOlympiad key={olympiad.id} olympiad={olympiad} visit={visit} setSelectedImg={setSelectedImg} />;
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default CityInList;
