import type { ReactNode } from 'react';

import { useViewTransitionState } from 'react-router';

import { getUIBodyTransitionName } from '@/lib/utils';

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
      absolute top-5 left-1/2 flex -translate-x-1/2 items-center gap-3
      sm:static sm:translate-x-0
    "
    >
      {children}
    </div>
  );
}

export function MainHeader({ children }: MainHeaderProps) {
  return (
    <h1
      className="
        text-sm font-semibold uppercase
        sm:text-base
      "
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
