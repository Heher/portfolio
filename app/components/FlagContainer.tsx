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

type TransportType = {
  type: string;
  amount?: number;
};

const MotionLink = motion(Link);

function TransportIconContainer({ transports }: { transports: TransportType[] }) {
  const top = 112 + transports.length * 30;

  return (
    <div
      className="absolute left-0 grid -translate-x-1/2 items-center justify-items-center bg-[var(--index-background)]"
      style={{
        top: top * -1,
        gridTemplateRows: `repeat(${transports.length}, 60px)`
      }}
    >
      {transports.map((transport) => (
        <div key={transport.type} className="relative">
          {transport.amount && (
            <span
              className="absolute -right-3 -top-4 h-5 w-5 rounded-full bg-[#282B27] text-center text-xs leading-5 text-[#e0e0e0]"
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
          className={`absolute left-[-22px] top-0 h-10 w-10 rounded-full bg-[var(--index-link)] text-center text-xs leading-10 text-[#e0e0e0]`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          animate={{
            background: hover ? 'var(--index-link-hover)' : 'var(--index-link)'
          }}
          aria-label={format(date, 'MMMM d, yyyy')}
        >
          {format(date, 'M/d')}
        </MotionLink>
      ) : (
        <span
          className={`absolute left-[-22px] top-0 h-10 w-10 rounded-full bg-[#282B27] text-center text-xs leading-10 text-[#e0e0e0]`}
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
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
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

function getExpandHeight(windowHeight: number) {
  return windowHeight * -1;
}

function getListHeight(windowHeight: number) {
  if (windowHeight > 800) {
    return 800;
  }

  return windowHeight - 80;
}

export default function FlagContainer({
  expand,
  contentSize,
  mainContentSize
}: {
  expand?: boolean;
  contentSize: { height: number };
  mainContentSize: RectReadOnly;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const endOfListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver(() => {
        if (ref.current && containerRef.current && endOfListRef.current) {
          ref.current.scrollTop = containerRef.current.offsetHeight;
        }
      });

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <motion.div
      id="itenerary"
      aria-hidden={!expand}
      aria-label="List of all my travels."
      className={`left-0 max-w-lg ${
        expand ? 'overflow-scroll' : 'overflow-hidden'
      } max-h-[calc(100dvh-60px)] w-full max-w-2xl rounded-b-md border-2 border-[#282B27] bg-[var(--index-background)] pl-16 pt-6`}
      ref={ref}
      initial={{ height: 320, top: 0 }}
      animate={{
        position: expand ? 'absolute' : 'relative',
        height: expand ? getListHeight(contentSize.height) : 320,
        top: expand ? getExpandHeight(mainContentSize?.height) : 0,
        borderTopLeftRadius: expand ? '0.375rem' : '0',
        borderTopRightRadius: expand ? '0.375rem' : '0'
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
  );
}
