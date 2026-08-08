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

import Socials from '../components/home/Socials';

// const MotionArrow = motion.create(IndexArrow);

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

  if (!size.width) {
    return null;
  }

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
      className="m-0 mx-auto"
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
        {/* <img
          src="/images/me.jpg"
          alt="Me looking absolutely stunning while freezing in Cortina d'Ampezzo"
          className="w-32 rounded-xl"
        /> */}
        <div className="
          mx-auto max-w-275 bg-linear-to-b from-header-top to-header-bottom
          sm:rounded-b-3xl
        "
        >
          <div className="
            relative flex flex-col-reverse pt-10
            sm:flex-row sm:items-center sm:rounded-bl-3xl sm:pt-20
          "
          >
            <div className="max-w-192.5 self-end">
              <img
                src="/images/header.webp"
                alt=""
                className="
                  w-full
                  sm:rounded-bl-3xl
                "
              />
              {/* <img
                src="/images/me-faroe-sm.png"
                alt="Me looking absolutely stunning in the Faroe Islands."
                className="absolute -right-20 bottom-0 z-2 w-80"
              /> */}
            </div>
            <div className="
              relative z-3 mb-5 ml-10
              sm:mb-0 sm:ml-15
            "
            >
              <h1 className="
                text-3xl leading-none font-semibold text-name
                sm:text-4xl
              "
              >
                John Heher
              </h1>
              <h2 className="
                mt-1 text-base font-semibold text-subtitle uppercase
                sm:text-base
              "
              >
                Web Developer
              </h2>
              {size.width > 640 && <Socials />}
            </div>
            {/* <div className="absolute right-0 bottom-0 z-1 h-45 w-1/2 bg-[rgb(160,174,185)]" /> */}
          </div>
        </div>
        <div className="mx-auto max-w-200">
          {/* <h1 className="mt-10 text-4xl leading-none font-semibold text-name">John Heher</h1>
          <h2 className="mt-2 text-base text-subtitle uppercase">Web Developer</h2> */}
          {/* <div className="
            mt-10 flex flex-col-reverse gap-8
            md:flex-row
          "
          >

            <div>
              <p className="text-lg text-name">
                Experienced and adaptable full-stack web developer with a front-end focus. I've worked on a variety of
                projects from small start-ups to large agencies with
                {' '}
                <span className="whitespace-nowrap">Fortune 500</span>
                {' '}
                clients.
              </p>
            </div>
          </div> */}
          {size.width <= 640 && <Socials />}
          <UISection width={size.width} />
          <StackSection />
          <RecentProjects />
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
    <main
      className="
        w-screen bg-index-background pb-10 font-figtree text-lg
        sm:px-5
      "
      ref={pageContainerRef}
    >
      <IndexContent size={size} />
    </main>
  );
}
