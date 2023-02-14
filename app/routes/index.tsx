import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <main className="w-[100vw] h-[100vh] flex items-center justify-center">
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
