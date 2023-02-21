import { LayoutGroup, motion } from 'framer-motion';
import { useRef } from 'react';
import { CityOlympiad } from './CityOlympiad';
import { OlympiadMedia } from './OlympiadMedia';

function cityStatus(olympiads, visits): { amountCompleted: number; totalOlympiads: number } {
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

function statusColor(amountCompleted: number, totalOlympiads: number) {
  if (amountCompleted === totalOlympiads) {
    return 'border-[var(--positive)]';
  }

  if (amountCompleted < totalOlympiads && amountCompleted > 0) {
    return 'border-[#FFA566]';
  }

  return 'border-[var(--negative)]';
}

const SharedOlympiads = ({ olympiads, visit, setSelectedImg }) => {
  const olympiadYears = olympiads.map((olympiad) => olympiad.year);
  const firstOlympiad = olympiads[0];

  return (
    <li className="city-olympiad mr-[20px]">
      <div className="title grid grid-cols-[10px_1fr] items-center gap-[7px]">
        <span className={`city-status h-[10px] w-[10px] rounded-full bg-[var(--positive)]`} />
        <p className="m-0">
          {olympiadYears.join(' and ')}
          {` ${firstOlympiad.olympiadType.charAt(0) + firstOlympiad.olympiadType.slice(1).toLowerCase()} Games`}
        </p>
      </div>
      <div className="media mt-[20px] items-end group-[.selected]:flex">
        <OlympiadMedia visit={visit} olympiadType={firstOlympiad.olympiadType} setSelectedImg={setSelectedImg} />
      </div>
    </li>
  );
};

export const OlympiadCity = ({
  cityInfo,
  olympiads,
  visits,
  handleCitySelection,
  selectedCity,
  sharedStadiums,
  setSelectedImg
}) => {
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
          className={`olympiad-city selected group fixed top-[25dvh] left-0 z-20 h-[75dvh] w-[100vw] cursor-pointer overflow-scroll border border-solid border-transparent bg-[#e0e0e0] p-[20px]`}
        >
          <motion.div layoutId="expandable-card-header" className="header mt-[20vh]">
            <div className="flex items-center">
              <motion.span
                className={`city-status mr-[10px] h-[15px] w-[15px] rounded-full ${statusColor(
                  amountCompleted,
                  totalOlympiads
                )}`}
              />
              <motion.h3 className="text-semibold block text-[2rem] leading-none">{cityInfo.name}</motion.h3>
            </div>
            <div className="mt-[8px] flex items-center">
              <motion.h4 className=" text-bold ml-[25px] text-[1.1rem] uppercase leading-none">
                {cityInfo.country.name}
              </motion.h4>
              <img
                className="ml-[10px] mt-[2px] h-[15px] w-auto"
                src={cityInfo.country.flagByTimestamp.png}
                alt={cityInfo.country.name}
              />
            </div>
          </motion.div>
          <ul className="mt-[25px] ml-[25px] flex list-none flex-col p-0">
            {sharedStadiums ? (
              <SharedOlympiads
                olympiads={olympiads}
                visit={visits[olympiads[0].year.toString()]?.[olympiads[0].olympiadType.toLowerCase()]}
                setSelectedImg={setSelectedImg}
              />
            ) : (
              olympiads.map((olympiad) => {
                const visit = visits[olympiad.year.toString()]?.[olympiad.olympiadType.toLowerCase()];

                return (
                  <CityOlympiad
                    key={olympiad.id}
                    olympiad={olympiad}
                    visit={visit}
                    setSelectedImg={setSelectedImg}
                    selected
                  />
                );
              })
            )}
          </ul>
        </motion.div>
      ) : (
        <motion.div
          ref={cityRef}
          layoutId="expandable-card"
          role="button"
          className={`olympiad-city group static mb-[20px] flex w-full cursor-pointer rounded-[6px] bg-[#e0e0e0] py-[30px] px-[25px] md:relative ${
            !selectedCity && 'md:z-40'
          } border-l-[15px] border-solid ${statusColor(amountCompleted, totalOlympiads)}`}
          onClick={() => handleCitySelection(cityInfo)}
        >
          {/* <motion.span
            className={`city-status mr-[10px] h-full w-[15px] ${statusColor(amountCompleted, totalOlympiads)}`}
          /> */}
          <div>
            <motion.div layoutId="expandable-card-header" className="header flex items-center">
              <div className="">
                <motion.h3 className="text-[1.1rem] font-semibold uppercase tracking-wide">{cityInfo.name}</motion.h3>
                <motion.h4 className="text-[1rem]">
                  {cityInfo.country.name === 'United States of America' ? 'USA' : cityInfo.country.name}
                </motion.h4>
              </div>
            </motion.div>
            <ul className="mt-[20px] flex list-none items-center p-0">
              {olympiads.map((olympiad) => {
                const visit = visits[olympiad.year.toString()]?.[olympiad.olympiadType.toLowerCase()];

                return (
                  <CityOlympiad key={olympiad.id} olympiad={olympiad} visit={visit} setSelectedImg={setSelectedImg} />
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </LayoutGroup>
  );
};
