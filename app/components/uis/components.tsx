import type { ReactNode } from 'react';

import { useViewTransitionState } from 'react-router';

import { getUIBodyTransitionName } from '@/lib/utils';

type MainHeaderProps = {
  children: ReactNode;
  transitionPath?: string;
};

type UIPageBodyProps = {
  children: ReactNode;
  className?: string;
  transitionPath: string;
};

export function MainHeader({ children, transitionPath }: MainHeaderProps) {
  return (
    <h1
      className="
        text-2xl font-semibold
        sm:text-3xl
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
