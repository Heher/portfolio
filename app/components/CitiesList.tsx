import { OlympiadCity } from './olympiad-city/OlympiadCity';

const CitiesList = ({
  olympiadList,
  visits,
  handleCitySelection,
  selectedCity,
  routeSelected,
  handleRouteSelection
}) => {
  return (
    <div className={`cities-container relative ml-[30px] hidden md:block ${routeSelected ? 'hidden' : ''}`}>
      <button
        className="route-button relative px-[20px] py-[10px] bg-blue-500 mb-[50px]"
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
            top={`${170 * index}px`}
          />
        );
      })}
    </div>
  );
};

export default CitiesList;
