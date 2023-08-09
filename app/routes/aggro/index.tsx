import type { MetaFunction } from '@remix-run/node';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import useMeasure from 'react-use-measure';
import ErrorBoundarySimple from '~/components/ErrorBoundary';
import { AggroCragContainer } from '~/components/aggro/AggroCragContainer';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Aggro Crag Trophy | John Heher',
  description: "John Heher's Aggro Crag Trophy: A piece of our radical rock",
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  'og:title': 'Aggro Crag Trophy | John Heher',
  'og:image': '/aggro-og.jpg'
});

function AggroFallback() {
  return <div>Loading...</div>;
}

export default function DonutIndex() {
  const [pageContainerRef, { width }] = useMeasure({ debounce: 300 });

  return (
    <main ref={pageContainerRef} className={`relative h-[100dvh] w-full bg-[var(--nav-background)]`}>
      <div className="body-container mx-auto h-[100dvh] max-w-[600px]">
        {width && (
          <motion.div className={`aggro-container z-30 h-[600px] w-full px-[20px] pt-[50px]`}>
            <div className="relative flex h-full flex-col rounded-lg">
              <div className="h-[70%] w-full rounded-t-lg bg-slate-400">
                <ErrorBoundarySimple>
                  <Suspense fallback={<AggroFallback />}>
                    <AggroCragContainer />
                  </Suspense>
                </ErrorBoundarySimple>
              </div>
              <div className="rounded-b-lg bg-slate-100 py-[40px] pl-[40px] text-gray-900 md:pl-[50px]">
                <h1 className="text-4xl md:text-6xl">Aggro Crag</h1>
                <p className="mt-[10px] text-lg text-gray-700 md:mt-[20px] md:text-3xl">
                  A piece of the{' '}
                  <span className="ml-[3px] font-['Anarchaos'] text-4xl text-[color:#8B0000] md:text-5xl">radical</span>{' '}
                  rock.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}