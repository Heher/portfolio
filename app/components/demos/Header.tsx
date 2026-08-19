import type { ReactNode } from 'react';

import { ArrowLeft } from 'lucide-react';
import { Link, useLocation, useViewTransitionState } from 'react-router';

import { getUIArrowTransitionName, getUIHeadingTransitionName } from '@/lib/utils';

type HeaderProps = {
  heading: ReactNode;
  subhead: ReactNode;
  headerBgColor: string;
  imgSrc: string;
  madeWith: string[];
};

export default function Header({ heading, subhead, imgSrc, madeWith, headerBgColor }: HeaderProps) {
  const { pathname } = useLocation();
  const isTransitioning = useViewTransitionState(pathname);
  const arrowTransitionName = isTransitioning ? getUIArrowTransitionName(pathname) : 'none';

  const transitionName = isTransitioning ? getUIHeadingTransitionName(pathname) : 'none';

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
        style={{ viewTransitionName: transitionName }}
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
              style={{ viewTransitionName: arrowTransitionName }}
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
        <div className="mt-3 flex gap-5 text-name">
          {madeWith.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
