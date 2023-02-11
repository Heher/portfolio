import { OlympiadCity } from './olympiad-city/OlympiadCity';

const CitiesList = ({ olympiadList, visits, handleCitySelection, selectedCity, routeSelected }) => {
  return (
    <div className={`cities-container ${routeSelected && 'route-selected'}`}>
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
