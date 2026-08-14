import { useEffect, useRef } from 'react';

import DemoSection from '@/app/components/home/DemoSection';
import RecentProjects from '~/components/home/RecentProjects';
import StackSection from '~/components/home/StackSection';

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
        <div className="bg-linear-[160deg] from-header-top to-header-bottom">
          <div className="relative mx-auto max-w-275">
            <div className="
              relative flex flex-col-reverse pt-8
              sm:flex-row sm:items-center sm:rounded-bl-3xl sm:pt-40
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
                <img
                  src="/images/header-5.webp"
                  alt=""
                  className="
                    relative z-0 -ml-26 w-full mask-[linear-gradient(170deg,black_80%,transparent)]
                    sm:ml-0
                  "
                />
              </div>
              <div className="
                relative z-3 mb-1 flex justify-center
                sm:mb-0 sm:ml-15 sm:flex-col sm:pr-0
              "
              >
                <div className="
                  flex flex-col items-center
                  sm:items-start
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
          <StackSection />
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
