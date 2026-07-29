import type { RectReadOnly } from 'react-use-measure';

// import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router';
import useMeasure from 'react-use-measure';

import RecentProjects from '~/components/home/RecentProjects';
import StackSection from '~/components/home/StackSection';
import UISection from '~/components/home/UISection';
// import ExpandedFlagContainer from '~/components/ExpandedFlagContainer';
// import { Itenerary } from '~/components/Itenerary';
import EmailIcon from '~/icons/Email';
import GitHubIcon from '~/icons/Github';
// import IndexArrow from '~/icons/IndexArrow';
import LinkedInIcon from '~/icons/LinkedIn';
import ResumeIcon from '~/icons/Resume';

// const MotionArrow = motion.create(IndexArrow);

function SocialLink({ children, ...rest }: { children: React.ReactNode; [key: string]: any }) {
  return (
    <a
      className="
        grid grid-cols-[40px_1fr] items-center text-sm leading-none font-semibold text-(--index-link) uppercase transition-colors
        hover:text-(--index-link-hover)
      "
      {...rest}
    >
      {children}
    </a>
  );
}

function IndexContent({ size }: { size: RectReadOnly }) {
  // const [expand, setExpand] = useState(false);
  // const [travelLinkHovered, setTravelLinkHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // const location = useLocation();

  // function handleItineraryClick() {
  //   // gtag.event({
  //   //   action: 'click_itinerary',
  //   //   category: 'Itinerary Click',
  //   //   label: expand ? 'Close' : 'Open'
  //   // });

  //   setExpand(!expand);
  // }

  useEffect(() => {
    const body = document.body;
    body.classList.remove('bg-globe-background');
    body.classList.add('bg-index-background');
  }, []);

  // useEffect(() => {
  //   if (expand) {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   }
  // }, [expand]);

  if (!size.width)
    return null;

  return (
    // <motion.div
    //   className="m-0 mx-auto max-w-lg"
    //   ref={containerRef}
    //   key={location.key}
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    // >
    <div
      className="m-0 mx-auto max-w-lg"
      ref={containerRef}
    >
      <title>John Heher | Web Developer</title>
      <meta name="description" content="John Heher is a full-stack web developer from the United States, mostly focused on front-end development." />
      {/* <motion.div
        className="pb-5"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: expand ? -150 : 0, opacity: expand ? 0 : 1 }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
        style={{ visibility: expand ? 'hidden' : 'visible' }}
      > */}
      <div className="pb-5">
        <img
          src="/images/me.jpg"
          alt="Me looking absolutely stunning while freezing in Cortina d'Ampezzo"
          className="w-32 rounded-xl"
        />
        <h1 className="mt-10 text-4xl leading-none font-semibold text-name">John Heher</h1>
        <h2 className="mt-2 text-base text-subtitle uppercase">Web Developer</h2>
        <div className="
          mt-10 flex flex-col-reverse gap-8
          md:flex-row
        "
        >
          <div className="
            mt-5 grid w-full grid-cols-1 grid-rows-4 justify-items-start gap-5
            md:mt-0
          "
          >
            <SocialLink
              href="https://github.com/Heher"
              aria-label="My GitHub"
              // onClick={() => {
              //   gtag.event({
              //     action: 'click_contact',
              //     category: 'Contact Link',
              //     label: 'GitHub'
              //   });
              // }}
            >
              <GitHubIcon className="h-6 fill-current" />
              <span className="text-xs">GitHub</span>
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/johnheher/"
              aria-label="My LinkedIn"
              // onClick={() => {
              //   gtag.event({
              //     action: 'click_contact',
              //     category: 'Contact Link',
              //     label: 'LinkedIn'
              //   });
              // }}
            >
              <LinkedInIcon className="h-6 fill-current" />
              <span className="text-xs">LinkedIn</span>
            </SocialLink>
            <SocialLink
              href="/cv.pdf"
              aria-label="My Résumé"
              // onClick={() => {
              //   gtag.event({
              //     action: 'click_contact',
              //     category: 'Contact Link',
              //     label: 'Resume'
              //   });
              // }}
            >
              <ResumeIcon className="h-6 fill-current" />
              <span className="text-xs">Resume</span>
            </SocialLink>
            <SocialLink
              href="mailto:johnheher@gmail.com"
              aria-label="Email me"
              // onClick={() => {
              //   gtag.event({
              //     action: 'click_contact',
              //     category: 'Contact Link',
              //     label: 'Email'
              //   });
              // }}
            >
              <EmailIcon className="w-5 fill-current" />
              <span className="text-xs">Email</span>
            </SocialLink>
          </div>
          <div>
            <p className="text-lg text-subtitle">
              Experienced and adaptable full-stack web developer with a front-end focus. I've worked on a variety of
              projects from small start-ups to large agencies with
              {' '}
              <span className="whitespace-nowrap">Fortune 500</span>
              {' '}
              clients.
            </p>
          </div>
        </div>
        <UISection />
        <RecentProjects />
        <StackSection />
        {/* <div className="
          mt-20 mb-10 grid justify-items-start
          md:mt-32
        "
        >
          <Link
            to="/trip"
            className="grid grid-cols-[1fr_40px] items-center"
            onMouseEnter={() => {
              setTravelLinkHovered(true);
            }}
            onMouseLeave={() => {
              setTravelLinkHovered(false);
            }}
            aria-label="My travels to the Olympic cities"
          >
            <h2
              className={`
                text-xl font-semibold uppercase transition-colors
                ${travelLinkHovered ? 'text-[#686A67]' : 'text-[#282B27]'}
              `}
            >
              Travels
            </h2>
            <MotionArrow
              className="ml-3 h-3"
              animate={{
                x: travelLinkHovered ? 4 : 0,
                fill: travelLinkHovered ? 'var(--index-link-hover)' : 'var(--index-link)',
              }}
            />
          </Link>
          <p className="mt-3 max-w-md text-base text-[#282B27]">
            In November 2022, I decided to put all my stuff in storage and go travel for a bit. Made it to 29 countries
            in that time (Vatican City counts).
          </p>
          <p className="mt-3 max-w-md text-base text-[#282B27]">
            Check out my itinerary below or
            {' '}
            <Link
              to="/trip"
              className="
                font-semibold underline transition-colors
                hover:text-[#282B27]/60
              "
            >
              head over
            </Link>
            {' '}
            to my very cool, fun, and most importantly educational site with
            {' '}
            <motion.span
              className="bg-linear-to-r from-red-700 via-blue-500 to-red-700 bg-size-[200%_100%] bg-clip-text font-semibold text-transparent"
              initial={{ backgroundPosition: '0% 0%' }}
              animate={{ backgroundPosition: '200% 0%' }}
              transition={{ repeat: Infinity, duration: 1, repeatType: 'loop' }}
            >
              interactive
            </motion.span>
            {' '}
            buttons and and spinning globes.
          </p>
        </div> */}
        {/* <Itenerary setExpand={setExpand} /> */}
      </div>
      {/* </motion.div> */}
      {/* <AnimatePresence mode="wait">
        {expand && <ExpandedFlagContainer setExpand={setExpand} />}
      </AnimatePresence> */}
    </div>
    // </motion.div>
  );
}

export default function Index() {
  const [pageContainerRef, size] = useMeasure({ debounce: 300 });
  // const pageContainerRef = useRef<HTMLDivElement>(null);

  // const dimensions = useResizeObserver(pageContainerRef);

  // console.log('dimensions', dimensions);

  return (
    <main className="w-screen bg-index-background px-5 py-10 font-figtree text-lg" ref={pageContainerRef}>
      <IndexContent size={size} />
    </main>
  );
}
