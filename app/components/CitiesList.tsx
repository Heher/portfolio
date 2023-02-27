import { motion } from 'framer-motion';
import { OlympiadCity } from './olympiad-city/OlympiadCity';

type CitiesListProps = {
  routeSelected: boolean;
  handleRouteSelection: () => void;
  showDetails: boolean;
  width: number;
  handleImageModal: (img: string) => void;
  globeMoveable: boolean;
};

export function CitiesList({ olympiadList, visits, variants, globeMoveable, routeSelected }) {
  return (
    <motion.div
      className="cities-container relative z-0 flex flex-col bg-[var(--nav-background)] px-[5vw] pb-[20px] md:z-40 md:max-w-[50vw] md:bg-transparent md:px-[30px] md:pt-[100px] lg:max-w-[500px]"
      variants={variants}
      animate={globeMoveable || routeSelected ? 'hidden' : 'visible'}
    >
      {Object.entries(olympiadList).map(([cityId, olympiads]) => {
        const cityInfo = olympiads[0].city;

        return <OlympiadCity key={cityId} cityInfo={cityInfo} olympiads={olympiads} visits={visits} />;
      })}
    </motion.div>
  );
}
