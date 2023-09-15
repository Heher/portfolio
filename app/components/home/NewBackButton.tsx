import { Link } from '@remix-run/react';
import IndexArrow from '../icons/IndexArrow';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionArrow = motion(IndexArrow);

function getText(refer: { name: string; slug: string } | null) {
  // console.log(refer);
  if (refer) {
    return refer.name;
  }

  return 'Cities';
}

export default function NewBackButton({ refer }: { refer: { name: string; slug: string } | null }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="fixed left-0 top-0 h-[48px] w-full bg-[rgba(15,22,26,0.7)] md:h-[60px]">
      <div className="mx-auto flex h-full w-full max-w-[var(--back-button-max-width)] items-center px-5">
        <Link
          to={refer?.slug ? `/trip/${refer.slug}` : '/trip'}
          className="flex items-center px-2 py-1"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <MotionArrow
            className="h-3 rotate-180 fill-[#dddddd] md:h-4"
            initial={{ x: 0, rotate: 180 }}
            animate={{ x: hover ? '-4px' : 0 }}
          />
          <span className="ml-2 text-[#dddddd]">{getText(refer)}</span>
        </Link>
      </div>
    </div>
  );
}
