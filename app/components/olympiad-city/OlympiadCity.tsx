import { LayoutGroup } from 'framer-motion';
import { useRef } from 'react';
import CityInList from './CityInList';
import SelectedCity from './SelectedCity';
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

export const OlympiadCity: React.FC<OlympiadCityProps> = ({
  cityInfo,
  olympiads,
  visits,
  handleCitySelection,
  selectedCity,
  sharedStadiums,
  setSelectedImg
}) => {
  const cityRef = useRef(null);
  const { amountCompleted, totalOlympiads } = cityStatus(olympiads, visits);

  const isSelectedCity = selectedCity?.name === cityInfo.name;

  return (
    <LayoutGroup id={cityInfo.name}>
      {isSelectedCity ? (
        <SelectedCity
          cityRef={cityRef}
          cityInfo={cityInfo}
          amountCompleted={amountCompleted}
          totalOlympiads={totalOlympiads}
          sharedStadiums={sharedStadiums}
          setSelectedImg={setSelectedImg}
          olympiads={olympiads}
          visits={visits}
        />
      ) : (
        <CityInList
          cityRef={cityRef}
          cityInfo={cityInfo}
          handleCitySelection={handleCitySelection}
          amountCompleted={amountCompleted}
          totalOlympiads={totalOlympiads}
          olympiads={olympiads}
          visits={visits}
          setSelectedImg={setSelectedImg}
          isSelectedCity={isSelectedCity}
        />
      )}
    </LayoutGroup>
  );
};
