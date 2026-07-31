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
        w-100 shrink-0 rounded-2xl border-2 border-better-white
        sm:w-60
      `, className)}
    >
      <h2 className="
        rounded-t-2xl bg-header-bottom py-3 text-2xl font-semibold text-name
        sm:text-center sm:text-lg
      "
      >
        {title}
      </h2>
      <div className="flex justify-center rounded-b-2xl bg-header-bottom/20 py-5">
        <img src={`./uis/${image}`} className="h-30" />
      </div>
    </Link>
  );
}
