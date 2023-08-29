import flags from '~/data/countryFlags.json';
// import { Arrow } from '../icons/Arrow';
import { useEffect, useRef } from 'react';

// type CountryFlag = {
//   name: string;
//   flagByTimestamp: {
//     png: string;
//   };
// };

const visits = [
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '1992-06-01',
    temperature: 90
  },
  {
    country: 'Netherlands',
    name: 'Amsterdam, NL',
    date: '2013-06-01',
    temperature: 70
  },
  {
    country: 'Belgium',
    name: 'Antwerp, BE',
    date: '2013-06-01',
    temperature: 70
  },
  {
    country: 'Belgium',
    name: 'Ghent, BE',
    date: '2013-06-01',
    temperature: 70
  },
  {
    country: 'Belgium',
    name: 'Ipres, BE',
    date: '2013-06-01',
    temperature: 70
  },
  {
    country: 'Luxembourg',
    name: 'Luxembourg, LU',
    date: '2013-06-01',
    temperature: 70
  },
  {
    country: 'France',
    name: 'Paris, FR',
    date: '2013-06-01',
    temperature: 70
  },
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '2013-06-01',
    temperature: 90
  },
  {
    country: 'France',
    name: 'Paris, FR',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Norway',
    name: 'Oslo, NO',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Norway',
    name: 'Lillehammer, NO',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Norway',
    name: 'Oslo, NO',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Sweden',
    name: 'Stockholm, SE',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Estonia',
    name: 'Tallinn, EE',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Latvia',
    name: 'Riga, LV',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Estonia',
    name: 'Tallinn, EE',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Finland',
    name: 'Helsinki, FI',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'United States of America',
    name: 'Los Angeles, CA',
    date: '2014-06-01',
    temperature: 90
  },
  {
    country: 'Germany',
    name: 'Berlin, DE',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Germany',
    name: 'Leipzig, DE',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Germany',
    name: 'Dresden, DE',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Germany',
    name: 'Nuremberg, DE',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Germany',
    name: 'Munich, DE',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Germany',
    name: 'Garmisch Partenkirshen, DE',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Austria',
    name: 'Innsbruck, AT',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Italy',
    name: "Cortina d'Ampezzo, IT",
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Torino, IT',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Sestriere, IT',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'France',
    name: 'Grenoble, FR',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'France',
    name: 'Albertville, FR',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'France',
    name: 'Chamonix, FR',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Switzerland',
    name: 'St. Moritz, CH',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Liechtenstein',
    name: 'Vaduz, LI',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Switzerland',
    name: 'Zurich, CH',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Bosnia-Herzegovina',
    name: 'Sarajevo, BA',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Great Britain',
    name: 'London, GB',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '2014-06-01',
    temperature: 90
  },
  {
    country: 'New Zealand',
    name: 'Auckland, NZ',
    date: '2015-06-01',
    temperature: 70
  },
  {
    country: 'New Zealand',
    name: 'Rotorua, NZ',
    date: '2015-06-01',
    temperature: 70
  },
  {
    country: 'New Zealand',
    name: 'Taupo, NZ',
    date: '2015-06-01',
    temperature: 70
  },
  {
    country: 'New Zealand',
    name: 'Tauranga, NZ',
    date: '2015-06-01',
    temperature: 70
  },
  {
    country: 'New Zealand',
    name: 'Napier, NZ',
    date: '2015-06-01',
    temperature: 70
  },
  {
    country: 'New Zealand',
    name: 'Wellington, NZ',
    date: '2015-06-01',
    temperature: 70
  },
  {
    country: 'Australia',
    name: 'Melbourne, AU',
    date: '2015-06-01',
    temperature: 70
  },
  {
    country: 'Australia',
    name: 'Sydney, AU',
    date: '2015-06-01',
    temperature: 70
  },
  {
    country: 'Indonesia',
    name: 'Bali, ID',
    date: '2015-06-01',
    temperature: 70
  },
  {
    country: 'Singapore',
    name: 'Singapore, SG',
    date: '2015-06-01',
    temperature: 70
  },
  {
    country: 'Great Britain',
    name: 'London, GB',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'France',
    name: 'Paris, FR',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'France',
    name: 'Toulouse, FR',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Andorra',
    name: 'Andorra la Vella, AD',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Spain',
    name: 'Barcelona, ES',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'France',
    name: 'Marselles, FR',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Monaco',
    name: 'Monaco, MC',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Pisa, IT',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'San Marino',
    name: 'San Marino, SM',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Florence, IT',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Italy',
    name: "Castiglione d'Orcia, IT",
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Rome, IT',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Vatican City',
    name: 'Vatican City, VA',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Rome, IT',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Naples, IT',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Bari, IT',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Greece',
    name: 'Athens, GR',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Greece',
    name: 'Olympia, GR',
    date: '2014-06-01',
    temperature: 70
  },
  {
    country: 'Greece',
    name: 'Athens, GR',
    date: '2014-06-01',
    temperature: 70
  },
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

// const visitedCountries = [
//   'United States of America',
//   'Canada',
//   'Iceland',
//   'Denmark',
//   'Great Britain',
//   'Greece',
//   'Italy',
//   'Vatican City',
//   'Italy',
//   'San Marino',
//   'Italy',
//   'Monaco',
//   'France',
//   'Spain',
//   'Andorra',
//   'France',
//   'Great Britain',
//   'Singapore',
//   'Indonesia',
//   'Australia',
//   'New Zealand',
//   'United States of America',
//   'Great Britain',
//   'Bosnia-Herzegovina',
//   'Switzerland',
//   'Liechtenstein',
//   'Switzerland',
//   'Austria',
//   'Germany',
//   'United States of America',
//   'Finland',
//   'Estonia',
//   'Latvia',
//   'Estonia',
//   'Sweden',
//   'Norway',
//   'France',
//   'United States of America',
//   'Luxembourg',
//   'Belgium',
//   'Netherlands',
//   'United States of America'
// ];

// function formatFlags(flags: CountryFlag[]) {
//   if (!flags) return null;

//   const formattedFlags: React.ReactNode[] = [];

//   visitedCountries.forEach((countryName, index) => {
//     const flag = flags.find((flag) => flag?.name === countryName);

//     if (index > 0) {
//       formattedFlags.push(
//         <Arrow
//           key={`arrow-${index}`}
//           className={`mx-[10px] h-[20px] min-w-[30px] rotate-180 self-start`}
//           fill="#000000"
//         />
//       );
//     }

//     if (!flag?.flagByTimestamp?.png || !flag.name) {
//       formattedFlags.push(
//         <span
//           key={`${countryName}-${index}`}
//           className="mb-[14px] block h-[20px] min-w-[30px] bg-slate-300 shadow-[1px_1px_4px_rgba(80,80,80,0.5)]"
//         ></span>
//       );
//     } else {
//       formattedFlags.push(
//         <img
//           key={`${countryName}-${index}`}
//           className="mb-[14px] h-[20px] w-auto shadow-[1px_1px_4px_rgba(80,80,80,0.5)]"
//           src={flag.flagByTimestamp.png}
//           alt={flag.name}
//         />
//       );
//     }
//   });

//   return formattedFlags;
// }

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
  const endOfList = useRef<HTMLDivElement>(null);
  // const formattedFlags = formatFlags(flags.countries);

  useEffect(() => {
    if (endOfList?.current) {
      endOfList.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="h-40 max-w-lg overflow-scroll rounded-md bg-white">
      {visits.map((visit) => {
        return <TripVisit key={visit.date} visit={visit} />;
      })}
      <div ref={endOfList}></div>
    </div>
  );
}
