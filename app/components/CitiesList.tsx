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
    <div
      className={`cities-container relative mt-[25vh] bg-[var(--nav-background)] pt-[25vh] pb-[20px] ${getVisibility(
        routeSelected,
        showDetails,
        width
      )} md:mt-0 md:max-w-[40vw] md:px-[30px] md:pt-[100px]`}
    >
      <button
        className="route-button relative ml-[5vw] mb-[40px] w-[90vw] rounded-[6px] border border-solid border-[#9db7c6] bg-[var(--globe-background)] p-[20px] font-semibold uppercase text-[#e0e0e0] md:ml-0 md:w-[40vw]"
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
