import { motion } from 'framer-motion';
import { basicVariants, slideUpVariants } from './animationVariants';
import { OlympiadCity } from './olympiad-city/OlympiadCity';

function getVisibility(routeSelected, showDetails, width) {
  if (width > 768) {
    return 'block';
  }

  if (routeSelected || !showDetails) {
    return 'hidden';
  }

  return 'block';
}

const sharedStadiums = ['St. Moritz', 'Los Angeles', 'Innsbruck'];

const CitiesList = ({
  olympiadList,
  visits,
  handleCitySelection,
  selectedCity,
  routeSelected,
  handleRouteSelection,
  showDetails,
  width,
  setSelectedImg
}) => {
  return (
    <motion.div
      // className={`cities-container relative mt-[25vh] bg-[var(--nav-background)] px-[5vw] pt-[25vh] pb-[20px] ${getVisibility(
      //   routeSelected,
      //   showDetails,
      //   width
      // )} md:mt-0 md:max-w-[40vw] md:px-[30px] md:pt-[100px]`}
      className={`cities-container relative mt-[25vh] bg-[var(--nav-background)] px-[5vw] pb-[20px] md:mt-0 md:max-w-[40vw] md:px-[30px] md:pt-[100px]`}
      variants={basicVariants}
      initial="hidden"
      animate={showDetails ? 'shown' : 'hidden'}
    >
      <button
        className="route-button relative mb-[40px] w-full rounded-[6px] border border-solid border-[#9db7c6] bg-[var(--globe-background)] p-[20px] font-semibold uppercase text-[#e0e0e0]"
        type="button"
        onClick={handleRouteSelection}
      >
        My route
      </button>
      {Object.entries(olympiadList).map(([cityId, olympiads]) => {
        const cityInfo = olympiads[0].city;

        return (
          <OlympiadCity
            key={cityId}
            cityInfo={cityInfo}
            olympiads={olympiads}
            visits={visits}
            handleCitySelection={handleCitySelection}
            selectedCity={selectedCity}
            sharedStadiums={sharedStadiums.includes(cityInfo.name)}
            setSelectedImg={setSelectedImg}
          />
        );
      })}
    </motion.div>
  );
};

export default CitiesList;
