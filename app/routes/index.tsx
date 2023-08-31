import type { MetaFunction } from '@remix-run/node';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useMeasure from 'react-use-measure';
// import { Link } from '@remix-run/react';
import FlagContainer from '~/components/home/FlagContainer';
import { Arrow } from '~/components/icons/Arrow';
import CloseIcon from '~/components/icons/CloseIcon';
import EmailIcon from '~/components/icons/Email';
// import ExpandIcon from '~/components/icons/Expand';
import GitHubIcon from '~/components/icons/Github';
import LinkedInIcon from '~/components/icons/LinkedIn';
import ResumeIcon from '~/components/icons/Resume';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'John Heher | Web Developer',
  description: 'John Heher is a web developer from the United States, currently looking for fully remote work.',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
});

function ExpandIcon({ className, delay }: { className?: string; delay: number }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 50"
      className={className}
      initial={{ y: '20%' }}
      animate={{ y: '-20%' }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: 'easeOut',
        repeatType: 'reverse',
        delay
      }}
    >
      <g>
        <polygon points="91.247,57.092 91.283,57.072 91.283,29.941 49.815,0 8.717,29.602 8.717,56.738 49.791,27.157" />
      </g>
    </motion.svg>
  );
}

// const MotionExpandIcon = motion(ExpandIcon);

function getClosePosition(windowHeight: number, containerHeight?: number) {
  if (!containerHeight) return 0;
  if (windowHeight < 800) {
    return (containerHeight + 50) * -1;
  }

  return (containerHeight + 40) * -1;
}

function getCloseRight(windowWidth: number) {
  if (windowWidth <= 640) {
    return -10;
  }

  return -20;
}

function IndexContent({ size }) {
  const [expand, setExpand] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expand) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [expand]);

  if (!size?.width) return null;

  return (
    <div className="m-0 mx-auto max-w-2xl" ref={containerRef}>
      <motion.div
        className="main-content"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: expand ? -150 : 0, opacity: expand ? 0 : 1 }}
        transition={{
          duration: 0.3,
          ease: 'easeOut'
        }}
      >
        <img
          src="/images/me.jpeg"
          alt="Me looking absolutely stunning while freezing in Cortina d'Ampezzo"
          className="w-32 rounded-xl"
        />
        <h1 className="mt-10 text-4xl font-semibold leading-none text-[#282B27]">John Heher</h1>
        <h2 className="mt-2 text-base uppercase text-[#50564E]">Web Developer</h2>
        <div className="mt-10 grid grid-cols-1 grid-rows-4 justify-items-start gap-5">
          <a
            href="https://github.com/Heher"
            className="grid grid-cols-[40px_1fr] items-center text-sm font-semibold uppercase leading-none text-[#648767]"
          >
            <GitHubIcon className={`h-6 fill-[#648767]`} />
            <span className="text-xs">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/johnheher/"
            className="grid grid-cols-[40px_1fr] items-center text-sm font-semibold uppercase leading-none text-[#648767]"
          >
            <LinkedInIcon className={`h-6 fill-[#648767]`} />
            <span className="text-xs">LinkedIn</span>
          </a>
          <a
            href="/cv.pdf"
            className="grid grid-cols-[40px_1fr] items-center text-sm font-semibold uppercase leading-none text-[#648767]"
          >
            <ResumeIcon className={`h-6 fill-[#648767]`} />
            <span className="text-xs">Resume</span>
          </a>
          <a
            href="mailto:johnheher@gmail.com"
            className="grid grid-cols-[40px_1fr] items-center text-sm font-semibold uppercase leading-none text-[#648767]"
          >
            <EmailIcon className={`w-5 fill-[#648767]`} />
            <span className="text-xs">Email</span>
          </a>
        </div>
        <div className="mt-20">
          <div className="mb-5 flex items-center">
            <h2 className="text-lg font-semibold uppercase text-[#282B27]">Travels</h2>
            <a href="/trip" className="ml-3">
              <Arrow fill="#648767" className="h-4 rotate-180" />
            </a>
          </div>
        </div>
      </motion.div>
      {/* <div className="relative w-full max-w-lg" style={{ height: expand ? 0 : 320 }}> */}
      <div className="relative w-full max-w-lg">
        <motion.button
          className="absolute z-10 flex h-10 w-full max-w-lg items-center justify-center border-2 border-[#282B27] bg-[#282B27] text-center text-[#e0e0e0]"
          onClick={() => setExpand(!expand)}
          initial={{ width: '100%', top: 0, right: 0 }}
          animate={{
            width: expand ? 40 : '100%',
            top: expand ? getClosePosition(size.height, containerRef.current?.offsetHeight) : 0,
            right: expand ? getCloseRight(size.width) : 0,
            borderRadius: expand ? '50%' : 0
          }}
        >
          <motion.div>
            {expand ? (
              <CloseIcon className="fill-[#e0e0e0]" />
            ) : (
              [0, 1].map((_, i) => <ExpandIcon key={i} className="h-2 fill-[#e0e0e0]" delay={i * 0.2} />)
            )}
          </motion.div>
        </motion.button>
        <FlagContainer
          expand={expand}
          containerHeight={containerRef.current?.offsetHeight ? containerRef.current.offsetHeight - 320 : 0}
          contentSize={size}
        />
      </div>
    </div>
  );
}

export default function Index() {
  // useEffect(() => {
  //   if (ref.current && containerRef.current) {
  //     ref.current.scrollTop = containerRef.current.offsetHeight;
  //   }
  // }, [expand]);

  const [pageContainerRef, size] = useMeasure({ debounce: 300 });

  console.log(size);

  return (
    <main
      className="min-h-screen w-[100vw] bg-[var(--index-background)] px-5 py-10 font-['Figtree'] text-[18px]"
      ref={pageContainerRef}
    >
      <IndexContent size={size} />
    </main>
  );
}
