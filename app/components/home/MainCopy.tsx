import { motion } from 'framer-motion';
import TripStatus from '../TripStatus';

type MainCopyProps = {
  showDetails: boolean;
};

const MainCopy = ({ showDetails, olympiads, visits, globeMoveable }: MainCopyProps) => {
  return (
    <motion.div
      className="body-text px-[30px] pt-[5vh] md:max-w-md"
      animate={{ display: showDetails || globeMoveable ? 'none' : 'block' }}
    >
      <h1 className="text-[2.5rem] leading-[1.2] text-slate-100">
        Olympic trip
        <br />
        around the world
      </h1>

      <p className="text-md mt-[30px] text-slate-200">
        Combining my two passions of the Olympics and travelling, I decided to set a goal to travel to all of the
        Olympic cities, see their stadiums (or where they once were), go on a run or a ski trip, and overall just enjoy
        a part of the world I&rsquo;ve never been before.
      </p>
      <TripStatus olympiads={olympiads} visits={visits} />
    </motion.div>
  );
};

export default MainCopy;
