import { OlympiadCity } from './olympiad-city/OlympiadCity';

function getVisibility(routeSelected, showDetails, width, globeMoveable) {
  if (width > 768) {
    if (globeMoveable) {
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

const CitiesList = ({
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
}) => {
  return (
    <div
      className={`cities-container relative mt-[25vh] bg-[var(--nav-background)] px-[5vw] pt-[25vh] pb-[20px] ${getVisibility(
        routeSelected,
        showDetails,
        width,
        globeMoveable
      )} md:mt-0 md:max-w-[40vw] md:px-[30px] md:pt-[100px]`}
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
      {Object.entries(olympiadList).map(([cityId, olympiads], index) => {
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
    </div>
  );
};

export default CitiesList;
