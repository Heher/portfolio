import type { MetaFunction } from '@remix-run/node';
import { Link, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { RectReadOnly } from 'react-use-measure';
import useMeasure from 'react-use-measure';
import { Itenerary } from '~/components/Itenerary';
import EmailIcon from '~/icons/Email';
import GitHubIcon from '~/icons/Github';
import IndexArrow from '~/icons/IndexArrow';
import LinkedInIcon from '~/icons/LinkedIn';
import ResumeIcon from '~/icons/Resume';
import DrizzleIcon from '~/icons/stack/Drizzle';
import GraphQLIcon from '~/icons/stack/GraphQl';
import PostgraphileIcon from '~/icons/stack/Postgraphile';
import PostgreSQLIcon from '~/icons/stack/PostgreSQL';
import ReactIcon from '~/icons/stack/React';
import RemixIcon from '~/icons/stack/Remix';
import SentryIcon from '~/icons/stack/Sentry';
import SSTIcon from '~/icons/stack/SST';
import TailwindIcon from '~/icons/stack/Tailwind';
import TypeScriptIcon from '~/icons/stack/TypeScript';
import ViteIcon from '~/icons/stack/Vite';

import * as gtag from '~/utils/gtags.client';

export const meta: MetaFunction = () => {
  return [
    { title: 'John Heher | Web Developer' },
    {
      name: 'description',
      content: 'John Heher is a web developer from the United States, currently looking for fully remote work.'
    }
  ];
};

const MotionArrow = motion(IndexArrow);

function ExpandIcon({ className, delay }: { className?: string; delay: number }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 100"
      className={className}
      initial={{ y: '30%' }}
      animate={{ y: '-30%' }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'easeOut',
        repeatType: 'reverse',
        delay
      }}
    >
      <g>
        <polygon points="0,69 150,0 300,69 300,100 150,40 0,100" />
      </g>
    </motion.svg>
  );
}

function getClosePosition(windowHeight: number) {
  return (windowHeight + 20) * -1;
}

function getCloseRight(windowWidth: number) {
  if (windowWidth <= 640) {
    return -10;
  }

  return -20;
}

function SocialLink({ children, ...rest }: { children: React.ReactNode; [key: string]: any }) {
  return (
    <a
      className="grid grid-cols-[40px_1fr] items-center text-sm font-semibold uppercase leading-none text-[var(--index-link)] transition-colors hover:text-[var(--index-link-hover)]"
      {...rest}
    >
      {children}
    </a>
  );
}

function StackTech({ name, link, icon }: { name: string; link?: string }) {
  return (
    <li className="">
      <a
        href={link}
        className="grid grid-cols-[30px_1fr] items-center gap-3 rounded-sm bg-[rgba(255,255,255,0.4)] py-4 pl-3 pr-5 text-[var(--index-link)] transition-colors hover:bg-[rgba(255,255,255,0.6)]"
      >
        {icon && icon}
        {name}
      </a>
    </li>
  );
}

function IndexContent({ size }: { size: RectReadOnly }) {
  const [expand, setExpand] = useState(false);
  const [travelLinkHovered, setTravelLinkHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const [contentRef, contentSize] = useMeasure({ debounce: 300 });

  function handleItineraryClick() {
    gtag.event({
      action: 'click_itinerary',
      category: 'Itinerary Click',
      label: expand ? 'Close' : 'Open'
    });

    setExpand(!expand);
  }

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--body-background', 'var(--index-background)');
  }, []);

  useEffect(() => {
    if (expand) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [expand]);

  if (!size?.width) return null;

  return (
    <motion.div
      className={`m-0 mx-auto max-w-lg ${!expand && 'min-h-[880px]'}`}
      ref={containerRef}
      key={location.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="main-content pb-5"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: expand ? -150 : 0, opacity: expand ? 0 : 1 }}
        transition={{
          duration: 0.3,
          ease: 'easeOut'
        }}
        ref={contentRef}
        style={{ visibility: expand ? 'hidden' : 'visible' }}
      >
        <img
          src="/images/me.jpg"
          alt="Me looking absolutely stunning while freezing in Cortina d'Ampezzo"
          className="w-32 rounded-xl"
        />
        <h1 className="mt-10 text-4xl font-semibold leading-none text-[#282B27]">John Heher</h1>
        <h2 className="mt-2 text-base uppercase text-[#50564E]">Web Developer</h2>
        <div className="mt-10 flex flex-col-reverse gap-8 md:flex-row">
          <div className="mt-5 grid w-full grid-cols-1 grid-rows-4 justify-items-start gap-5 md:mt-0">
            <SocialLink
              href="https://github.com/Heher"
              aria-label="My GitHub"
              onClick={() => {
                gtag.event({
                  action: 'click_contact',
                  category: 'Contact Link',
                  label: 'GitHub'
                });
              }}
            >
              <GitHubIcon className={`h-6 fill-current`} />
              <span className="text-xs">GitHub</span>
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/johnheher/"
              aria-label="My LinkedIn"
              onClick={() => {
                gtag.event({
                  action: 'click_contact',
                  category: 'Contact Link',
                  label: 'LinkedIn'
                });
              }}
            >
              <LinkedInIcon className={`h-6 fill-current`} />
              <span className="text-xs">LinkedIn</span>
            </SocialLink>
            <SocialLink
              href="/cv.pdf"
              aria-label="My Résumé"
              onClick={() => {
                gtag.event({
                  action: 'click_contact',
                  category: 'Contact Link',
                  label: 'Resume'
                });
              }}
            >
              <ResumeIcon className={`h-6 fill-current`} />
              <span className="text-xs">Resume</span>
            </SocialLink>
            <SocialLink
              href="mailto:johnheher@gmail.com"
              aria-label="Email me"
              onClick={() => {
                gtag.event({
                  action: 'click_contact',
                  category: 'Contact Link',
                  label: 'Email'
                });
              }}
            >
              <EmailIcon className={`w-5 fill-current`} />
              <span className="text-xs">Email</span>
            </SocialLink>
          </div>
          <div>
            <p className="text-lg text-[#363b34]">
              Experienced and adaptable full-stack web developer with a front-end focus. I've worked on a variety of
              projects from small start-ups to large agencies with{' '}
              <span className="whitespace-nowrap">Fortune 500</span> clients.
            </p>
          </div>
        </div>
        <div className="mt-32">
          <h2 className={`mb-5 text-xl font-semibold uppercase`}>Stack</h2>
          <p className="max-w-md text-base text-[#282B27] mt-3">
            Being a programmer for over a decade allows you to work with a variety of technologies, but lately my go-to
            stack (and the one that built this site) has been:
          </p>
          <div className="mt-10 flex gap-5">
            <div className="flex w-full justify-around">
              <ul className="mt-5 flex flex-col gap-1 text-base text-[#282B27]">
                <StackTech
                  name="Remix"
                  link="https://remix.run/"
                  icon={<RemixIcon className="h-[20px] justify-self-center fill-current" />}
                />
                <StackTech
                  name="React"
                  link="https://react.dev/"
                  icon={<ReactIcon className="h-[20px] justify-self-center fill-current" />}
                />
                <StackTech
                  name="Tailwind"
                  link="https://tailwindcss.com/"
                  icon={<TailwindIcon className="h-[15px] justify-self-center fill-current" />}
                />
                <StackTech
                  name="TypeScript"
                  link="https://www.typescriptlang.org/"
                  icon={<TypeScriptIcon className="h-[20px] justify-self-center fill-current" />}
                />
              </ul>
              <ul className="mt-5 flex flex-col gap-1 text-base text-[#282B27]">
                <StackTech
                  name="Vite"
                  link="https://vitejs.dev/"
                  icon={<ViteIcon className="h-[20px] justify-self-center fill-current" />}
                />
                <StackTech
                  name="Sentry"
                  link="https://www.sentry.io/"
                  icon={<SentryIcon className="h-[20px] justify-self-center fill-current" />}
                />
                {/* <StackTech
                  name="Postgraphile"
                  link="https://www.graphile.org/postgraphile/"
                  icon={<PostgraphileIcon className="h-[20px] justify-self-center fill-current" />}
                />
                <StackTech
                  name="GraphQL"
                  link="https://graphql.org/"
                  icon={<GraphQLIcon className="h-[20px] justify-self-center fill-current" />}
                /> */}
                <StackTech
                  name="Drizzle"
                  link="https://orm.drizzle.team/"
                  icon={<DrizzleIcon className="h-[20px] justify-self-center fill-current" />}
                />
                <StackTech
                  name="PostgreSQL"
                  link="https://www.postgresql.org/"
                  icon={<PostgreSQLIcon className="h-[20px] justify-self-center fill-current" />}
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-32 grid justify-items-start">
          <Link
            to="/trip"
            className="grid grid-cols-[1fr_40px] items-center"
            onMouseEnter={() => setTravelLinkHovered(true)}
            onMouseLeave={() => setTravelLinkHovered(false)}
            aria-label="My travels to the Olympic cities"
          >
            <h2
              className={`text-xl font-semibold uppercase ${
                travelLinkHovered ? 'text-[#686A67]' : 'text-[#282B27]'
              } transition-colors`}
            >
              Travels
            </h2>
            <MotionArrow
              className="ml-3 h-3"
              animate={{
                x: travelLinkHovered ? 4 : 0,
                fill: travelLinkHovered ? 'var(--index-link-hover)' : 'var(--index-link)'
              }}
            />
          </Link>
        </div>
      </motion.div>
      <Itenerary expand={expand} setExpand={setExpand} contentSize={contentSize} size={size} />
    </motion.div>
  );
}

export default function Index() {
  const [pageContainerRef, size] = useMeasure({ debounce: 300 });

  return (
    <main
      className="min-h-screen w-[100vw] bg-[var(--index-background)] px-5 py-10 font-['Figtree'] text-[18px]"
      ref={pageContainerRef}
    >
      <IndexContent size={size} />
    </main>
  );
}
