import flags from '~/data/countryFlags.json';
// import { Arrow } from '../icons/Arrow';
// import { useEffect, useRef } from 'react';
import { format, isSameYear } from 'date-fns';

// type CountryFlag = {
//   name: string;
//   flagByTimestamp: {
//     png: string;
//   };
// };

const visits = [
  {
    country: 'Netherlands',
    name: 'Amsterdam, NL',
    date: '2022-11-02',
    temperature: 70,
    link: '/trip/amsterdam'
  },
  {
    country: 'Belgium',
    name: 'Antwerp, BE',
    date: '2022-11-11',
    temperature: 70,
    link: '/trip/antwerp'
  },
  {
    country: 'Belgium',
    name: 'Ghent, BE',
    date: '2022-11-14',
    temperature: 70
  },
  {
    country: 'Belgium',
    name: 'Ipres, BE',
    date: '2022-11-17',
    temperature: 70
  },
  {
    country: 'Luxembourg',
    name: 'Luxembourg, LU',
    date: '2022-11-19',
    temperature: 70
  },
  {
    country: 'France',
    name: 'Paris, FR',
    date: '2022-11-21',
    temperature: 70,
    link: '/trip/paris'
  },
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '2022-11-22',
    temperature: 90
  },
  {
    country: 'France',
    name: 'Paris, FR',
    date: '2022-11-28',
    temperature: 70,
    link: '/trip/paris'
  },
  {
    country: 'Norway',
    name: 'Oslo, NO',
    date: '2022-12-02',
    temperature: 70,
    link: '/trip/oslo'
  },
  {
    country: 'Norway',
    name: 'Lillehammer, NO',
    date: '2022-12-05',
    temperature: 70,
    link: '/trip/lillehammer'
  },
  {
    country: 'Norway',
    name: 'Oslo, NO',
    date: '2022-12-07',
    temperature: 70,
    link: '/trip/oslo'
  },
  {
    country: 'Sweden',
    name: 'Stockholm, SE',
    date: '2022-12-08',
    temperature: 70,
    link: '/trip/stockholm'
  },
  {
    country: 'Estonia',
    name: 'Tallinn, EE',
    date: '2022-12-13',
    temperature: 70
  },
  {
    country: 'Latvia',
    name: 'Riga, LV',
    date: '2022-12-13',
    temperature: 70
  },
  {
    country: 'Estonia',
    name: 'Tallinn, EE',
    date: '2022-12-15',
    temperature: 70
  },
  {
    country: 'Finland',
    name: 'Helsinki, FI',
    date: '2022-12-19',
    temperature: 70,
    link: '/trip/helsinki'
  },
  {
    country: 'United States of America',
    name: 'Los Angeles, CA',
    date: '2022-12-23',
    temperature: 90,
    link: '/trip/los-angeles'
  },
  {
    country: 'Germany',
    name: 'Berlin, DE',
    date: '2022-12-28',
    temperature: 70,
    link: '/trip/berlin'
  },
  {
    country: 'Germany',
    name: 'Leipzig, DE',
    date: '2023-01-02',
    temperature: 70
  },
  {
    country: 'Germany',
    name: 'Dresden, DE',
    date: '2023-01-03',
    temperature: 70
  },
  {
    country: 'Germany',
    name: 'Nuremberg, DE',
    date: '2023-01-04',
    temperature: 70
  },
  {
    country: 'Germany',
    name: 'Munich, DE',
    date: '2023-01-06',
    temperature: 70,
    link: '/trip/munich'
  },
  {
    country: 'Germany',
    name: 'Garmisch-Partenkirchen, DE',
    date: '2023-01-09',
    temperature: 70,
    link: '/trip/garmisch-partenkirchen'
  },
  {
    country: 'Austria',
    name: 'Innsbruck, AT',
    date: '2023-01-09',
    temperature: 70,
    link: '/trip/innsbruck'
  },
  {
    country: 'Italy',
    name: "Cortina d'Ampezzo, IT",
    date: '2023-01-11',
    temperature: 70,
    link: '/trip/cortina-dampezzo'
  },
  {
    country: 'Italy',
    name: 'Torino, IT',
    date: '2023-01-13',
    temperature: 70,
    link: '/trip/torino'
  },
  {
    country: 'Italy',
    name: 'Sestriere, IT',
    date: '2023-01-14',
    temperature: 70,
    link: '/trip/torino'
  },
  {
    country: 'France',
    name: 'Grenoble, FR',
    date: '2023-01-15',
    temperature: 70,
    link: '/trip/grenoble'
  },
  {
    country: 'France',
    name: 'Albertville, FR',
    date: '2023-01-17',
    temperature: 70,
    link: '/trip/albertville'
  },
  {
    country: 'France',
    name: 'Chamonix, FR',
    date: '2023-01-19',
    temperature: 70,
    link: '/trip/chamonix'
  },
  {
    country: 'Switzerland',
    name: 'St. Moritz, CH',
    date: '2023-01-21',
    temperature: 70,
    link: '/trip/st-moritz'
  },
  {
    country: 'Liechtenstein',
    name: 'Vaduz, LI',
    date: '2023-01-23',
    temperature: 70
  },
  {
    country: 'Switzerland',
    name: 'Zurich, CH',
    date: '2023-01-24',
    temperature: 70
  },
  {
    country: 'Bosnia-Herzegovina',
    name: 'Sarajevo, BA',
    date: '2023-01-25',
    temperature: 70,
    link: '/trip/sarajevo'
  },
  {
    country: 'Great Britain',
    name: 'London, GB',
    date: '2023-01-29',
    temperature: 70,
    link: '/trip/london'
  },
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '2023-03-08',
    temperature: 90
  },
  {
    country: 'New Zealand',
    name: 'Auckland, NZ',
    date: '2023-03-17',
    temperature: 70
  },
  {
    country: 'New Zealand',
    name: 'Rotorua, NZ',
    date: '2023-03-20',
    temperature: 70
  },
  {
    country: 'New Zealand',
    name: 'Taupo, NZ',
    date: '2023-03-22',
    temperature: 70
  },
  {
    country: 'New Zealand',
    name: 'Tauranga, NZ',
    date: '2023-03-24',
    temperature: 70
  },
  {
    country: 'New Zealand',
    name: 'Napier, NZ',
    date: '2023-03-26',
    temperature: 70
  },
  {
    country: 'New Zealand',
    name: 'Wellington, NZ',
    date: '2023-03-27',
    temperature: 70
  },
  {
    country: 'Australia',
    name: 'Melbourne, AU',
    date: '2023-03-29',
    temperature: 70,
    link: '/trip/melbourne'
  },
  {
    country: 'Australia',
    name: 'Sydney, AU',
    date: '2023-04-03',
    temperature: 70,
    link: '/trip/sydney'
  },
  {
    country: 'Indonesia',
    name: 'Bali, ID',
    date: '2023-04-09',
    temperature: 70
  },
  {
    country: 'Singapore',
    name: 'Singapore, SG',
    date: '2023-04-14',
    temperature: 70
  },
  {
    country: 'Great Britain',
    name: 'London, GB',
    date: '2023-04-18',
    temperature: 70,
    link: '/trip/london'
  },
  {
    country: 'France',
    name: 'Paris, FR',
    date: '2023-04-27',
    temperature: 70,
    link: '/trip/paris'
  },
  {
    country: 'France',
    name: 'Toulouse, FR',
    date: '2023-05-01',
    temperature: 70
  },
  {
    country: 'Andorra',
    name: 'Andorra la Vella, AD',
    date: '2023-05-03',
    temperature: 70
  },
  {
    country: 'Spain',
    name: 'Barcelona, ES',
    date: '2023-05-05',
    temperature: 70,
    link: '/trip/barcelona'
  },
  {
    country: 'France',
    name: 'Marseille, FR',
    date: '2023-06-01',
    temperature: 70
  },
  {
    country: 'Monaco',
    name: 'Monaco, MC',
    date: '2023-05-10',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Pisa, IT',
    date: '2023-05-12',
    temperature: 70
  },
  {
    country: 'San Marino',
    name: 'San Marino, SM',
    date: '2023-05-14',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Florence, IT',
    date: '2023-05-16',
    temperature: 70
  },
  {
    country: 'Italy',
    name: "Castiglione d'Orcia, IT",
    date: '2023-05-19',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Rome, IT',
    date: '2023-05-22',
    temperature: 70,
    link: '/trip/rome'
  },
  {
    country: 'Vatican City',
    name: 'Vatican City, VA',
    date: '2023-05-23',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Rome, IT',
    date: '2023-05-23',
    temperature: 70,
    link: '/trip/rome'
  },
  {
    country: 'Italy',
    name: 'Naples, IT',
    date: '2023-05-26',
    temperature: 70
  },
  {
    country: 'Italy',
    name: 'Bari, IT',
    date: '2023-05-27',
    temperature: 70
  },
  {
    country: 'Greece',
    name: 'Athens, GR',
    date: '2023-05-29',
    temperature: 70,
    link: '/trip/athens'
  },
  {
    country: 'Greece',
    name: 'Olympia, GR',
    date: '2023-06-03',
    temperature: 70
  },
  {
    country: 'Greece',
    name: 'Athens, GR',
    date: '2023-06-05',
    temperature: 70,
    link: '/trip/athens'
  },
  {
    country: 'Great Britain',
    name: 'London, GB',
    date: '2023-06-06',
    temperature: 70,
    link: '/trip/london'
  },
  {
    country: 'Denmark',
    name: 'Copenhagen, DK',
    date: '2023-06-20',
    temperature: 70
  },
  {
    country: 'Faroe Islands',
    name: 'Torshavn, FO',
    date: '2023-06-22',
    temperature: 70
  },
  {
    country: 'Iceland',
    name: 'Reykjavik, IS',
    date: '2023-06-26',
    temperature: 60
  },
  {
    country: 'Canada',
    name: 'Montreal, CN',
    date: '2023-07-01',
    temperature: 80,
    link: '/trip/montreal'
  },
  {
    country: 'United States of America',
    name: 'Austin, TX',
    date: '2023-07-03',
    temperature: 90
  }
];

const reversedVisits = visits.reverse();

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

function TripVisit({ visit, index, date }: { visit: (typeof visits)[0]; index: number; date: Date }) {
  const flag = flags.countries.find((flag) => flag?.name === visit.country);

  return (
    <div className="relative border-l-4 pb-10 text-[#282B27]">
      <span className="absolute left-[-16px] top-0 h-7 w-7 rounded-full bg-slate-300"></span>
      <div className="pl-10">
        {visit.link ? (
          <a href={visit.link} className="text-base font-semibold text-[#648767]">
            {visit.name}
          </a>
        ) : (
          <p className="text-base font-semibold">{visit.name}</p>
        )}
        <div className="mt-2 flex items-center">
          <span className="text-xs">{format(date, 'MMM d')}</span>
          {flag?.flagByTimestamp && (
            <img
              className="ml-5 h-3 w-auto shadow-[1px_1px_4px_rgba(80,80,80,0.5)]"
              src={flag.flagByTimestamp.png}
              alt={flag.name}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function FlagContainer() {
  // const endOfList = useRef<HTMLDivElement>(null);
  // const formattedFlags = formatFlags(flags.countries);

  // useEffect(() => {
  //   if (endOfList?.current) {
  //     endOfList.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, []);

  return (
    <div className="relative h-80 max-w-lg overflow-scroll rounded-md bg-white pl-8 pt-6">
      {reversedVisits.map((visit, index) => {
        const date = new Date(visit.date);

        if (index > 0) {
          const prevDate = new Date(reversedVisits[index - 1]?.date);

          if (!isSameYear(date, prevDate)) {
            return (
              <>
                <span className="block py-8 pr-8 text-center text-xs font-semibold">{date.getFullYear()}</span>
                <TripVisit key={visit.date} visit={visit} index={index} date={date} />
              </>
            );
          }
        }

        return <TripVisit key={visit.date} visit={visit} index={index} date={date} />;
      })}
      {/* <div ref={endOfList}></div> */}
    </div>
  );
}
