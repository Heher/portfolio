import { motion } from 'framer-motion';
import ExpandIcon from '~/icons/Expand';
// import * as gtag from '~/utils/gtags.client';
import FlagContainer from './FlagContainer';
import type { RectReadOnly } from 'react-use-measure';
// import Close from '~/icons/Close';

type IteneraryProps = {
  expand: boolean;
  setExpand: (expand: boolean) => void;
  contentSize: RectReadOnly;
  size: { width: number; height: number };
};

// function getClosePosition(windowHeight: number) {
//   // console.log('windowHeight', windowHeight);
//   const closeTop = (windowHeight + 20) * -1;

//   // console.log('closeTop', closeTop);

//   return 0;
// }

// function getListHeight(windowHeight: number) {
//   console.log('windowHeight', windowHeight);
//   if (window.innerHeight > 800) {
//     return (window.innerHeight - 800) / 2 - 20;
//   }

//   return windowHeight - 80;
// }

// function getListWidth(windowWidth: number) {
//   if (windowWidth > 512) {
//     return (windowWidth - 512) / 2 - 20;
//   }

//   return windowWidth - 80;
// }

export function Itenerary({ setExpand }: IteneraryProps) {
  function handleItineraryClick() {
    // gtag.event({
    //   action: 'click_itinerary',
    //   category: 'Itinerary Click',
    //   label: expand ? 'Close' : 'Open'
    // });

    setExpand(true);
  }

  return (
    <motion.div className="relative w-full" layoutId="itenerary">
      <motion.div
        className="absolute top-10 z-10 h-16 w-full px-[2px]"
        initial={{ height: 64, top: 40 }}
        animate={{
          height: 64,
          top: 40
        }}
      >
        <div className="h-16 w-full bg-gradient-to-b from-[rgba(176,178,178,0.7)] to-transparent"></div>
      </motion.div>
      <motion.button
        layoutId="expand-button"
        className="z-20 flex h-10 w-full max-w-lg items-center justify-center border-2 border-[#282B27] bg-[#282B27] text-center text-[#e0e0e0] transition-colors hover:bg-[#403a3b]"
        onClick={handleItineraryClick}
        initial={{ width: '100%', top: 0, right: 0 }}
        animate={{
          position: 'relative',
          width: '100%',
          top: 0,
          right: 0,
          borderRadius: 0
        }}
        aria-label={`Expand for a list of my most recent travels`}
        aria-controls="itenerary"
        aria-expanded={false}
      >
        <motion.div layoutId="button-icon">
          {[0, 1].map((_, i) => (
            <ExpandIcon key={i} className="h-2 fill-[#e0e0e0]" delay={i * 0.2} />
          ))}
        </motion.div>
      </motion.button>
      <FlagContainer />
    </motion.div>
  );
}
