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

const visits = [
  {
    country: 'Netherlands',
    name: 'Amsterdam, NL',
    date: '2022-11-02',
    temperature: 70,
    link: '/trip/amsterdam',
    transport: ['plane']
  },
  {
    country: 'Belgium',
    name: 'Antwerp, BE',
    date: '2022-11-11',
    temperature: 70,
    link: '/trip/antwerp',
    transport: ['train']
  },
  {
    country: 'Belgium',
    name: 'Ghent, BE',
    date: '2022-11-14',
    temperature: 70,
    transport: ['train']
  },
  {
    country: 'Belgium',
    name: 'Ipres, BE',
    date: '2022-11-17',
    temperature: 70,
    transport: ['train']
  },
  {
    country: 'Luxembourg',
    name: 'Luxembourg, LU',
    date: '2022-11-19',
    temperature: 70,
    transport: ['train']
  },
  {
    country: 'France',
    name: 'Paris, FR',
    date: '2022-11-21',
    temperature: 70,
    link: '/trip/paris',
    transport: ['train']
  },
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '2022-11-22',
    temperature: 90,
    transport: ['plane']
  },
  {
    country: 'France',
    name: 'Paris, FR',
    date: '2022-11-28',
    temperature: 70,
    link: '/trip/paris',
    transport: ['plane']
  },
  {
    country: 'Norway',
    name: 'Oslo, NO',
    date: '2022-12-02',
    temperature: 70,
    link: '/trip/oslo',
    transport: ['plane']
  },
  {
    country: 'Norway',
    name: 'Lillehammer, NO',
    date: '2022-12-05',
    temperature: 70,
    link: '/trip/lillehammer',
    transport: ['train']
  },
  {
    country: 'Norway',
    name: 'Oslo, NO',
    date: '2022-12-07',
    temperature: 70,
    link: '/trip/oslo',
    transport: ['train']
  },
  {
    country: 'Sweden',
    name: 'Stockholm, SE',
    date: '2022-12-08',
    temperature: 70,
    link: '/trip/stockholm',
    transport: ['bus', 'train']
  },
  {
    country: 'Estonia',
    name: 'Tallinn, EE',
    date: '2022-12-13',
    temperature: 70,
    transport: ['ferry']
  },
  {
    country: 'Latvia',
    name: 'Riga, LV',
    date: '2022-12-13',
    temperature: 70,
    transport: ['bus']
  },
  {
    country: 'Estonia',
    name: 'Tallinn, EE',
    date: '2022-12-15',
    temperature: 70,
    transport: ['bus']
  },
  {
    country: 'Finland',
    name: 'Helsinki, FI',
    date: '2022-12-19',
    temperature: 70,
    link: '/trip/helsinki',
    transport: ['ferry']
  },
  {
    country: 'United States of America',
    name: 'Los Angeles, CA',
    date: '2022-12-23',
    temperature: 90,
    link: '/trip/los-angeles',
    transport: ['plane']
  },
  {
    country: 'Germany',
    name: 'Berlin, DE',
    date: '2022-12-28',
    temperature: 70,
    link: '/trip/berlin',
    transport: ['plane']
  },
  {
    country: 'Germany',
    name: 'Leipzig, DE',
    date: '2023-01-02',
    temperature: 70,
    transport: ['train']
  },
  {
    country: 'Germany',
    name: 'Dresden, DE',
    date: '2023-01-03',
    temperature: 70,
    transport: ['train']
  },
  {
    country: 'Germany',
    name: 'Nuremberg, DE',
    date: '2023-01-04',
    temperature: 70,
    transport: ['train']
  },
  {
    country: 'Germany',
    name: 'Munich, DE',
    date: '2023-01-06',
    temperature: 70,
    link: '/trip/munich',
    transport: ['train']
  },
  {
    country: 'Germany',
    name: 'Garmisch-Partenkirchen, DE',
    date: '2023-01-09',
    temperature: 70,
    link: '/trip/garmisch-partenkirchen',
    transport: ['train']
  },
  {
    country: 'Austria',
    name: 'Innsbruck, AT',
    date: '2023-01-09',
    temperature: 70,
    link: '/trip/innsbruck',
    transport: ['train']
  },
  {
    country: 'Italy',
    name: "Cortina d'Ampezzo, IT",
    date: '2023-01-11',
    temperature: 70,
    link: '/trip/cortina-dampezzo',
    transport: ['train', 'bus']
  },
  {
    country: 'Italy',
    name: 'Torino, IT',
    date: '2023-01-13',
    temperature: 70,
    link: '/trip/torino',
    transport: ['bus', 'train']
  },
  {
    country: 'Italy',
    name: 'Sestriere, IT',
    date: '2023-01-14',
    temperature: 70,
    link: '/trip/torino',
    transport: ['train', 'bus']
  },
  {
    country: 'France',
    name: 'Grenoble, FR',
    date: '2023-01-15',
    temperature: 70,
    link: '/trip/grenoble',
    transport: ['bus', 'train']
  },
  {
    country: 'France',
    name: 'Albertville, FR',
    date: '2023-01-17',
    temperature: 70,
    link: '/trip/albertville',
    transport: ['train']
  },
  {
    country: 'France',
    name: 'Chamonix, FR',
    date: '2023-01-19',
    temperature: 70,
    link: '/trip/chamonix',
    transport: ['bus']
  },
  {
    country: 'Switzerland',
    name: 'St. Moritz, CH',
    date: '2023-01-21',
    temperature: 70,
    link: '/trip/st-moritz',
    transport: ['bus', 'train']
  },
  {
    country: 'Liechtenstein',
    name: 'Vaduz, LI',
    date: '2023-01-23',
    temperature: 70,
    transport: ['train', 'bus']
  },
  {
    country: 'Switzerland',
    name: 'Zurich, CH',
    date: '2023-01-24',
    temperature: 70,
    transport: ['bus', 'train']
  },
  {
    country: 'Bosnia-Herzegovina',
    name: 'Sarajevo, BA',
    date: '2023-01-25',
    temperature: 70,
    link: '/trip/sarajevo',
    transport: ['plane']
  },
  {
    country: 'Great Britain',
    name: 'London, GB',
    date: '2023-01-29',
    temperature: 70,
    link: '/trip/london',
    transport: ['plane']
  },
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '2023-03-08',
    temperature: 90,
    transport: ['plane']
  },
  {
    country: 'New Zealand',
    name: 'Auckland, NZ',
    date: '2023-03-17',
    temperature: 70,
    transport: ['plane']
  },
  {
    country: 'New Zealand',
    name: 'Rotorua, NZ',
    date: '2023-03-20',
    temperature: 70,
    transport: ['car']
  },
  {
    country: 'New Zealand',
    name: 'Taupo, NZ',
    date: '2023-03-22',
    temperature: 70,
    transport: ['car']
  },
  {
    country: 'New Zealand',
    name: 'Tauranga, NZ',
    date: '2023-03-24',
    temperature: 70,
    transport: ['car']
  },
  {
    country: 'New Zealand',
    name: 'Napier, NZ',
    date: '2023-03-26',
    temperature: 70,
    transport: ['car']
  },
  {
    country: 'New Zealand',
    name: 'Wellington, NZ',
    date: '2023-03-27',
    temperature: 70,
    transport: ['car']
  },
  {
    country: 'Australia',
    name: 'Melbourne, AU',
    date: '2023-03-29',
    temperature: 70,
    link: '/trip/melbourne',
    transport: ['plane']
  },
  {
    country: 'Australia',
    name: 'Sydney, AU',
    date: '2023-04-03',
    temperature: 70,
    link: '/trip/sydney',
    transport: ['plane']
  },
  {
    country: 'Indonesia',
    name: 'Bali, ID',
    date: '2023-04-09',
    temperature: 70,
    transport: ['plane']
  },
  {
    country: 'Singapore',
    name: 'Singapore, SG',
    date: '2023-04-14',
    temperature: 70,
    transport: ['plane']
  },
  {
    country: 'Great Britain',
    name: 'London, GB',
    date: '2023-04-18',
    temperature: 70,
    link: '/trip/london',
    transport: ['plane']
  },
  {
    country: 'France',
    name: 'Paris, FR',
    date: '2023-04-27',
    temperature: 70,
    link: '/trip/paris',
    transport: ['train']
  },
  {
    country: 'France',
    name: 'Toulouse, FR',
    date: '2023-05-01',
    temperature: 70,
    transport: ['train']
  },
  {
    country: 'Andorra',
    name: 'Andorra la Vella, AD',
    date: '2023-05-03',
    temperature: 70,
    transport: ['bus']
  },
  {
    country: 'Spain',
    name: 'Barcelona, ES',
    date: '2023-05-05',
    temperature: 70,
    link: '/trip/barcelona',
    transport: ['bus']
  },
  {
    country: 'France',
    name: 'Marseille, FR',
    date: '2023-06-01',
    temperature: 70,
    transport: ['train']
  },
  {
    country: 'Monaco',
    name: 'Monaco, MC',
    date: '2023-05-10',
    temperature: 70,
    transport: ['train']
  },
  {
    country: 'Italy',
    name: 'Pisa, IT',
    date: '2023-05-12',
    temperature: 70,
    transport: ['train']
  },
  {
    country: 'San Marino',
    name: 'San Marino, SM',
    date: '2023-05-14',
    temperature: 70,
    transport: ['train', 'bus']
  },
  {
    country: 'Italy',
    name: 'Florence, IT',
    date: '2023-05-16',
    temperature: 70,
    transport: ['bus', 'train']
  },
  {
    country: 'Italy',
    name: "Castiglione d'Orcia, IT",
    date: '2023-05-19',
    temperature: 70,
    transport: ['train', 'car']
  },
  {
    country: 'Italy',
    name: 'Rome, IT',
    date: '2023-05-22',
    temperature: 70,
    link: '/trip/rome',
    transport: ['car', 'train']
  },
  {
    country: 'Vatican City',
    name: 'Vatican City, VA',
    date: '2023-05-23',
    temperature: 70,
    transport: ['walk']
  },
  {
    country: 'Italy',
    name: 'Rome, IT',
    date: '2023-05-23',
    temperature: 70,
    link: '/trip/rome',
    transport: ['walk']
  },
  {
    country: 'Italy',
    name: 'Naples, IT',
    date: '2023-05-26',
    temperature: 70,
    transport: ['train']
  },
  {
    country: 'Italy',
    name: 'Bari, IT',
    date: '2023-05-27',
    temperature: 70,
    transport: ['train']
  },
  {
    country: 'Greece',
    name: 'Athens, GR',
    date: '2023-05-29',
    temperature: 70,
    link: '/trip/athens',
    transport: ['ferry', 'bus']
  },
  {
    country: 'Greece',
    name: 'Olympia, GR',
    date: '2023-06-03',
    temperature: 70,
    transport: ['car']
  },
  {
    country: 'Greece',
    name: 'Athens, GR',
    date: '2023-06-05',
    temperature: 70,
    link: '/trip/athens',
    transport: ['car']
  },
  {
    country: 'Great Britain',
    name: 'London, GB',
    date: '2023-06-06',
    temperature: 70,
    link: '/trip/london',
    transport: ['plane']
  },
  {
    country: 'Denmark',
    name: 'Copenhagen, DK',
    date: '2023-06-20',
    temperature: 70,
    transport: ['plane']
  },
  {
    country: 'Faroe Islands',
    name: 'Torshavn, FO',
    date: '2023-06-22',
    temperature: 70,
    transport: ['plane']
  },
  {
    country: 'Iceland',
    name: 'Reykjavik, IS',
    date: '2023-06-26',
    temperature: 60,
    transport: ['plane']
  },
  {
    country: 'Canada',
    name: 'Montreal, CN',
    date: '2023-07-01',
    temperature: 80,
    link: '/trip/montreal',
    transport: ['plane']
  },
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '2023-07-03',
    temperature: 90,
    transport: ['plane']
  }
];

function TransportIconContainer({ transport }: { transport: string[] }) {
  const top = 76 + transport.length * 20;

  return (
    <div
      className="absolute left-0 grid -translate-x-1/2 items-center justify-items-center bg-[var(--index-background)]"
      style={{ top: top * -1, gridTemplateRows: `repeat(${transport.length}, 40px)` }}
    >
      {transport.map((t) => (
        <TransportIcon key={t} transport={t} />
      ))}
    </div>
  );
}

function TransportIcon({ transport }: { transport: string }) {
  switch (transport) {
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
      return <span className="absolute left-[-22px] top-[-66px] py-2 text-center text-xs uppercase">{transport}</span>;
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
      {visit.transport && <TransportIconContainer transport={visit.transport} />}
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
          <span className="text-sm">{visit.country}</span>
        </div>
      </div>
    </div>
  );
}

export default function FlagContainer({ expand }: { expand?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && containerRef.current) {
      if (!expand) {
        ref.current.scrollTop = containerRef.current.offsetHeight;
      }
    }
  }, [expand]);

  return (
    <motion.div
      className={`relative max-w-lg ${
        expand ? 'overflow-scroll' : 'overflow-hidden'
      } rounded-b-md border-2 border-[#282B27] pl-10 pt-6`}
      ref={ref}
      initial={{ height: 320 }}
      animate={{ height: expand ? 800 : 320 }}
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
    </motion.div>
  );
}
