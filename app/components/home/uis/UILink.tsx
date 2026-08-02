import { Link } from 'react-router';

import { cn } from '@/lib/utils';

type UILinkProps = {
  url: string;
  title: string;
  image: string;
  className?: string;
};

export default function UILink({ url, title, image, className }: UILinkProps) {
  return (
    <Link
      to={url}
      className={cn(`
        group w-100 shrink-0 rounded-2xl border-4 border-better-white
        sm:w-60
      `, className)}
    >
      <h2 className="
        rounded-t-2xl bg-header-bottom/60 py-3 text-2xl font-semibold text-name transition-colors
        group-hover:bg-header-bottom/20
        sm:text-center sm:text-lg
      "
      >
        {title}
      </h2>
      <div className="
        flex h-50 items-center justify-center rounded-b-2xl bg-better-white/60 transition-colors
        group-hover:bg-better-white
      "
      >
        <img src={`./uis/${image}`} className="h-30" />
      </div>
    </Link>
  );
}
