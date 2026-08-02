import { Link } from 'react-router';

import { cn } from '@/lib/utils';

type UILinkProps = {
  url: string;
  title: string;
  image: string;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
};

export default function UILink({ url, title, image, className, headerClassName, bodyClassName }: UILinkProps) {
  return (
    <Link
      to={url}
      className={cn(`
        group w-50 shrink-0 rounded-2xl border-4 border-better-white
        sm:w-60
      `, className)}
    >
      <h2 className={cn(`
        rounded-t-2xl bg-tables-light/40 py-2 text-center text-base font-semibold text-tables-dark transition-colors
        group-hover:bg-tables-light/10
        sm:py-3 sm:text-lg
      `, headerClassName)}
      >
        {title}
      </h2>
      <div className={cn(`
        flex h-34 items-center justify-center bg-better-white/60 transition-colors
        group-hover:bg-better-white
        sm:h-50
      `, bodyClassName)}
      >
        <img
          src={`./uis/${image}`}
          className="
            h-20
            sm:h-30
          "
        />
      </div>
    </Link>
  );
}
