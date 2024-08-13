import { motion } from 'framer-motion';
import ExpandIcon from '~/icons/Expand';
import * as gtag from '~/utils/gtags.client';
import FlagContainer from './FlagContainer';
import type { RectReadOnly } from 'react-use-measure';
import Close from '~/icons/Close';

type IteneraryProps = {
  expand: boolean;
  setExpand: (expand: boolean) => void;
  contentSize: RectReadOnly;
  size: { width: number; height: number };
};

function getClosePosition(windowHeight: number) {
  return (windowHeight + 20) * -1;
}

function getCloseRight(windowWidth: number) {
  if (windowWidth <= 640) {
    return -10;
  }

  return -20;
}

export function Itenerary({ expand, setExpand, contentSize, size }: IteneraryProps) {
  function handleItineraryClick() {
    gtag.event({
      action: 'click_itinerary',
      category: 'Itinerary Click',
      label: expand ? 'Close' : 'Open'
    });

    setExpand(!expand);
  }

  return (
    <div className="relative w-full max-w-lg">
      <motion.button
        className="z-10 flex h-10 w-full max-w-lg items-center justify-center border-2 border-[#282B27] bg-[#282B27] text-center text-[#e0e0e0] transition-colors hover:bg-[#403a3b]"
        onClick={handleItineraryClick}
        initial={{ width: '100%', top: 0, right: 0 }}
        animate={{
          position: expand ? 'absolute' : 'relative',
          width: expand ? 40 : '100%',
          top: expand ? getClosePosition(contentSize?.height) : 0,
          right: expand ? getCloseRight(size.width) : 0,
          borderRadius: expand ? '50%' : 0
        }}
        aria-label={expand ? `Close expanded list` : `Expand for a list of my most recent travels`}
        aria-controls="itenerary"
        aria-expanded={expand}
      >
        <motion.div>
          {expand ? (
            <Close className="fill-[#e0e0e0]" />
          ) : (
            [0, 1].map((_, i) => <ExpandIcon key={i} className="h-2 fill-[#e0e0e0]" delay={i * 0.2} />)
          )}
        </motion.div>
      </motion.button>
      <motion.div
        className="absolute top-10 z-10 h-16 w-full px-[2px]"
        initial={{ height: 64, top: 40 }}
        animate={{
          height: expand ? 0 : 64,
          top: expand ? getClosePosition(size.height) : 40
        }}
      >
        <div className="h-16 w-full bg-gradient-to-b from-[rgba(176,178,178,0.7)] to-transparent"></div>
      </motion.div>
      <div className="relative">
        <FlagContainer expand={expand} contentSize={size} mainContentSize={contentSize} />
      </div>
    </div>
  );
}
