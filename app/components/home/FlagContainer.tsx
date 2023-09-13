import flags from '~/data/countryFlags.json';
import { format, isSameYear } from 'date-fns';
import { Fragment, useEffect, useRef } from 'react';
import PlaneIcon from '../icons/Plane';
import CarIcon from '../icons/Car';
import TrainIcon from '../icons/Train';
import BusIcon from '../icons/Bus';
import FerryIcon from '../icons/Ferry';
import WalkIcon from '../icons/Walk';
import { motion } from 'framer-motion';
import type { RectReadOnly } from 'react-use-measure';
import { visits } from './visits';

type TransportType = {
  type: string;
  amount?: number;
};

function TransportIconContainer({ transports }: { transports: TransportType[] }) {
  const top = 76 + transports.length * 20;

  return (
    <div
      className="absolute left-0 grid -translate-x-1/2 items-center justify-items-center bg-[var(--index-background)]"
      style={{ top: top * -1, gridTemplateRows: `repeat(${transports.length}, 40px)` }}
    >
      {transports.map((transport) => (
        <div key={transport.type} className="relative">
          {transport.amount && (
            <span className="absolute -right-3 -top-4 h-5 w-5 rounded-full bg-[#282B27] text-center text-xs leading-5 text-[#e0e0e0]">
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
      return <CarIcon className={`h-3 fill-[#282B27] `} />;

    case 'train':
      return <TrainIcon className={`h-3 fill-[#282B27] `} />;

    case 'bus':
      return <BusIcon className={`h-3 fill-[#282B27] `} />;

    case 'ferry':
      return <FerryIcon className={`h-3 fill-[#282B27] `} />;

    case 'walk':
      return <WalkIcon className={`h-6 fill-[#282B27] `} />;
    default:
      return (
        <span className="absolute left-[-22px] top-[-66px] py-2 text-center text-xs uppercase">{transport.type}</span>
      );
  }
}

function TripVisit({ visit, date, lastVisit }: { visit: (typeof visits)[0]; date: Date; lastVisit?: boolean }) {
  const flag = flags.countries.find((flag) => flag?.name === visit.country);

  return (
    <div
      className={`relative border-l-4 ${
        !lastVisit ? 'border-[#282B27] pb-32' : 'border-transparent pb-7'
      } text-[#282B27]`}
    >
      {visit.transport && <TransportIconContainer transports={visit.transport} />}
      {visit.link ? (
        <a
          href={visit.link}
          className={`absolute left-[-22px] top-0 h-10 w-10 rounded-full bg-[var(--index-link)] text-center text-xs leading-10 text-[#e0e0e0]`}
        >
          {format(date, 'M/d')}
        </a>
      ) : (
        <span
          className={`absolute left-[-22px] top-0 h-10 w-10 rounded-full ${
            visit.link ? 'bg-[var(--index-link)]' : 'bg-[#282B27]'
          } text-center text-xs leading-10 text-[#e0e0e0]`}
        >
          {format(date, 'M/d')}
        </span>
      )}
      <div className="pl-10">
        {visit.link ? (
          <a href={visit.link} className="text-base font-semibold leading-10 text-[var(--index-link)]">
            {visit.name}
          </a>
        ) : (
          <p className="text-base font-semibold leading-10">{visit.name}</p>
        )}
        <div className="mt-1 flex items-center">
          {flag?.flagByTimestamp && (
            <img
              className="mr-3 h-4 w-auto shadow-[1px_1px_4px_rgba(80,80,80,0.5)]"
              src={flag.flagByTimestamp.png}
              alt={flag.name}
            />
          )}
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
      className={`absolute left-0 max-w-lg ${
        expand ? 'overflow-scroll' : 'overflow-hidden'
      } max-h-[calc(100dvh-60px)] w-full max-w-2xl rounded-b-md border-2 border-[#282B27] bg-[var(--index-background)] pl-16 pt-6`}
      ref={ref}
      initial={{ height: 320, top: 0 }}
      animate={{
        height: expand ? getListHeight(contentSize.height) : 320,
        top: expand ? getExpandHeight(mainContentSize.height) : 0,
        borderTopLeftRadius: expand ? '0.375rem' : '0',
        borderTopRightRadius: expand ? '0.375rem' : '0'
      }}
    >
      <div ref={containerRef}>
        {visits.map((visit, index) => {
          const date = new Date(visit.date);

          if (index > 0) {
            const prevDate = new Date(visits[index - 1]?.date);

            if (!isSameYear(date, prevDate)) {
              return (
                <Fragment key={`${visit.date}-${visit.name}`}>
                  <span className="block py-8 pr-8 text-center text-xs font-semibold">{date.getFullYear()}</span>
                  <TripVisit key={visit.date} visit={visit} date={date} lastVisit={index === visits.length - 1} />
                </Fragment>
              );
            }
          }

          return (
            <TripVisit
              key={`${visit.date}-${visit.name}`}
              visit={visit}
              date={date}
              lastVisit={index === visits.length - 1}
            />
          );
        })}
      </div>
      <div ref={endOfListRef} />
    </motion.div>
  );
}
