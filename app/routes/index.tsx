import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

import DemoSection from '@/app/components/home/DemoSection';
import SkillsSection from '@/app/components/home/SkillsSection';
import RecentProjects from '~/components/home/RecentProjects';

import Socials from '../components/home/Socials';

function IndexContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.body;
    body.classList.remove('bg-index-background');
    body.classList.add('bg-linear-to-b', 'from-header-top', 'to-index-background', 'from-49%', 'to-51%');
  }, []);

  return (
    <div
      className="m-0 mx-auto"
      ref={containerRef}
    >
      <title>John Heher | Web Developer</title>
      <meta name="description" content="John Heher is a full-stack web developer from the United States, mostly focused on front-end development." />
      <div className="pb-5">
        {/* <div className="
          mx-auto max-w-275 bg-linear-[160deg] from-header-top to-header-bottom
          sm:rounded-b-3xl
        "
        > */}
        <div className="relative bg-linear-[160deg] from-header-top to-header-bottom">
          {/* <motion.div className="absolute bottom-0 left-0 z-1 h-[70%] w-[200%] bg-linear-to-r from-better-white/10 via-better-white/40 to-better-white/10 blur-[80px]" initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ duration: 20, repeat: Infinity }} /> */}
          <div className="relative mx-auto max-w-275">
            <motion.div
              className="absolute -bottom-20 left-0 z-1 h-[90%] w-full rounded-2xl bg-linear-to-t from-better-white/40 via-better-white to-better-white/40 blur-3xl"
              // initial={{ x: '-100%', opacity: 0 }}
              // animate={{ x: '100%', opacity: 1 }}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '100%', opacity: [0, 1, 0] }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
            />
            <div className="
              relative flex flex-col-reverse pt-8
              sm:flex-row sm:rounded-bl-3xl sm:pt-45
            "
            >
              <div className="
                -mt-3 max-w-192.5 self-end
                sm:mt-0
              "
              >
                {/* <img
                  src="/images/header.webp"
                  alt=""
                  className="
                    relative z-0 -ml-26 w-full mask-[linear-gradient(270deg,black_50%,transparent)]
                    sm:ml-0
                  "
                /> */}
                <motion.img
                  src="/images/header.webp"
                  alt=""
                  className="
                    relative z-0 -ml-26 w-full
                    sm:ml-0
                  "
                />
              </div>
              <div className="
                relative z-3 mb-1 flex justify-center
                sm:mb-0 sm:ml-15 sm:flex-col sm:justify-start sm:pr-0
              "
              >
                <div className="
                  flex flex-col items-center
                  sm:items-start
                "
                >
                  <h1 className="
                    flex flex-col gap-1 text-3xl leading-none text-name uppercase
                    sm:text-4xl
                  "
                  >
                    <span className="mb-[-3px] leading-none">John</span>
                    <span className="text-[49px] leading-none font-bold">Heher</span>
                  </h1>
                  <h2 className="
                    mt-4 mb-6 text-base font-semibold tracking-[0.16em] text-subtitle uppercase
                    sm:text-base
                  "
                  >
                    Web Developer
                  </h2>
                </div>
                <div className="
                  hidden
                  sm:block
                "
                >
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto max-w-200"> */}
        <div className="">
          <div className="sm:hidden">
            <Socials />
          </div>
          <DemoSection />
          <SkillsSection />
          <RecentProjects />
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <main
      className="w-screen bg-index-background pb-10 font-figtree text-lg"
    >
      <IndexContent />
    </main>
  );
}
