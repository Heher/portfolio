import type { ReactNode } from 'react';

import { ArrowLeft } from 'lucide-react';
import { Link, useLocation, useViewTransitionState } from 'react-router';

import { getUIWireframeTransitionName } from '@/lib/utils';

type HeaderProps = {
  heading: ReactNode;
  subhead: ReactNode;
  headerBgColor: string;
  imgSrc: string;
  madeWith: string[];
};

function HeaderTech({ tech }: { tech: string }) {
  return (
    <span className="
      rounded-full border border-[oklch(0.2736_0.077_45.81)]/60 bg-subtitle/20 px-2 py-1 text-xs font-medium text-[oklch(0.2736_0.077_45.81)]
      sm:px-3 sm:py-2 sm:text-sm
    "
    >
      {tech}
    </span>
  );
}

export default function Header({ heading, subhead, imgSrc, madeWith, headerBgColor }: HeaderProps) {
  const { pathname } = useLocation();
  const isTransitioning = useViewTransitionState(pathname);
  // const arrowTransitionName = isTransitioning ? getUIArrowTransitionName(pathname) : 'none';
  const wireframeTransitionName = isTransitioning ? getUIWireframeTransitionName(pathname) : 'none';

  // const transitionName = isTransitioning ? getUIHeadingTransitionName(pathname) : 'none';

  return (
    <div className={`
      w-full
      ${headerBgColor}
    `}
    >
      <div
        className="
          relative mx-auto flex w-full max-w-xl flex-col p-5
          sm:px-0 sm:py-10
        "
      >
        <div className="flex justify-between">
          <Link
            to="/"
            className="
              flex w-[80px] items-center justify-center gap-2 rounded-lg bg-name py-2 text-sm font-semibold text-better-white
              hover:opacity-80
              sm:w-[90px] sm:text-base
            "
            viewTransition
          >
            <ArrowLeft
              className="
                size-4
                sm:size-4.5
              "
            />
            <span className="block">Back</span>
          </Link>
        </div>
        <div className="
          my-10 flex w-full items-center gap-7
          sm:my-15 sm:gap-10
        "
        >
          <img
            src={imgSrc}
            className="
              h-16
              sm:h-30
            "
            style={{ viewTransitionName: wireframeTransitionName }}
          />
          {heading}
        </div>
        <div className="
          font-zilla text-lg text-name
          sm:text-2xl
        "
        >
          {subhead}
        </div>
        <p className="
          mt-8 text-xs font-light text-name uppercase
          sm:mt-10 sm:text-sm
        "
        >
          Made with:
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-name">
          {madeWith.map(tech => (
            <HeaderTech key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
