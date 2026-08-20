import type { ReactNode } from 'react';

import { useViewTransitionState } from 'react-router';

import { getUIBodyTransitionName, getUIHeadingTransitionName } from '@/lib/utils';

type MainHeaderProps = {
  children: ReactNode;
};

type UIPageBodyProps = {
  children: ReactNode;
  className?: string;
  transitionPath: string;
};

export function MainHeaderContainer({ children }: { children: ReactNode }) {
  return (
    <div className="
      absolute top-1/2 left-1/2 flex -translate-1/2 items-center gap-3
      sm:static sm:translate-0
    "
    >
      {children}
    </div>
  );
}

export function MainHeader({ url, children }: MainHeaderProps & { url: string }) {
  const isTransitioning = useViewTransitionState(url);
  const headingTransitionName = isTransitioning ? getUIHeadingTransitionName(url) : 'none';

  return (
    <h1
      className="
        text-[47px] leading-none font-bold text-name
        sm:text-[80px]
      "
      style={{ viewTransitionName: headingTransitionName }}
    >
      {children}
    </h1>
  );
}

export function UIPageBody({ children, className, transitionPath }: UIPageBodyProps) {
  const isTransitioning = useViewTransitionState(transitionPath);
  const transitionName = isTransitioning ? getUIBodyTransitionName(transitionPath) : 'none';

  return (
    <div
      className={className}
      style={{ viewTransitionName: transitionName }}
    >
      {children}
    </div>
  );
}
