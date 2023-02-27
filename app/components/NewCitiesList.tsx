import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewOlympiadCity from './olympiad-city/NewOlympiadCity';
import { OlympiadCity } from './olympiad-city/OlympiadCity';

function getVisibility(routeSelected: boolean, showDetails: boolean, width: number, globeMoveable: boolean) {
  if (width >= 768) {
    if (globeMoveable || routeSelected) {
      return 'hidden';
    }
    return 'block';
  }

  if (routeSelected || !showDetails || globeMoveable) {
    return 'hidden';
  }

  return 'block';
}

type CitiesListProps = {
  routeSelected: boolean;
  handleRouteSelection: () => void;
  showDetails: boolean;
  width: number;
  handleImageModal: (img: string) => void;
  globeMoveable: boolean;
};

const List = ({ match, history }) => (
  <ul className="card-list">
    <li>Test</li>
  </ul>
);

function CitiesList({ olympiadList, visits, variants, showDetails, globeMoveable, routeSelected }) {
  return (
    <motion.div
      className="cities-container relative z-40 flex flex-col bg-[var(--nav-background)] px-[5vw] pb-[20px] md:max-w-[50vw] md:bg-transparent md:px-[30px] md:pt-[100px] lg:max-w-[500px]"
      variants={variants}
      animate={globeMoveable || routeSelected ? 'hidden' : 'visible'}
    >
      {Object.entries(olympiadList).map(([cityId, olympiads]) => {
        const cityInfo = olympiads[0].city;

        // return <Link to={`/trip/${cityInfo.slug}`}>{cityInfo.name}</Link>;

        return <NewOlympiadCity key={cityId} cityInfo={cityInfo} olympiads={olympiads} visits={visits} />;
      })}
    </motion.div>
  );
}

export default CitiesList;

// function CitiesList({
//   olympiadList,
//   visits,
//   handleCitySelection,
//   selectedCity,
//   routeSelected,
//   handleRouteSelection,
//   showDetails,
//   width,
//   setSelectedImg,
//   globeMoveable
// }: CitiesListProps) {
//   return (
//     <motion.div
//       className={`cities-container relative mt-[25vh] bg-[var(--nav-background)] px-[5vw] pt-[25vh] pb-[20px] ${getVisibility(
//         routeSelected,
//         showDetails,
//         width,
//         globeMoveable
//       )} md:mt-0 md:max-w-[50vw] md:bg-transparent md:px-[30px] md:pt-[100px] lg:max-w-[500px]`}
//       variants={variants}
//       animate={(width < 768 && showDetails) || globeMoveable || routeSelected ? 'hidden' : 'visible'}
//     >
//       <button
//         className={`route-button relative mb-[40px] w-full rounded-[6px] border border-solid border-[#9db7c6] bg-[var(--globe-background)] p-[20px] font-semibold uppercase text-[#e0e0e0] ${
//           !selectedCity && 'md:z-40'
//         }`}
//         type="button"
//         onClick={handleRouteSelection}
//       >
//         My route
//       </button>
//       {Object.entries(olympiadList).map(([cityId, olympiads]) => {
//         const cityInfo = olympiads[0].city;

//         return (
//           <OlympiadCity
//             key={cityId}
//             cityInfo={cityInfo}
//             olympiads={olympiads}
//             visits={visits}
//             handleCitySelection={handleCitySelection}
//             selectedCity={selectedCity}
//             sharedStadiums={sharedStadiums.includes(cityInfo.name)}
//             setSelectedImg={setSelectedImg}
//           />
//         );
//       })}
//     </motion.div>
//   );
// }

// export default CitiesList;
