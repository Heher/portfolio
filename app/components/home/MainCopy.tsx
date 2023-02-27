import { motion } from 'framer-motion';
import TripStatus from '../TripStatus';

type MainCopyProps = {
  showDetails: boolean;
  routeSelected: boolean;
};

const variants = {
  hidden: { opacity: 0, x: '-150px', transition: { duration: 0.3 } },
  visible: { opacity: 1, x: '0px', transition: { duration: 0.3 } }
};

function MainCopy({ showDetails, olympiads, visits, globeMoveable, routeSelected }) {
  return (
    <motion.div
      className="body-text px-[30px] pt-[5vh] md:max-w-[26rem] lg:max-w-lg"
      variants={variants}
      animate={showDetails || globeMoveable || routeSelected ? 'hidden' : 'visible'}
    >
      <h1 className="text-[2.5rem] leading-[1.2] text-slate-100 lg:text-[3rem]">
        Olympic trip
        <br />
        around the world
      </h1>

      <p className="mt-[30px] text-[1.1rem] text-slate-200 lg:text-[1.3rem]">
        As a person who thoroughly enjoys the Olympics and travelling, I decided to set a goal to travel to all of the
        Olympic cities, see their stadiums (or where they once were), go on a run or a ski trip, and overall just enjoy
        a part of the world I&rsquo;ve never been before.
      </p>
      <TripStatus olympiads={olympiads} visits={visits} />
    </motion.div>
  );
}

export default MainCopy;
