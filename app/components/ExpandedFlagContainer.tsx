import { format, isSameYear } from 'date-fns';
import { Fragment, useEffect, useRef, useState } from 'react';
import CarIcon from '~/icons/Car';
import TrainIcon from '~/icons/Train';
import BusIcon from '~/icons/Bus';
import FerryIcon from '~/icons/Ferry';
import WalkIcon from '~/icons/Walk';
import { motion } from 'framer-motion';
import type { RectReadOnly } from 'react-use-measure';
import { journey } from '~/data/journey';
import PlaneIcon from '~/icons/Plane';
import { Link } from '@remix-run/react';
import Close from '~/icons/Close';
// import ExpandIcon from '~/icons/Expand';

type TransportType = {
  type: string;
  amount?: number;
};

const MotionLink = motion(Link);

function TransportIconContainer({ transports }: { transports: TransportType[] }) {
  const top = 112 + transports.length * 30;

  return (
    <div
      className="absolute left-0 grid -translate-x-1/2 items-center justify-items-center bg-index-background"
      style={{
        top: top * -1,
        gridTemplateRows: `repeat(${transports.length}, 60px)`
      }}
    >
      {transports.map((transport) => (
        <div key={transport.type} className="relative">
          {transport.amount && (
            <span
              className="absolute -right-3 -top-4 size-5 rounded-full bg-[#282B27] text-center text-xs leading-5 text-[#e0e0e0]"
              aria-hidden="true"
            >
              {`x${transport.amount}`}
            </span>
          )}
          <TransportIcon transport={transport} />
        </div>
      ))}
    </div>
  );
}

function TransportIcon({ transport }: { transport: TransportType }) {
  switch (transport.type) {
    case 'plane':
      return <PlaneIcon className={`h-4 fill-[#282B27] `} />;

    case 'car':
      return <CarIcon className={`h-5 fill-[#282B27] `} />;

    case 'train':
      return <TrainIcon className={`h-7 fill-[#282B27] `} />;

    case 'bus':
      return <BusIcon className={`h-6 fill-[#282B27] `} />;

    case 'ferry':
      return <FerryIcon className={`h-7 fill-[#282B27] `} />;

    case 'walk':
      return <WalkIcon className={`h-6 fill-[#282B27] `} />;
    default:
      return (
        <span className="absolute left-[-22px] top-[-66px] py-2 text-center text-xs uppercase">{transport.type}</span>
      );
  }
}

function TripVisit({ visit, date, lastVisit }: { visit: (typeof journey)[0]; date: Date; lastVisit?: boolean }) {
  const [hover, setHover] = useState(false);

  // pb-32 = 128px
  // pb-40 = 160px
  // pb-44 = 176px
  // pb-48 = 192px
  // pb-52 = 208px

  return (
    <div
      className={`relative border-l-4 ${
        !lastVisit ? 'border-[#282B27] pb-52' : 'border-transparent pb-7'
      } text-[#282B27]`}
    >
      {visit.transport && <TransportIconContainer transports={visit.transport} />}
      {visit.link ? (
        <MotionLink
          to={visit.link}
          className={`absolute left-[-22px] top-0 size-10 rounded-full bg-[var(--index-link)] text-center text-xs leading-10 text-[#e0e0e0]`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          animate={{
            background: hover ? 'var(--index-link-hover)' : 'var(--index-link)'
          }}
          aria-label={format(date, 'MMMM d, yyyy')}
        >
          {format(date, 'M/d')}
        </MotionLink>
      ) : (
        <span
          className={`absolute left-[-22px] top-0 size-10 rounded-full bg-[#282B27] text-center text-xs leading-10 text-[#e0e0e0]`}
          aria-label={format(date, 'MMMM d, yyyy')}
        >
          {format(date, 'M/d')}
        </span>
      )}
      <div className="pl-10">
        {visit.link ? (
          <MotionLink
            to={visit.link}
            className="text-base font-semibold leading-10 text-[var(--index-link)]"
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            animate={{
              color: hover ? 'var(--index-link-hover)' : 'var(--index-link)'
            }}
          >
            {visit.name}
          </MotionLink>
        ) : (
          <p className="text-base font-semibold leading-10">{visit.name}</p>
        )}
        <div className="mt-1 flex items-center">
          <img
            className="mr-3 h-4 w-auto shadow-[1px_1px_4px_rgba(80,80,80,0.5)]"
            src={`/flags/${visit.flagSlug}.png`}
            alt={`Flag of ${visit.country}`}
          />
          <span className="text-sm font-semibold">{visit.country}</span>
        </div>
      </div>
    </div>
  );
}

// function getExpandHeight(windowHeight: number) {
//   return windowHeight * -1;
// }

function getListWidth() {
  if (window.innerWidth > 512) {
    return 512;
  }

  return window.innerWidth - 40;
}

function getListHeight() {
  if (window.innerHeight > 800) {
    return 800;
  }

  return window.innerHeight - 60;
}

function getCloseTop() {
  if (window.innerHeight > 800) {
    return (window.innerHeight - 800) / 2 - 20;
  }

  return 10;
}

function getCloseRight() {
  if (window.innerWidth > 512) {
    return (window.innerWidth - 512) / 2 - 20;
  }

  return 5;
}

export default function ExpandedFlagContainer({ setExpand }: { setExpand: (expand: boolean) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const endOfListRef = useRef<HTMLDivElement>(null);

  function handleItineraryClick() {
    // gtag.event({
    //   action: 'click_itinerary',
    //   category: 'Itinerary Click',
    //   label: expand ? 'Close' : 'Open'
    // });

    setExpand(false);
  }

  useEffect(() => {
    if (ref.current) {
      const body = document.body;
      body.classList.remove('bg-globe-background');
      body.classList.remove('bg-index-background');
      body.classList.add('bg-slate-400');

      const observer = new ResizeObserver(() => {
        if (ref.current && containerRef.current && endOfListRef.current) {
          ref.current.scrollTop = containerRef.current.offsetHeight;
        }
      });

      observer.observe(ref.current);

      return () => {
        body.classList.remove('bg-slate-400');
        body.classList.add('bg-index-background');

        observer.disconnect();
      };
    }
  }, []);

  return (
    <motion.div className="fixed inset-0 bg-slate-400" layoutId="itenerary">
      <motion.button
        layoutId="expand-button"
        className="absolute z-20 flex size-10 max-w-lg items-center justify-center rounded-full border-2 border-[#282B27] bg-[#282B27] text-center text-[#e0e0e0] transition-colors hover:bg-[#403a3b]"
        onClick={handleItineraryClick}
        initial={{ width: '100%', top: 0, right: 0 }}
        animate={{
          top: getCloseTop(),
          right: getCloseRight(),
          borderRadius: '50%',
          width: 40
        }}
        aria-label={`Close expanded list`}
        aria-controls="itenerary"
        aria-expanded={true}
      >
        <motion.div layoutId="button-icon">
          <Close className="fill-[#e0e0e0]" />
        </motion.div>
      </motion.button>
      <motion.div
        id="itenerary"
        aria-hidden={false}
        aria-label="List of all my travels."
        className={`absolute w-full max-w-lg overflow-scroll rounded-b-md border-2 border-[#282B27] bg-index-background pl-12 pt-6 md:pl-16`}
        ref={ref}
        initial={{ width: 320, height: 320, top: '50%', left: '50%', x: '-50%', y: '-50%' }}
        animate={{
          width: getListWidth(),
          height: getListHeight(),
          borderTopLeftRadius: '0.375rem',
          borderTopRightRadius: '0.375rem'
        }}
      >
        <div ref={containerRef}>
          {journey.map((visit, index) => {
            const date = new Date(visit.date);

            if (index > 0) {
              const prevDate = new Date(journey[index - 1]?.date);

              if (!isSameYear(date, prevDate)) {
                return (
                  <Fragment key={`${visit.date}-${visit.name}`}>
                    <span className="block py-8 pr-8 text-center text-xs font-semibold">{date.getFullYear()}</span>
                    <TripVisit key={visit.date} visit={visit} date={date} lastVisit={index === journey.length - 1} />
                  </Fragment>
                );
              }
            }

            return (
              <TripVisit
                key={`${visit.date}-${visit.name}`}
                visit={visit}
                date={date}
                lastVisit={index === journey.length - 1}
              />
            );
          })}
        </div>
        <div ref={endOfListRef} />
      </motion.div>
    </motion.div>
  );
}
