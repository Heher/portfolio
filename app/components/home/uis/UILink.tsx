import { Link } from 'react-router';

import { cn } from '@/lib/utils';

type UILinkProps = {
  url: string;
  title: string;
  className?: string;
};

export default function UILink({ url, title, className }: UILinkProps) {
  return (
    <Link
      to={url}
      className={cn(`
        w-100 shrink-0 rounded-2xl border-2 border-white bg-white p-5
        sm:w-60 sm:py-3
      `, className)}
    >
      <h2 className="
        mb-5 text-2xl font-semibold
        sm:text-center sm:text-lg
      "
      >
        {title}
      </h2>
    </Link>
  );
}
