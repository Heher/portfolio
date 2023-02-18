import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

function fizzBuzz() {
  const result = {};

  for (let i = 1; i <= 30; i++) {
    if (i % 15 === 0) {
      result[i] = 'FizzBuzz';
      // console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      result[i] = 'Fizz';
      // console.log('Fizz');
    } else if (i % 5 === 0) {
      result[i] = 'Buzz';
      // console.log('Buzz');
    } else {
      result[i] = i;
      // console.log(i);
    }
  }

  console.table(result);
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'John Heher | Web Developer',
  description: 'John Heher is a web developer from the United States.',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
});

export default function Index() {
  fizzBuzz();
  return (
    <main className="flex h-[100dvh] w-[100vw] items-center justify-center">
      <div>
        <h1>John Heher</h1>
        <h2>Web Developer</h2>
        <p>
          Currently in{' '}
          <Link to="/trip" className="text-[var(--cta)] underline">
            London, UK
          </Link>
        </p>
      </div>
    </main>
  );
}
