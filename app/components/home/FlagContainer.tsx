import flags from '~/data/countryFlags.json';
import { Arrow } from '../icons/Arrow';
import { useEffect, useRef } from 'react';

type CountryFlag = {
  name: string;
  flagByTimestamp: {
    png: string;
  };
};

const visits = [
  {
    country: 'Great Britain',
    name: 'London, GB',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Denmark',
    name: 'Copenhagen, DK',
    date: '2015-06-01',
    temperature: 70
  },
  {
    country: 'Iceland',
    name: 'Reykjavik, IS',
    date: '2023-06-28',
    temperature: 60
  },
  {
    country: 'Canada',
    name: 'Montreal, CN',
    date: '2023-07-01',
    temperature: 80
  },
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '2023-07-03',
    temperature: 90
  }
];

const visitedCountries = [
  'United States of America',
  'Canada',
  'Iceland',
  'Denmark',
  'Great Britain',
  'Greece',
  'Italy',
  'Vatican City',
  'Italy',
  'San Marino',
  'Italy',
  'Monaco',
  'France',
  'Spain',
  'Andorra',
  'France',
  'Great Britain',
  'Singapore',
  'Indonesia',
  'Australia',
  'New Zealand',
  'United States of America',
  'Great Britain',
  'Bosnia-Herzegovina',
  'Switzerland',
  'Liechtenstein',
  'Switzerland',
  'Austria',
  'Germany',
  'United States of America',
  'Finland',
  'Estonia',
  'Latvia',
  'Estonia',
  'Sweden',
  'Norway',
  'France',
  'United States of America',
  'Luxembourg',
  'Belgium',
  'Netherlands',
  'United States of America'
];

function formatFlags(flags: CountryFlag[]) {
  if (!flags) return null;

  const formattedFlags: React.ReactNode[] = [];

  visitedCountries.forEach((countryName, index) => {
    const flag = flags.find((flag) => flag?.name === countryName);

    if (index > 0) {
      formattedFlags.push(
        <Arrow
          key={`arrow-${index}`}
          className={`mx-[10px] h-[20px] min-w-[30px] rotate-180 self-start`}
          fill="#000000"
        />
      );
    }

    if (!flag?.flagByTimestamp?.png || !flag.name) {
      formattedFlags.push(
        <span
          key={`${countryName}-${index}`}
          className="mb-[14px] block h-[20px] min-w-[30px] bg-slate-300 shadow-[1px_1px_4px_rgba(80,80,80,0.5)]"
        ></span>
      );
    } else {
      formattedFlags.push(
        <img
          key={`${countryName}-${index}`}
          className="mb-[14px] h-[20px] w-auto shadow-[1px_1px_4px_rgba(80,80,80,0.5)]"
          src={flag.flagByTimestamp.png}
          alt={flag.name}
        />
      );
    }
  });

  return formattedFlags;
}

function TripVisit({ visit }: { visit: (typeof visits)[0] }) {
  const flag = flags.countries.find((flag) => flag?.name === visit.country);

  return (
    <div className="grid grid-cols-[1fr_40px] items-center p-3">
      <p className="text-sm">{visit.name}</p>
      {flag?.flagByTimestamp && (
        <img
          className="h-3 w-auto shadow-[1px_1px_4px_rgba(80,80,80,0.5)]"
          src={flag.flagByTimestamp.png}
          alt={flag.name}
        />
      )}
    </div>
  );
}

export default function FlagContainer() {
  const endOfList = useRef(null);
  // const formattedFlags = formatFlags(flags.countries);

  useEffect(() => {
    endOfList.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="h-40 overflow-scroll rounded-md bg-white">
      {visits.map((visit) => {
        return <TripVisit key={visit.date} visit={visit} />;
      })}
      <div ref={endOfList}></div>
    </div>
  );
}
