import { motion } from 'framer-motion';
import { OlympiadCity } from './olympiad-city/OlympiadCity';

function getVisibility(routeSelected: boolean, showDetails: boolean, width: number, globeMoveable: boolean) {
  if (width >= 768) {
    if (globeMoveable || routeSelected) {
      return 'hidden';
    }
    return 'block';
  }

  if (routeSelected || !showDetails || globeMoveable) {
    return 'hidden';
  }

  return 'block';
}

const sharedStadiums = ['St. Moritz', 'Los Angeles', 'Innsbruck'];

type CitiesListProps = {
  routeSelected: boolean;
  handleRouteSelection: () => void;
  showDetails: boolean;
  width: number;
  setSelectedImg: (img: string) => void;
  globeMoveable: boolean;
};

const variants = {
  hidden: { opacity: 0, x: '-150px', transition: { duration: 0.3 } },
  visible: { opacity: 1, x: '0px', transition: { duration: 0.3 } }
};

function CitiesList({
  olympiadList,
  visits,
  handleCitySelection,
  selectedCity,
  routeSelected,
  handleRouteSelection,
  showDetails,
  width,
  setSelectedImg,
  globeMoveable
}: CitiesListProps) {
  return (
    <motion.div
      className={`cities-container relative mt-[25vh] bg-[var(--nav-background)] px-[5vw] pt-[25vh] pb-[20px] ${getVisibility(
        routeSelected,
        showDetails,
        width,
        globeMoveable
      )} md:mt-0 md:max-w-[50vw] md:bg-transparent md:px-[30px] md:pt-[100px] lg:max-w-[500px]`}
      variants={variants}
      animate={(width < 768 && showDetails) || globeMoveable || routeSelected ? 'hidden' : 'visible'}
    >
      <button
        className={`route-button relative mb-[40px] w-full rounded-[6px] border border-solid border-[#9db7c6] bg-[var(--globe-background)] p-[20px] font-semibold uppercase text-[#e0e0e0] ${
          !selectedCity && 'md:z-40'
        }`}
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
}

export default CitiesList;
