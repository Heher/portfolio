import type { ReactNode } from 'react';

import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

type HeaderProps = {
  heading: string;
  subhead: ReactNode;
};

export default function Header({ heading, subhead }: HeaderProps) {
  return (
    <div className="
      mx-auto flex w-full max-w-xl flex-col p-5
      sm:px-0 sm:pt-10 sm:pb-8
    "
    >
      <Link
        to="/"
        className="
          flex w-max items-center gap-2 text-sm font-semibold text-[#282B27]
          hover:opacity-80
          sm:text-base
        "
      >
        <ArrowLeft className="size-4.5" />
        <span className="block">Back</span>
      </Link>
      <div className="
        mt-7
        sm:mt-10
      "
      >
        <h1 className="
          text-2xl font-semibold
          sm:text-3xl
        "
        >
          {heading}
        </h1>
        <p className="
          my-3 font-zilla text-lg text-[#282B27]
          sm:my-5 sm:text-xl
        "
        >
          {subhead}
        </p>
      </div>
    </div>
  );
}
