import { useRef } from 'react';
import CityInList from './CityInList';
import { cityStatus } from './utils';

type OlympiadCityProps = {
  cityInfo: {
    name: string;
    country: {
      name: string;
      flagByTimestamp: {
        png: string;
      };
    };
  };
};

export function OlympiadCity({ cityInfo, olympiads, visits }) {
  const cityRef = useRef(null);
  const { amountCompleted, totalOlympiads } = cityStatus(olympiads, visits);

  return (
    <CityInList
      cityRef={cityRef}
      cityInfo={cityInfo}
      amountCompleted={amountCompleted}
      totalOlympiads={totalOlympiads}
      olympiads={olympiads}
      visits={visits}
    />
  );
}
