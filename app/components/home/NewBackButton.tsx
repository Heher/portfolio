import { Link } from '@remix-run/react';
import IndexArrow from '../icons/IndexArrow';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionArrow = motion(IndexArrow);

export default function NewBackButton() {
  const [hover, setHover] = useState(false);

  return (
    <div className="fixed left-0 top-0 h-[48px] w-full bg-[rgba(15,22,26,0.7)] md:h-[60px]">
      <div className="mx-auto flex h-full w-full max-w-[var(--back-button-max-width)] items-center px-5">
        <Link
          to="/trip"
          className="rotate-180 px-2 py-1"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <MotionArrow className="h-4 fill-[#dddddd] md:h-5" initial={{ x: 0 }} animate={{ x: hover ? '4px' : 0 }} />
        </Link>
      </div>
    </div>
  );
}
