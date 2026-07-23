import { motion } from 'motion/react';
import useMeasure from 'react-use-measure';

// Skip SSR for this route - uses motion/react which is client-only
export const ssr = false;

export default function USDZPage() {
  const [pageContainerRef, { width }] = useMeasure({ debounce: 300 });

  return (
    <main ref={pageContainerRef} className="relative h-dvh w-full bg-nav-background">
      <div className="mx-auto h-dvh max-w-[600px]">
        {width && (
          <motion.div className="z-30 h-[600px] w-full px-[20px] pt-[50px]">
            <h1>USDZ</h1>
            <a href="/toy_biplane_idle.usdz" rel="ar">
              <img src="/images/freestyle-skiing.jpg" alt="Freestyle skiing" />
            </a>
          </motion.div>
        )}
      </div>
    </main>
  );
}
