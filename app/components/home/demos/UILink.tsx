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
      className={cn(`
        group shrink-0 rounded-xl border-4 border-better-white
        sm:w-60
      `, className)}
      viewTransition
      style={{ viewTransitionName: headingTransitionName }}
    >
      <h2
        className={cn(`
          flex items-center justify-center gap-1 rounded-t-xl bg-tables-light/50 py-2 font-zilla text-lg font-semibold text-tables-dark transition-colors
          group-hover:bg-tables-light/40
          sm:py-3 sm:text-lg
        `, headerClassName)}
      >
        {title}
        <ArrowLeft className="size-4.5 rotate-180" style={{ viewTransitionName: arrowTransitionName }} />
      </h2>
      <div
        className={cn(`
          flex h-34 items-center justify-center bg-better-white/60 transition-colors
          group-hover:bg-better-white
          sm:h-50
        `, bodyClassName)}
        style={{ viewTransitionName: bodyTransitionName }}
      >
        <img
          src={`./demos/${image}`}
          className="
            h-22
            sm:h-30
          "
        />
      </div>
    </Link>
  );
}
