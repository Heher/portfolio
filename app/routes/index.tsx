import { Link } from '@remix-run/react';

function fizzBuzz() {
  for (let i = 1; i <= 30; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

export default function Index() {
  fizzBuzz();
  return (
    <main className="w-[100vw] h-[100dvh] flex items-center justify-center">
      <div>
        <h1>John Heher</h1>
        <h2>Web Developer</h2>
        <p>
          Currently in{' '}
          <Link to="/trip" className="underline text-[var(--cta)]">
            London, UK
          </Link>
        </p>
      </div>
    </main>
  );
}
