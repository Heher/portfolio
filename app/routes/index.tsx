import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import FlagContainer from '~/components/home/FlagContainer';
import { Arrow } from '~/components/icons/Arrow';
import EmailIcon from '~/components/icons/Email';
import GitHubIcon from '~/components/icons/Github';
import ResumeIcon from '~/components/icons/Resume';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'John Heher | Web Developer',
  description: 'John Heher is a web developer from the United States, currently looking for fully remote work.',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
});

export default function Index() {
  return (
    <main className="min-h-screen w-[100vw] bg-[#DDDFDF] p-10 font-['Figtree'] text-[18px]">
      <img
        src="/images/me.jpeg"
        alt="Me looking absolutely stunning while freezing in Cortina d'Ampezzo"
        className="w-32 rounded-xl"
      />
      <h1 className="mt-10 text-3xl font-semibold leading-none text-[#282B27]">John Heher</h1>
      <h2 className="mt-2 text-sm uppercase text-[#50564E]">Web Developer</h2>
      <div className="mt-10">
        <a
          href="https://github.com/Heher"
          className="grid grid-cols-[30px_1fr] items-center text-sm font-semibold uppercase text-[#648767]"
        >
          <GitHubIcon className={`h-5 fill-[#648767]`} />
          <span className="ml-2">Github</span>
        </a>
        <a
          href="/cv.pdf"
          className="mt-3 grid grid-cols-[30px_1fr] items-center text-sm font-semibold uppercase text-[#648767]"
        >
          <ResumeIcon className={`h-5 fill-[#648767]`} />
          <span className="ml-2">Resume</span>
        </a>
        <a
          href="mailto:johnheher@gmail.com"
          className="mt-3 grid grid-cols-[30px_1fr] items-center text-sm font-semibold uppercase text-[#648767]"
        >
          <EmailIcon className={`w-5 fill-[#648767]`} />
          <span className="ml-2">Email</span>
        </a>
      </div>
      <div className="mt-20">
        <div className="mb-5 flex items-center">
          <h2 className="text-base font-semibold uppercase text-[#282B27]">Travels</h2>
          <a href="/trip" className="ml-3">
            <Arrow fill="#648767" className="h-4 rotate-180" />
          </a>
        </div>
        <FlagContainer />
      </div>
    </main>
  );
}
