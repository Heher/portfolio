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

function NewOlympiadCity({
  cityInfo,
  olympiads,
  visits,
  handleCitySelection,
  selectedCity,
  sharedStadiums,
  handleImageModal
}) {
  const cityRef = useRef(null);
  const { amountCompleted, totalOlympiads } = cityStatus(olympiads, visits);

  // const isSelectedCity = selectedCity?.name === cityInfo.name;

  return (
    <CityInList
      cityRef={cityRef}
      cityInfo={cityInfo}
      // handleCitySelection={handleCitySelection}
      amountCompleted={amountCompleted}
      totalOlympiads={totalOlympiads}
      olympiads={olympiads}
      visits={visits}
      // handleImageModal={handleImageModal}
      // isSelectedCity={isSelectedCity}
    />
  );
}

export default NewOlympiadCity;
