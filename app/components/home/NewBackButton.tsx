import { Link } from '@remix-run/react';
import IndexArrow from '../icons/IndexArrow';

export default function NewBackButton() {
  return (
    <div className="fixed left-0 top-0 h-10 w-full bg-[rgba(15,22,26,0.7)]">
      <div className="mx-auto flex h-full w-full max-w-[var(--back-button-max-width)] items-center px-5">
        <Link to="/trip" className="px-2 py-1">
          <IndexArrow className="w-6 rotate-180 fill-[#dddddd]" />
        </Link>
      </div>
    </div>
  );
}
