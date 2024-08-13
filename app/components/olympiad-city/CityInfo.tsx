import { motion } from 'framer-motion';
import CityOlympiadGroup from './CityOlympiadGroup';
import { sharedStadiums } from './settings';
import SharedOlympiads from './SharedOlympiads';

type CityInfoProps = {
  cityName: string;
  olympiads: any[];
};

const CityInfo = (props: CityInfoProps) => {
  if (!props.cityName) {
    return null;
  }

  return (
    <motion.ul className="mt-[40px] flex list-none flex-col p-0">
      {sharedStadiums.includes(props.cityName) ? (
        <SharedOlympiads olympiads={props.olympiads} cityName={props.cityName} />
      ) : (
        <CityOlympiadGroup olympiads={props.olympiads} cityName={props.cityName} />
      )}
    </motion.ul>
  );
};

export default CityInfo;
