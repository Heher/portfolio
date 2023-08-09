import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import FlagContainer from '~/components/home/FlagContainer';
import ResumeIcon from '~/components/icons/Resume';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'John Heher | Web Developer',
  description: 'John Heher is a web developer from the United States, currently looking for fully remote work.',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
});

export default function Index() {
  return (
    <main className="flex h-[100dvh] w-[100vw] items-center justify-center text-[18px]">
      <div className="mr-[30px] flex flex-col items-end">
        <div>
          <div className="mb-4 flex items-center">
            <h1 className="text-2xl leading-none">John Heher</h1>
            <a href="/cv.pdf" className="ml-[10px] p-[5px] text-[var(--cta)] underline">
              <ResumeIcon className={`h-[20px] fill-[var(--cta)]`} />
            </a>
          </div>
          <h2 className="mb-1 text-lg">
            <a href="https://github.com/Heher" className="text-[var(--cta)] underline">
              Web Developer
            </a>
          </h2>
          <p>
            Currently in{' '}
            <Link to="/trip" className="text-[var(--cta)] underline" prefetch="intent">
              Austin, TX
            </Link>
          </p>
        </div>
        <FlagContainer />
      </div>
    </main>
  );
}
