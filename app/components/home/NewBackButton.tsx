import { motion } from 'motion/react';
import { useState } from 'react';
import { Link, useRouteLoaderData } from 'react-router';

import type { LayoutLoaderData } from '~/routes/trip/route';

import IndexArrow from '~/icons/IndexArrow';

const MotionArrow = motion.create(IndexArrow);

function getText(refer: { name: string | null; slug: string } | null | undefined) {
  if (refer) {
    return refer.name;
  }

  return 'Cities';
}

export default function NewBackButton() {
  const loaderData = useRouteLoaderData<LayoutLoaderData>('routes/trip/layout');
  const [hover, setHover] = useState(false);

  return (
    <div className="
      fixed top-0 left-0 h-12 w-full bg-[rgba(15,22,26,0.7)]
      md:h-15
    "
    >
      <div className="mx-auto flex size-full max-w-back-button-max-width items-center px-5">
        <Link
          to={loaderData?.refer?.slug ? `/trip/${loaderData.refer.slug}` : '/trip'}
          className="flex items-center px-2 py-1"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <MotionArrow
            className="
              h-3 rotate-180 fill-back-button
              md:h-4
            "
            initial={{ x: 0 }}
            animate={{ x: hover ? '4px' : 0 }}
          />
          <span className="ml-2 text-back-button">{getText(loaderData?.refer)}</span>
        </Link>
      </div>
    </div>
  );
}
