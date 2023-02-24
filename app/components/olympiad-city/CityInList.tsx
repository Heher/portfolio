import { AnimatePresence, motion } from 'framer-motion';
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
      layout
      layoutId="expandable-card"
      initial={false}
      role="button"
      className={`olympiad-city group mb-[20px] flex cursor-pointer rounded-[6px] bg-[#e0e0e0] ${
        isSelectedCity && 'md:z-40'
      }`}
      onClick={() => handleCitySelection(cityInfo)}
      style={{
        position: 'relative',
        width: '100%'
      }}
    >
      <motion.span
        layoutId="expandable-card-status"
        className={`block rounded-l-[6px] border-l-[15px] border-solid ${statusColor(amountCompleted, totalOlympiads)}`}
      />
      <div className={`flex py-[30px] px-[25px]`}>
        <div className="text-[var(--text)]">
          <motion.div layoutId="expandable-card-header" className="header flex items-center">
            <div className="">
              <motion.h3
                layoutId="expandable-card-city"
                className="text-[1.1rem] font-semibold uppercase tracking-wide"
              >
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

              return (
                <CityOlympiad key={olympiad.id} olympiad={olympiad} visit={visit} setSelectedImg={setSelectedImg} />
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CityInList;
