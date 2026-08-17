import type { ReactNode } from 'react';

import { ArrowLeft } from 'lucide-react';
import { Link, useLocation, useViewTransitionState } from 'react-router';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
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
    <div className="absolute top-0 left-0 z-10 w-full bg-better-white/70 backdrop-blur-xs">
      <div
        className="
          relative mx-auto flex w-full max-w-xl flex-col p-5
          sm:px-0 sm:pt-10 sm:pb-8
        "
        style={{ viewTransitionName: transitionName }}
      >
        <div className="flex justify-between">
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
          {heading}
          <Popover>
            <PopoverTrigger asChild>
              <button type="button" className="rounded-sm border border-better-black bg-better-white px-3 py-2 text-sm font-medium text-better-black uppercase">Details</button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="font-zilla text-base text-[#282B27]">
                {subhead}
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
