import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { request } from 'graphql-request';
import { useEffect } from 'react';
import { GetFlagsDocument } from '~/gql/graphql';

const visitedCountries = [
  'France',
  'Great Britain',
  'Singapore',
  'Indonesia',
  'Australia',
  'New Zealand',
  'Bosnia-Herzegovina',
  'Liechtenstein',
  'Switzerland',
  'Italy',
  'Austria',
  'Germany',
  'Finland',
  'Estonia',
  'Latvia',
  'Sweden',
  'Norway',
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

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'John Heher | Web Developer',
  description: 'John Heher is a web developer from the United States, currently looking for fully remote work.',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
});

export default function Index() {
  const { flags } = useLoaderData<typeof loader>();

  useEffect(() => {
    fizzBuzz();
  }, []);

  return (
    <main className="flex h-[100dvh] w-[100vw] items-center justify-center text-[18px]">
      <div className="mr-[30px] flex h-[243px] w-[200px] flex-col items-end">
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
              Paris, FR
            </Link>
          </p>
        </div>
        <div className="flags-container relative mt-[8px] h-[200px] w-[210px]">
          <div className="flags-overlay absolute top-[-4px] left-0 z-10 h-[28px]"></div>
          <div className="flags-overlay-full absolute bottom-0 left-0 z-10 h-[108px]"></div>
          <div className="absolute top-0 right-0 flex flex-row-reverse flex-wrap items-center">
            {flags
              ? visitedCountries.map((countryName) => {
                  const flag = flags.find((flag) => flag?.name === countryName);

                  if (!flag?.flagByTimestamp?.png || !flag.name) {
                    return null;
                  }

                  return (
                    <img
                      key={flag.name}
                      className="mr-[4px] mb-[4px] h-[20px] w-auto shadow-[1px_1px_4px_rgba(80,80,80,0.5)]"
                      src={flag.flagByTimestamp.png}
                      alt={flag.name}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </main>
  );
}
