import type { RectReadOnly } from 'react-use-measure';

import { useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';

import RecentProjects from '~/components/home/RecentProjects';
import StackSection from '~/components/home/StackSection';
import UISection from '~/components/home/UISection';
// import ExpandedFlagContainer from '~/components/ExpandedFlagContainer';
// import { Itenerary } from '~/components/Itenerary';

import Socials from '../components/home/Socials';

function IndexContent({ size }: { size: RectReadOnly }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.body;
    body.classList.remove('bg-globe-background');
    body.classList.add('bg-index-background');
  }, []);

  if (!size.width) {
    return null;
  }

  return (
    <div
      className="m-0 mx-auto"
      ref={containerRef}
    >
      <title>John Heher | Web Developer</title>
      <meta name="description" content="John Heher is a full-stack web developer from the United States, mostly focused on front-end development." />
      <div className="pb-5">
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
              {/* {size.width > 640 && <Socials />} */}
            </div>
          </div>
        </div>
        {/* <div className="mx-auto max-w-200">
          {size.width <= 640 && <Socials />}
          <UISection width={size.width} />
          <StackSection />
          <RecentProjects />
        </div> */}
      </div>
    </div>
  );
}

export default function Index() {
  const [pageContainerRef, size] = useMeasure({ debounce: 300 });

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
