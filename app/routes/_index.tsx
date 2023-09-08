import type { V2_MetaFunction } from '@remix-run/node';
import { useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { RectReadOnly } from 'react-use-measure';
import useMeasure from 'react-use-measure';
import FlagContainer from '~/components/home/FlagContainer';
import CloseIcon from '~/components/icons/CloseIcon';
import EmailIcon from '~/components/icons/Email';
import GitHubIcon from '~/components/icons/Github';
import IndexArrow from '~/components/icons/IndexArrow';
import LinkedInIcon from '~/components/icons/LinkedIn';
import ResumeIcon from '~/components/icons/Resume';

export const meta: V2_MetaFunction = () => {
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
      viewBox="0 0 100 50"
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
        <polygon points="91.247,57.092 91.283,57.072 91.283,29.941 49.815,0 8.717,29.602 8.717,56.738 49.791,27.157" />
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

function IndexContent({ size }: { size: RectReadOnly }) {
  const [expand, setExpand] = useState(false);
  const [travelLinkHovered, setTravelLinkHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const [contentRef, contentSize] = useMeasure({ debounce: 300 });

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
      >
        <img
          src="/images/me.jpeg"
          alt="Me looking absolutely stunning while freezing in Cortina d'Ampezzo"
          className="w-32 rounded-xl"
        />
        <h1 className="mt-10 text-4xl font-semibold leading-none text-[#282B27]">John Heher</h1>
        <h2 className="mt-2 text-base uppercase text-[#50564E]">Web Developer</h2>
        <div className="mt-10 grid grid-cols-1 grid-rows-4 justify-items-start gap-5">
          <SocialLink href="https://github.com/Heher">
            <GitHubIcon className={`h-6 fill-current`} />
            <span className="text-xs">GitHub</span>
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/johnheher/">
            <LinkedInIcon className={`h-6 fill-current`} />
            <span className="text-xs">LinkedIn</span>
          </SocialLink>
          <SocialLink href="/cv.pdf">
            <ResumeIcon className={`h-6 fill-current`} />
            <span className="text-xs">Resume</span>
          </SocialLink>
          <SocialLink href="mailto:johnheher@gmail.com">
            <EmailIcon className={`w-5 fill-current`} />
            <span className="text-xs">Email</span>
          </SocialLink>
        </div>
        <div className="mt-20 grid justify-items-start">
          <a
            href="/trip"
            className="grid grid-cols-[1fr_40px] items-center"
            onMouseOver={() => setTravelLinkHovered(true)}
            onMouseOut={() => setTravelLinkHovered(false)}
          >
            <h2
              className={`text-lg font-semibold uppercase ${
                travelLinkHovered ? 'text-[#686A67]' : 'text-[#282B27]'
              } transition-colors`}
            >
              Travels
            </h2>
            <MotionArrow className="ml-3 h-3 fill-[var(--index-link)]" animate={{ x: travelLinkHovered ? 8 : 0 }} />
          </a>
        </div>
      </motion.div>
      {contentSize?.height > 0 && (
        <div className="relative w-full max-w-lg">
          <motion.button
            className="absolute z-10 flex h-10 w-full max-w-lg items-center justify-center border-2 border-[#282B27] bg-[#282B27] text-center text-[#e0e0e0] transition-colors hover:bg-[#403a3b]"
            onClick={() => setExpand(!expand)}
            initial={{ width: '100%', top: 0, right: 0 }}
            animate={{
              width: expand ? 40 : '100%',
              top: expand ? getClosePosition(contentSize.height) : 0,
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
          <motion.div
            className="absolute top-10 z-10 h-16 w-full px-[2px]"
            initial={{ height: 64, top: 40 }}
            animate={{
              height: expand ? 0 : 64,
              top: expand ? getClosePosition(size.height) : 40
            }}
          >
            <div className="h-16 w-full bg-gradient-to-b from-[rgba(176,178,178,0.7)] to-transparent"></div>
          </motion.div>
          <FlagContainer expand={expand} contentSize={size} mainContentSize={contentSize} />
        </div>
      )}
    </motion.div>
  );
}

export default function Index() {
  // useEffect(() => {
  //   if (ref.current && containerRef.current) {
  //     ref.current.scrollTop = containerRef.current.offsetHeight;
  //   }
  // }, [expand]);

  const [pageContainerRef, size] = useMeasure({ debounce: 300 });

  // console.log(size);

  return (
    <main
      className="min-h-screen w-[100vw] bg-[var(--index-background)] px-5 py-10 font-['Figtree'] text-[18px]"
      ref={pageContainerRef}
    >
      <IndexContent size={size} />
    </main>
  );
}
