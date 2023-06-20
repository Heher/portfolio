import type { MetaFunction } from '@remix-run/node';
import { motion } from 'framer-motion';
import { Suspense, useState } from 'react';
import useMeasure from 'react-use-measure';
import ErrorBoundarySimple from '~/components/ErrorBoundary';
import { DonutContainer } from '~/components/donut/DonutContainer';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Donut | John Heher',
  description: "John Heher's donut",
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  'og:title': 'Donut | John Heher',
  'og:image': '/olympic-cities-og.jpg'
});

function DonutFallback() {
  return <div>Loading...</div>;
}

export default function DonutIndex() {
  const [pageContainerRef, { width }] = useMeasure({ debounce: 300 });

  const [color, setColor] = useState<number | null>(null);

  function handleColorChange(newColor: number) {
    setColor(newColor);
  }

  return (
    <main ref={pageContainerRef} className={`relative h-[100dvh] w-full bg-[var(--nav-background)]`}>
      <div className="body-container mx-auto h-[100dvh] max-w-[var(--max-width)]">
        {width && (
          <motion.div
            className={`donut-container fixed z-30 h-[100vh] w-full md:max-h-[800px] lg:max-h-[1000px] lg:max-w-[var(--max-width)]`}
          >
            <ErrorBoundarySimple>
              <Suspense fallback={<DonutFallback />}>
                <h1>Donut</h1>
                <input type="color" />
                <button type="button" onClick={() => handleColorChange(0x0000ff)}>
                  Change Color
                </button>
                <DonutContainer color={color} />
              </Suspense>
            </ErrorBoundarySimple>
          </motion.div>
        )}
      </div>
    </main>
  );
}
