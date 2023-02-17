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
      className={`cities-container relative mt-[25vh] pt-[25vh] pb-[20px] bg-[var(--nav-background)] ${getVisibility(
        routeSelected,
        showDetails,
        width
      )}`}
    >
      <button
        className="route-button relative px-[20px] py-[20px] bg-[var(--globe-background)] w-[90vw] ml-[5vw] mb-[40px] text-[#e0e0e0] uppercase font-semibold rounded-[6px] border border-solid border-[#9db7c6]"
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
