import type { MetaFunction } from '@remix-run/node';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
// import { Link } from '@remix-run/react';
import FlagContainer from '~/components/home/FlagContainer';
import { Arrow } from '~/components/icons/Arrow';
import EmailIcon from '~/components/icons/Email';
// import ExpandIcon from '~/components/icons/Expand';
import GitHubIcon from '~/components/icons/Github';
import ResumeIcon from '~/components/icons/Resume';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'John Heher | Web Developer',
  description: 'John Heher is a web developer from the United States, currently looking for fully remote work.',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
});

// const bounceTransition = {
//   y: {
//     duration: 0.4,
//     repeat: Infinity,
//     repeatType: 'reverse',
//     ease: 'easeOut',
//     staggerChildren: 2
//   }
// };

const variants = {
  initial: {
    y: '50%'
  },
  animate: {
    y: '-50%',
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: 'easeOut',
      repeatType: 'reverse'
    }
  }
};

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
      {/* <g>
        <polygon points="91.247,100 91.283,99.979 91.283,72.85 49.815,42.907 8.717,72.51 8.717,99.646 49.791,70.064    " />
      </g> */}
    </motion.svg>
  );
}

// const MotionExpandIcon = motion(ExpandIcon);

export default function Index() {
  const [expand, setExpand] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && containerRef.current) {
      console.log(containerRef.current.getBoundingClientRect());
      ref.current.scrollTop = containerRef.current.offsetHeight;
    }
  }, [expand]);

  return (
    <main
      className="min-h-screen w-[100vw] bg-[var(--index-background)] px-5 py-10 font-['Figtree'] text-[18px]"
      ref={ref}
    >
      <div className="m-0 mx-auto max-w-2xl" ref={containerRef}>
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
          <button
            className="flex h-10 w-full max-w-lg items-center justify-center border-2 border-[#282B27] bg-[#282B27] text-center text-[#e0e0e0]"
            onClick={() => setExpand(!expand)}
          >
            <motion.div>
              {[0, 1].map((_, i) => (
                <ExpandIcon key={i} className="h-2 fill-[#e0e0e0]" delay={i * 0.2} />
              ))}
            </motion.div>
          </button>
          <FlagContainer expand={expand} />
        </div>
      </div>
    </main>
  );
}
