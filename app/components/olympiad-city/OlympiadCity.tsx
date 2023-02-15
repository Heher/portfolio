import { AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion';
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

function statusColor(amountCompleted, totalOlympiads) {
  if (amountCompleted === totalOlympiads) {
    return 'bg-[var(--positive)]';
  }

  if (amountCompleted < totalOlympiads && amountCompleted > 0) {
    return 'bg-[#FFA566]';
  }

  return 'bg-[var(--negative)]';
}

// function backgroundColor() {
//   cit
// }

export const OlympiadCity = ({ cityInfo, olympiads, visits, handleCitySelection, selectedCity, top }) => {
  // console.log(cityInfo);
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
    <LayoutGroup id={cityInfo.name}>
      {isSelectedCity ? (
        <motion.div
          ref={cityRef}
          layoutId="expandable-card"
          className={`olympiad-city group fixed top-[25dvh] left-0 h-[75dvh] w-[100vw] p-[20px] bg-[#e0e0e0] border border-solid border-transparent cursor-pointer selected z-20 overflow-scroll`}
        >
          <motion.div layoutId="expandable-card-header" className="header mt-[20dvh]">
            <div className="flex items-center">
              <motion.span
                className={`city-status w-[15px] h-[15px] rounded-full mr-[10px] ${statusColor(
                  amountCompleted,
                  totalOlympiads
                )}`}
              />
              <motion.h3 className="block text-semibold text-[2rem] leading-none">{cityInfo.name}</motion.h3>
            </div>
            <motion.h4 className="block text-bold text-[1.1rem] uppercase mt-[5px] ml-[25px]">
              {cityInfo.country.name}
            </motion.h4>
          </motion.div>
          <ul className="flex flex-col list-none p-0 mt-[25px] ml-[25px]">
            {olympiads.map((olympiad) => {
              const visit = visits[olympiad.year.toString()]?.[olympiad.olympiadType.toLowerCase()];

              return <CityOlympiad key={olympiad.id} olympiad={olympiad} visit={visit} selected />;
            })}
          </ul>
        </motion.div>
      ) : (
        <motion.div
          ref={cityRef}
          layoutId="expandable-card"
          role="button"
          className={`olympiad-city group static h-[100px] w-[90vw] ml-[5vw] mb-[20px] p-[20px] bg-[#e0e0e0] border border-solid border-transparent rounded-[6px] cursor-pointer hover:bg-[#f3f3f3] hover:border-[#e0e0e0]`}
          onClick={() => handleCitySelection(cityInfo)}
        >
          <motion.div layoutId="expandable-card-header" className="header flex items-center">
            <motion.span
              className={`city-status w-[15px] h-[15px] rounded-full mr-[10px] ${statusColor(
                amountCompleted,
                totalOlympiads
              )}`}
            />
            <div className="flex items-center">
              <motion.h3 className="text-[1rem]">{cityInfo.name}</motion.h3>
              <motion.h4 className="text-[1rem]">
                , {cityInfo.country.name === 'United States of America' ? 'USA' : cityInfo.country.name}
              </motion.h4>
            </div>
          </motion.div>
          <ul className="flex items-center list-none p-0 ml-[25px] mt-[15px]">
            {olympiads.map((olympiad) => {
              const visit = visits[olympiad.year.toString()]?.[olympiad.olympiadType.toLowerCase()];

              return <CityOlympiad key={olympiad.id} olympiad={olympiad} visit={visit} />;
            })}
          </ul>
        </motion.div>
      )}
    </LayoutGroup>
  );

  // return (
  //   <motion.div
  //     ref={cityRef}
  //     role="button"
  //     className={`olympiad-city group absolute p-[20px] bg-[#e0e0e0] border border-solid border-transparent cursor-pointer hover:bg-[#f3f3f3] hover:border-[#e0e0e0] ${
  //       isSelectedCity && 'selected'
  //     }`}
  //     onClick={() => handleCitySelection(cityInfo)}
  //     animate={{
  //       // position: isSelectedCity ? 'fixed' : 'static',
  //       // top: isSelectedCity ? '0' : top,
  //       // left: isSelectedCity ? '0' : '5vw',
  //       // height: isSelectedCity ? '75vh' : '150px',
  //       // width: isSelectedCity ? '100vw' : '90vw'

  //       top: isSelectedCity ? '0' : top,

  //       left: isSelectedCity ? '5vw' : '5vw',
  //       height: isSelectedCity ? '150vh' : '150px',
  //       width: isSelectedCity ? '90vw' : '90vw'
  //     }}
  //   >
  //     <motion.div className="header flex items-center">
  //       <span
  //         className={`city-status w-[15px] h-[15px] rounded-full mr-[10px] ${statusColor(
  //           amountCompleted,
  //           totalOlympiads
  //         )}`}
  //       />
  //       <h3 className="">
  //         {cityInfo.name}, {cityInfo.country.name}
  //       </h3>
  //     </motion.div>
  //     {/* <ul className="flex items-center list-none p-0 group-[.selected]:flex-col">
  //       {olympiads.map((olympiad) => {
  //         const visit = visits[olympiad.year.toString()]?.[olympiad.olympiadType.toLowerCase()];

  //         return <CityOlympiad key={olympiad.id} olympiad={olympiad} visit={visit} />;
  //       })}
  //     </ul> */}
  //   </motion.div>
  // );
};
