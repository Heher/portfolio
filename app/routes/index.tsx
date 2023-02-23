import type { MetaFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { gql, GraphQLClient } from 'graphql-request';
import { useEffect } from 'react';

const visitedCountries = [
  'Great Britain',
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
  'France',
  'Luxembourg',
  'Belgium',
  'Netherlands',
  'Canada',
  'United States of America'
];

export async function loader() {
  const now = new Date().toISOString();

  const query = gql`
    {
      countries(filter: { name: { in: ${JSON.stringify(visitedCountries)} } }) {
        nodes {
          name
          flagByTimestamp(
            dateTimestamp: { start: { value: "${now}", inclusive: true }, end: { value: "${now}", inclusive: true } }
          ) {
            png
          }
        }
      }
    }
  `;

  const graphQLClient = new GraphQLClient(process.env.API_ENDPOINT || '');

  const response = await graphQLClient.request(query);

  return { flags: response.countries.nodes };
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
      <div className="flex max-w-[200px] flex-col items-end">
        <div>
          <h1>John Heher</h1>
          <h2>
            <a href="https://github.com/Heher" className="text-[var(--cta)] underline">
              Web Developer
            </a>
          </h2>
          <p>
            Currently in{' '}
            <Link to="/trip" className="text-[var(--cta)] underline">
              London, UK
            </Link>
          </p>
        </div>
        <div className="flags-container relative mt-[8px] h-[200px] w-[200px]">
          <div className="flags-overlay absolute top-[-4px] left-0 z-10 h-[28px]"></div>
          <div className="flags-overlay-full absolute bottom-0 left-0 z-10 h-[177px]"></div>
          <div className="absolute top-0 right-0 flex flex-row-reverse flex-wrap items-center">
            {visitedCountries.map((countryName) => {
              const flag = flags.find((flag) => flag.name === countryName);

              return (
                <img
                  key={flag.name}
                  className="mr-[4px] mb-[4px] h-[20px] w-auto shadow-[1px_1px_4px_rgba(80,80,80,0.5)]"
                  src={flag.flagByTimestamp.png}
                  alt={flag.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
