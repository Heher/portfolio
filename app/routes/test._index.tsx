import type { V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getGQLClient } from '~/utils/graphql';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Olympic Trip | John Heher' },
    {
      name: 'description',
      content: "John Heher's Olympic trip: visiting every city that has hosted the Olympic Games."
    },
    {
      name: 'og:title',
      content: 'Olympic Trip | John Heher'
    },
    {
      name: 'og:image',
      content: '/olympic-cities-og.jpg'
    }
  ];
};

export async function loader() {
  const sdk = getGQLClient();
  const response = await sdk.GetOlympicData({
    now: new Date().toISOString()
  });

  if (!response?.data?.olympiads || !response?.data?.cities) {
    return json({ olympiads: [], cities: [] });
  }

  return json({ olympiads: response.data.olympiads.nodes, cities: response.data.cities.nodes });
}

export default function TestPage1() {
  // const location = useLocation();
  return (
    <motion.div>
      <motion.a
        href="/test/page2"
        className="block h-[10dvh] w-full bg-[#e0e0e0]"
        // transition={{ duration: 0.3, ease: 'easeInOut' }}
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        exit={{ x: -150 }}
        // layout
        // layoutId="test"
      >
        Go to page 2
      </motion.a>
      <motion.a
        href="/test/page2"
        className="block h-[10dvh] w-full bg-[#e0e0e0]"
        // transition={{ duration: 0.3, ease: 'easeInOut' }}
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        exit={{ x: -150 }}
        // layout
        // layoutId="test"
      >
        Go to page 2
      </motion.a>
      <motion.a
        href="/test/page2"
        className="block h-[10dvh] w-full bg-[#e0e0e0]"
        // transition={{ duration: 0.3, ease: 'easeInOut' }}
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        exit={{ x: -150 }}
        // layout
        // layoutId="test"
      >
        Go to page 2
      </motion.a>
    </motion.div>
  );
}
