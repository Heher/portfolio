import type { ReactNode } from 'react';

import { ArrowLeft } from 'lucide-react';
import { Link, useLocation, useViewTransitionState } from 'react-router';

import { getUIArrowTransitionName, getUIHeadingTransitionName } from '@/lib/utils';

type HeaderProps = {
  heading: ReactNode;
  subhead: ReactNode;
};

export default function Header({ heading, subhead }: HeaderProps) {
  const { pathname } = useLocation();
  const isTransitioning = useViewTransitionState(pathname);
  const arrowTransitionName = isTransitioning ? getUIArrowTransitionName(pathname) : 'none';

  const transitionName = isTransitioning ? getUIHeadingTransitionName(pathname) : 'none';

  return (
    <div className="">
      <div
        className="
          mx-auto flex w-full max-w-xl flex-col p-5
          sm:px-0 sm:pt-10 sm:pb-8
        "
        style={{ viewTransitionName: transitionName }}
      >
        <Link
          to="/"
          className="
            flex w-max items-center gap-2 text-sm font-semibold text-[#282B27]
            hover:opacity-80
            sm:text-base
          "
          viewTransition
        >
          <ArrowLeft className="size-4.5" style={{ viewTransitionName: arrowTransitionName }} />
          <span className="block">Back</span>
        </Link>
        <div className="
          mt-7
          sm:mt-10
        "
        >
          {heading}
          <p className="
            my-3 font-zilla text-lg text-[#282B27]
            sm:my-5 sm:text-xl
          "
          >
            {subhead}
          </p>
        </div>
      </div>
    </div>
  );
}
