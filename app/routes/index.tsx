import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { request } from 'graphql-request';
import { useEffect } from 'react';
import { Arrow } from '~/components/icons/Arrow';
import { GetFlagsDocument } from '~/gql/graphql';

const visitedCountries = [
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

export async function loader() {
  const now = new Date().toISOString();

  const response = await request(process.env.API_ENDPOINT || '', GetFlagsDocument, { now, visitedCountries });

  return json({ flags: response?.countries?.nodes });
}

function fizzBuzz() {
  const result: { [key: number]: string } = {};

  for (let i = 1; i <= 30; i++) {
    if (i % 15 === 0) {
      result[i] = 'FizzBuzz';
    } else if (i % 3 === 0) {
      result[i] = 'Fizz';
    } else if (i % 5 === 0) {
      result[i] = 'Buzz';
    } else {
      result[i] = i.toString();
    }
  }

  console.table(result);
}

function formatFlags(flags: any) {
  if (!flags) return null;

  const formattedFlags = [];

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

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'John Heher | Web Developer',
  description: 'John Heher is a web developer from the United States, currently looking for fully remote work.',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
});

export default function Index() {
  const { flags } = useLoaderData<typeof loader>();

  // useEffect(() => {
  //   fizzBuzz();
  // }, []);

  const formattedFlags = formatFlags(flags);

  return (
    <main className="flex h-[100dvh] w-[100vw] items-center justify-center text-[18px]">
      <div className="mr-[30px] flex flex-col items-end">
        <div>
          <h1 className="mb-3 text-2xl">John Heher</h1>
          <h2 className="mb-1 text-lg">
            <a href="https://github.com/Heher" className="text-[var(--cta)] underline">
              Web Developer
            </a>
          </h2>
          <p>
            Currently in{' '}
            <Link to="/trip" className="text-[var(--cta)] underline" prefetch="intent">
              London, UK
            </Link>
          </p>
        </div>
        <div className="flags-container relative mt-[8px] w-[170px]">
          <div className="flags-overlay absolute top-[-4px] left-0 z-10 h-[28px]"></div>
          <div className="flags flex flex-row-reverse items-center overflow-y-scroll pl-[40px]">{formattedFlags}</div>
        </div>
      </div>
    </main>
  );
}
