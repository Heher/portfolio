import { ArrowLeft } from 'lucide-react';
import { Link, useViewTransitionState } from 'react-router';

import { cn, getUIArrowTransitionName, getUIBodyTransitionName, getUIHeadingTransitionName } from '@/lib/utils';

type UILinkProps = {
  url: string;
  title: string;
  image: string;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
};

export default function UILink({ url, title, image, className, headerClassName, bodyClassName }: UILinkProps) {
  const isTransitioning = useViewTransitionState(url);
  const headingTransitionName = isTransitioning ? getUIHeadingTransitionName(url) : 'none';
  const bodyTransitionName = isTransitioning ? getUIBodyTransitionName(url) : 'none';
  const arrowTransitionName = isTransitioning ? getUIArrowTransitionName(url) : 'none';

  return (
    <Link
      to={url}
      className={cn(`group shrink-0 rounded-xl border-4 border-better-white`, className)}
      viewTransition
      style={{ viewTransitionName: headingTransitionName }}
    >

      <div
        className={cn(`
          relative flex h-34 w-70 flex-col items-center justify-center bg-better-white/60 transition-colors
          group-hover:bg-better-white
          sm:h-80
        `, bodyClassName)}
        style={{ viewTransitionName: bodyTransitionName }}
      >
        <div className="absolute top-0 left-0 z-2 h-15 w-full rounded-t-xl bg-better-white/60 backdrop-blur-xs" />
        <h2
          className={cn(`
            absolute top-0 left-0 z-3 flex h-15 w-full items-center gap-1 self-start pl-5 font-zilla text-lg font-semibold text-tables-dark transition-colors
            sm:text-lg
          `, headerClassName)}
        >
          {title}
          <ArrowLeft className="size-4.5 rotate-180" style={{ viewTransitionName: arrowTransitionName }} />
        </h2>
        <img
          src={`./demos/${image}`}
          className="
            h-22 justify-self-center opacity-50
            sm:h-34
          "
        />
      </div>
    </Link>
  );
}
