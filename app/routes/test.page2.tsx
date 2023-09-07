import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLocation } from '@remix-run/react';
import { AnimatePresence, motion } from 'framer-motion';
import { getGQLClient } from '~/utils/graphql';

export async function loader({ params }: LoaderArgs) {
  // console.log('params', params);
  if (!params.slug) {
    return json({ city: null });
  }

  const sdk = getGQLClient();

  const now = new Date().toISOString();

  const response = await sdk.GetCity({ now, slug: params.slug });

  console.log(response);

  if (!response?.data?.cityBySlug?.name) {
    return json({ city: null });
  }

  return json({ city: response.data.cityBySlug });
}

function CityPage() {
  // const location = useLocation();
  return (
    <motion.div
      // transition={{ duration: 1, ease: 'easeInOut' }}
      className="fixed top-1/3 z-20 h-[67dvh] w-full max-w-[var(--max-width)] bg-[#e0e0e0]"
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      exit={{ y: 150 }}
      // layout
      // layoutId="test"
    >
      <a href="/test">Page 1</a>
    </motion.div>
  );
}

export default CityPage;
