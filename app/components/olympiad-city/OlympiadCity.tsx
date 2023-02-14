import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';
import { CityOlympiad } from './CityOlympiad';

function cityStatus(olympiads, visits) {
  let amountCompleted = 0;

  olympiads.forEach((olympiad) => {
    const visit = visits[olympiad.year.toString()]?.[olympiad.olympiadType.toLowerCase()];

    if (visit) amountCompleted++;
  });

  return {
    amountCompleted,
    totalOlympiads: olympiads.length
  };
}

export const OlympiadCity = ({ cityInfo, olympiads, visits, handleCitySelection, selectedCity, top }) => {
  const cityRef = useRef(null);
  const { amountCompleted, totalOlympiads } = cityStatus(olympiads, visits);

  const isSelectedCity = selectedCity?.name === cityInfo.name;

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries[0].target.classList.toggle('visible', entries[0].isIntersecting);
  //   });

  //   observer.observe(cityRef.current);
  // }, []);

  return (
    <motion.div
      ref={cityRef}
      role="button"
      className={`olympiad-city group p-[20px] bg-[#e0e0e0] w-[400px] rounded-[8px] border border-solid border-transparent cursor-pointer hover:bg-[#f3f3f3] hover:border-[#e0e0e0] ${
        isSelectedCity && 'selected'
      }`}
      onClick={() => handleCitySelection(cityInfo)}
      animate={{
        // position: isSelectedCity ? 'fixed' : 'absolute',
        top: isSelectedCity ? 'calc(50% - 300px)' : top,
        left: isSelectedCity ? 'calc(50% - 200px)' : '30px',
        height: isSelectedCity ? '600px' : '150px'
      }}
    >
      <div className="header flex items-center">
        <span
          className={`city-status w-[15px] h-[15px] rounded-full bg-[var(--negative)] mr-[10px] ${
            amountCompleted === totalOlympiads && 'bg-[var(--positive)]'
          } ${amountCompleted > 0 && amountCompleted < totalOlympiads && 'bg-[#FFA566]'}`}
        />
        <h3 className="">
          {cityInfo.name}, {cityInfo.country.name}
        </h3>
      </div>
      <ul className="flex items-center list-none p-0 group-[.selected]:flex-col">
        {olympiads.map((olympiad) => {
          const visit = visits[olympiad.year.toString()]?.[olympiad.olympiadType.toLowerCase()];

          return <CityOlympiad key={olympiad.id} olympiad={olympiad} visit={visit} />;
        })}
      </ul>
    </motion.div>
  );
};
