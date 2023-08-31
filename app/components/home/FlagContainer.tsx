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

type TransportType = {
  type: string;
  amount?: number;
};

const visits = [
  {
    country: 'Netherlands',
    name: 'Amsterdam',
    date: '2022-11-02',
    temperature: 70,
    link: '/trip/amsterdam',
    transport: [{ type: 'plane', amount: 2 }]
  },
  {
    country: 'Belgium',
    name: 'Antwerp',
    date: '2022-11-11',
    temperature: 70,
    link: '/trip/antwerp',
    transport: [{ type: 'train' }]
  },
  {
    country: 'Belgium',
    name: 'Ghent',
    date: '2022-11-14',
    temperature: 70,
    transport: [{ type: 'train' }]
  },
  {
    country: 'Belgium',
    name: 'Ipres',
    date: '2022-11-17',
    temperature: 70,
    transport: [{ type: 'train' }]
  },
  {
    country: 'Luxembourg',
    name: 'Luxembourg',
    date: '2022-11-19',
    temperature: 70,
    transport: [{ type: 'train', amount: 2 }]
  },
  {
    country: 'France',
    name: 'Paris',
    date: '2022-11-21',
    temperature: 70,
    link: '/trip/paris',
    transport: [{ type: 'train' }]
  },
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '2022-11-22',
    temperature: 90,
    transport: [{ type: 'plane', amount: 2 }]
  },
  {
    country: 'France',
    name: 'Paris',
    date: '2022-11-28',
    temperature: 70,
    link: '/trip/paris',
    transport: [{ type: 'plane', amount: 2 }]
  },
  {
    country: 'Norway',
    name: 'Oslo',
    date: '2022-12-02',
    temperature: 70,
    link: '/trip/oslo',
    transport: [{ type: 'plane' }]
  },
  {
    country: 'Norway',
    name: 'Lillehammer',
    date: '2022-12-05',
    temperature: 70,
    link: '/trip/lillehammer',
    transport: [{ type: 'train' }]
  },
  {
    country: 'Norway',
    name: 'Oslo',
    date: '2022-12-07',
    temperature: 70,
    link: '/trip/oslo',
    transport: [{ type: 'train' }]
  },
  {
    country: 'Sweden',
    name: 'Stockholm',
    date: '2022-12-08',
    temperature: 70,
    link: '/trip/stockholm',
    transport: [{ type: 'bus' }, { type: 'train', amount: 2 }]
  },
  {
    country: 'Estonia',
    name: 'Tallinn',
    date: '2022-12-13',
    temperature: 70,
    transport: [{ type: 'ferry' }]
  },
  {
    country: 'Latvia',
    name: 'Riga',
    date: '2022-12-13',
    temperature: 70,
    transport: [{ type: 'bus' }]
  },
  {
    country: 'Estonia',
    name: 'Tallinn',
    date: '2022-12-15',
    temperature: 70,
    transport: [{ type: 'bus' }]
  },
  {
    country: 'Finland',
    name: 'Helsinki',
    date: '2022-12-19',
    temperature: 70,
    link: '/trip/helsinki',
    transport: [{ type: 'ferry' }]
  },
  {
    country: 'United States of America',
    name: 'Los Angeles, CA',
    date: '2022-12-23',
    temperature: 90,
    link: '/trip/los-angeles',
    transport: [{ type: 'plane' }]
  },
  {
    country: 'Germany',
    name: 'Berlin',
    date: '2022-12-28',
    temperature: 70,
    link: '/trip/berlin',
    transport: [{ type: 'plane', amount: 2 }]
  },
  {
    country: 'Germany',
    name: 'Leipzig',
    date: '2023-01-02',
    temperature: 70,
    transport: [{ type: 'train' }]
  },
  {
    country: 'Germany',
    name: 'Dresden',
    date: '2023-01-03',
    temperature: 70,
    transport: [{ type: 'train' }]
  },
  {
    country: 'Germany',
    name: 'Nuremberg',
    date: '2023-01-04',
    temperature: 70,
    transport: [{ type: 'train' }]
  },
  {
    country: 'Germany',
    name: 'Munich',
    date: '2023-01-06',
    temperature: 70,
    link: '/trip/munich',
    transport: [{ type: 'train' }]
  },
  {
    country: 'Germany',
    name: 'Garmisch-Partenkirchen',
    date: '2023-01-09',
    temperature: 70,
    link: '/trip/garmisch-partenkirchen',
    transport: [{ type: 'train' }]
  },
  {
    country: 'Austria',
    name: 'Innsbruck',
    date: '2023-01-09',
    temperature: 70,
    link: '/trip/innsbruck',
    transport: [{ type: 'train' }]
  },
  {
    country: 'Italy',
    name: "Cortina d'Ampezzo",
    date: '2023-01-11',
    temperature: 70,
    link: '/trip/cortina-dampezzo',
    transport: [{ type: 'train' }, { type: 'bus' }]
  },
  {
    country: 'Italy',
    name: 'Torino',
    date: '2023-01-13',
    temperature: 70,
    link: '/trip/torino',
    transport: [{ type: 'bus' }, { type: 'train', amount: 2 }]
  },
  {
    country: 'Italy',
    name: 'Sestriere',
    date: '2023-01-14',
    temperature: 70,
    link: '/trip/torino',
    transport: [{ type: 'train' }, { type: 'bus' }]
  },
  {
    country: 'France',
    name: 'Grenoble',
    date: '2023-01-15',
    temperature: 70,
    link: '/trip/grenoble',
    transport: [{ type: 'bus' }, { type: 'train', amount: 2 }]
  },
  {
    country: 'France',
    name: 'Albertville',
    date: '2023-01-17',
    temperature: 70,
    link: '/trip/albertville',
    transport: [{ type: 'train', amount: 2 }]
  },
  {
    country: 'France',
    name: 'Chamonix',
    date: '2023-01-19',
    temperature: 70,
    link: '/trip/chamonix',
    transport: [{ type: 'bus', amount: 2 }]
  },
  {
    country: 'Switzerland',
    name: 'St. Moritz',
    date: '2023-01-21',
    temperature: 70,
    link: '/trip/st-moritz',
    transport: [{ type: 'bus' }, { type: 'train', amount: 3 }]
  },
  {
    country: 'Liechtenstein',
    name: 'Vaduz',
    date: '2023-01-23',
    temperature: 70,
    transport: [{ type: 'train' }, { type: 'bus' }]
  },
  {
    country: 'Switzerland',
    name: 'Zurich',
    date: '2023-01-24',
    temperature: 70,
    transport: [{ type: 'bus' }, { type: 'train' }]
  },
  {
    country: 'Bosnia-Herzegovina',
    name: 'Sarajevo',
    date: '2023-01-25',
    temperature: 70,
    link: '/trip/sarajevo',
    transport: [{ type: 'plane', amount: 2 }]
  },
  {
    country: 'Great Britain',
    name: 'London',
    date: '2023-01-29',
    temperature: 70,
    link: '/trip/london',
    transport: [{ type: 'plane', amount: 2 }]
  },
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '2023-03-08',
    temperature: 90,
    transport: [{ type: 'plane' }]
  },
  {
    country: 'New Zealand',
    name: 'Auckland',
    date: '2023-03-17',
    temperature: 70,
    transport: [{ type: 'plane', amount: 2 }]
  },
  {
    country: 'New Zealand',
    name: 'Rotorua',
    date: '2023-03-20',
    temperature: 70,
    transport: [{ type: 'car' }]
  },
  {
    country: 'New Zealand',
    name: 'Taupo',
    date: '2023-03-22',
    temperature: 70,
    transport: [{ type: 'car' }]
  },
  {
    country: 'New Zealand',
    name: 'Tauranga',
    date: '2023-03-24',
    temperature: 70,
    transport: [{ type: 'car' }]
  },
  {
    country: 'New Zealand',
    name: 'Napier',
    date: '2023-03-26',
    temperature: 70,
    transport: [{ type: 'car' }]
  },
  {
    country: 'New Zealand',
    name: 'Wellington',
    date: '2023-03-27',
    temperature: 70,
    transport: [{ type: 'car' }]
  },
  {
    country: 'Australia',
    name: 'Melbourne',
    date: '2023-03-29',
    temperature: 70,
    link: '/trip/melbourne',
    transport: [{ type: 'plane' }]
  },
  {
    country: 'Australia',
    name: 'Sydney',
    date: '2023-04-03',
    temperature: 70,
    link: '/trip/sydney',
    transport: [{ type: 'plane' }]
  },
  {
    country: 'Indonesia',
    name: 'Bali',
    date: '2023-04-09',
    temperature: 70,
    transport: [{ type: 'plane' }]
  },
  {
    country: 'Singapore',
    name: 'Singapore',
    date: '2023-04-14',
    temperature: 70,
    transport: [{ type: 'plane' }]
  },
  {
    country: 'Great Britain',
    name: 'London',
    date: '2023-04-18',
    temperature: 70,
    link: '/trip/london',
    transport: [{ type: 'plane', amount: 2 }]
  },
  {
    country: 'France',
    name: 'Paris',
    date: '2023-04-27',
    temperature: 70,
    link: '/trip/paris',
    transport: [{ type: 'train' }]
  },
  {
    country: 'France',
    name: 'Toulouse',
    date: '2023-05-01',
    temperature: 70,
    transport: [{ type: 'train' }]
  },
  {
    country: 'Andorra',
    name: 'Andorra la Vella',
    date: '2023-05-03',
    temperature: 70,
    transport: [{ type: 'bus' }]
  },
  {
    country: 'Spain',
    name: 'Barcelona',
    date: '2023-05-05',
    temperature: 70,
    link: '/trip/barcelona',
    transport: [{ type: 'bus' }]
  },
  {
    country: 'France',
    name: 'Marseille',
    date: '2023-06-01',
    temperature: 70,
    transport: [{ type: 'train' }]
  },
  {
    country: 'Monaco',
    name: 'Monaco',
    date: '2023-05-10',
    temperature: 70,
    transport: [{ type: 'train', amount: 2 }]
  },
  {
    country: 'Italy',
    name: 'Pisa',
    date: '2023-05-12',
    temperature: 70,
    transport: [{ type: 'train' }]
  },
  {
    country: 'San Marino',
    name: 'San Marino',
    date: '2023-05-14',
    temperature: 70,
    transport: [{ type: 'train', amount: 2 }, { type: 'bus' }]
  },
  {
    country: 'Italy',
    name: 'Florence',
    date: '2023-05-16',
    temperature: 70,
    transport: [{ type: 'bus', amount: 2 }, { type: 'train' }]
  },
  {
    country: 'Italy',
    name: "Castiglione d'Orcia",
    date: '2023-05-19',
    temperature: 70,
    transport: [{ type: 'train', amount: 2 }, { type: 'car' }]
  },
  {
    country: 'Italy',
    name: 'Rome',
    date: '2023-05-22',
    temperature: 70,
    link: '/trip/rome',
    transport: [{ type: 'car' }, { type: 'train', amount: 2 }]
  },
  {
    country: 'Vatican City',
    name: 'Vatican City',
    date: '2023-05-23',
    temperature: 70,
    transport: [{ type: 'walk' }]
  },
  {
    country: 'Italy',
    name: 'Rome',
    date: '2023-05-23',
    temperature: 70,
    link: '/trip/rome',
    transport: [{ type: 'walk' }]
  },
  {
    country: 'Italy',
    name: 'Naples',
    date: '2023-05-26',
    temperature: 70,
    transport: [{ type: 'train' }]
  },
  {
    country: 'Italy',
    name: 'Bari',
    date: '2023-05-27',
    temperature: 70,
    transport: [{ type: 'train', amount: 2 }]
  },
  {
    country: 'Greece',
    name: 'Athens',
    date: '2023-05-29',
    temperature: 70,
    link: '/trip/athens',
    transport: [{ type: 'ferry' }, { type: 'bus' }]
  },
  {
    country: 'Greece',
    name: 'Olympia',
    date: '2023-06-03',
    temperature: 70,
    transport: [{ type: 'car' }]
  },
  {
    country: 'Greece',
    name: 'Athens',
    date: '2023-06-05',
    temperature: 70,
    link: '/trip/athens',
    transport: [{ type: 'car' }]
  },
  {
    country: 'Great Britain',
    name: 'London',
    date: '2023-06-06',
    temperature: 70,
    link: '/trip/london',
    transport: [{ type: 'plane' }]
  },
  {
    country: 'Denmark',
    name: 'Copenhagen',
    date: '2023-06-20',
    temperature: 70,
    transport: [{ type: 'plane' }]
  },
  {
    country: 'Faroe Islands',
    name: 'Tórshavn',
    date: '2023-06-22',
    temperature: 70,
    transport: [{ type: 'plane' }]
  },
  {
    country: 'Iceland',
    name: 'Reykjavik',
    date: '2023-06-26',
    temperature: 60,
    transport: [{ type: 'plane' }]
  },
  {
    country: 'Canada',
    name: 'Montreal',
    date: '2023-07-01',
    temperature: 80,
    link: '/trip/montreal',
    transport: [{ type: 'plane' }]
  },
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '2023-07-03',
    temperature: 90,
    transport: [{ type: 'plane', amount: 2 }]
  }
];

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
          className={`absolute left-[-22px] top-0 h-10 w-10 rounded-full bg-[#648767] text-center text-xs leading-10 text-[#e0e0e0]`}
        >
          {format(date, 'M/d')}
        </a>
      ) : (
        <span
          className={`absolute left-[-22px] top-0 h-10 w-10 rounded-full ${
            visit.link ? 'bg-[#648767]' : 'bg-[#282B27]'
          } text-center text-xs leading-10 text-[#e0e0e0]`}
        >
          {format(date, 'M/d')}
        </span>
      )}
      <div className="pl-10">
        {visit.link ? (
          <a href={visit.link} className="text-base font-semibold leading-10 text-[#648767]">
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
  contentSize?: { height: number };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const endOfListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && containerRef.current) {
      ref.current.scrollTop = containerRef.current.offsetHeight;
    }
  }, []);

  useEffect(() => {
    if (ref.current && containerRef.current && endOfListRef.current) {
      if (!expand) {
        // console.log('YO', ref.current.scrollTop, containerRef.current.offsetHeight);
        ref.current.scrollTop = 20000;
        // ref.current.scrollTop = containerRef.current.offsetHeight;
      }
    }
  }, [expand]);

  return (
    <motion.div
      className={`absolute left-0 max-w-lg ${
        expand ? 'overflow-scroll' : 'overflow-hidden'
      } w-full max-w-2xl rounded-b-md border-2 border-[#282B27] bg-[var(--index-background)] pl-16 pt-6`}
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
