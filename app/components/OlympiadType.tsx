import { groupBy } from 'lodash';
import { OlympiadCity } from './olympiad-city/OlympiadCity';

export const OlympiadType = ({ type, olympiads, visits, handleCitySelection }) => {
  const olympiadsLength = olympiads.length;
  const visitsLength = Object.keys(visits).length;
  const percentVisited = Math.floor((visitsLength / olympiadsLength) * 100);

  const groupedOlympiads = groupBy(olympiads, (olympiad) => olympiad.city.id);

  return (
    <div>
      <h2>{`${type} (${visitsLength}/${olympiadsLength}) ${percentVisited}%`}</h2>

      {Object.entries(groupedOlympiads).map(([cityId, olympiads]) => {
        const cityInfo = olympiads[0].city;

        return (
          <OlympiadCity
            key={cityId}
            cityInfo={cityInfo}
            olympiads={olympiads}
            visits={visits}
            handleCitySelection={handleCitySelection}
          />
        );
      })}
    </div>
  );
};
