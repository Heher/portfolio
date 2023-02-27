import { motion } from 'framer-motion';
import { CityOlympiad } from './CityOlympiad';
import SharedOlympiads from './SharedOlympiads';
import { statusColor } from './utils';

const SelectedCity = ({
  cityRef,
  amountCompleted,
  totalOlympiads,
  cityInfo,
  sharedStadiums,
  handleImageModal,
  olympiads,
  visits
}) => {
  return (
    <motion.div
      ref={cityRef}
      layout
      layoutId="expandable-card"
      className={`olympiad-city selected group z-20 overflow-scroll bg-[#e0e0e0]`}
      style={{
        position: 'fixed',
        top: '25vh',
        left: '0px',
        height: '75vh',
        width: '100vw'
      }}
    >
      <motion.span
        layoutId="expandable-card-status"
        className={`block w-full border-t-[15px] border-solid ${statusColor(amountCompleted, totalOlympiads)}`}
      />
      <motion.div className="mx-auto md:max-w-[800px]">
        <motion.div layoutId="expandable-card-header" className="header mt-[25vh] md:mt-[15vh]">
          <div className="flex items-center">
            <motion.span
              className={`city-status mr-[10px] h-[15px] w-[15px] rounded-full ${statusColor(
                amountCompleted,
                totalOlympiads
              )}`}
            />
            <motion.h3
              layoutId="expandable-card-city"
              className="block text-[2rem] font-semibold uppercase leading-none tracking-wide"
            >
              {cityInfo.name === 'Squaw Valley' ? 'Palisades Tahoe' : cityInfo.name}
            </motion.h3>
          </div>
          <div className="mt-[10px] flex items-center">
            <motion.h4 className="ml-[25px] text-[1.1rem] uppercase leading-none">{cityInfo.country.name}</motion.h4>
            <img
              className="ml-[10px] mt-[-1px] h-[15px] w-auto"
              src={cityInfo.country.flagByTimestamp.png}
              alt={cityInfo.country.name}
            />
          </div>
        </motion.div>
        <motion.ul className="mt-[40px] flex list-none flex-col p-0">
          {sharedStadiums ? (
            <SharedOlympiads
              olympiads={olympiads}
              visit={visits[olympiads[0].year.toString()]?.[olympiads[0].olympiadType.toLowerCase()]}
              handleImageModal={handleImageModal}
            />
          ) : (
            olympiads.map((olympiad) => {
              const visit = visits[olympiad.year.toString()]?.[olympiad.olympiadType.toLowerCase()];

              return (
                <CityOlympiad
                  key={olympiad.id}
                  olympiad={olympiad}
                  visit={visit}
                  handleImageModal={handleImageModal}
                  selected
                />
              );
            })
          )}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default SelectedCity;
