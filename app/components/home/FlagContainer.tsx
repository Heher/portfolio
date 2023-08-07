import flags from '~/data/countryFlags.json';
import { Arrow } from '../icons/Arrow';

type CountryFlag = {
  name: string;
  flagByTimestamp: {
    png: string;
  };
};

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

export default function FlagContainer() {
  const formattedFlags = formatFlags(flags.countries);

  return (
    <div className="flags-container relative mt-[8px] w-[170px]">
      <div className="flags-overlay absolute left-0 top-[-4px] z-10 h-[28px]"></div>
      <div className="flags flex flex-row-reverse items-center overflow-y-scroll pl-[40px]">{formattedFlags}</div>
    </div>
  );
}
