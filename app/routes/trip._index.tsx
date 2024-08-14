import { useLoaderData } from '@remix-run/react';

import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import MainCopy from '~/components/home/MainCopy';
import { CitiesList } from '~/components/CitiesList';
import { useTripContext } from './trip';
import type { AnimationVariants } from 'types/globe';
import { Fragment, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const meta: MetaFunction = () => {
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

function ExpandIcon({ className, delay }: { className?: string; delay: number }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 100"
      className={className}
      initial={{ y: '-30%' }}
      animate={{ y: '30%' }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'easeOut',
        repeatType: 'reverse',
        delay
      }}
    >
      <g>
        <polygon points="0,69 150,0 300,69 300,100 150,40 0,100" />
      </g>
    </motion.svg>
  );
}

export async function loader() {
  // const stravaResponse = await getStravaActivities();

  // const sdk = getGQLClient();
  // const response = await sdk.GetOlympicData({
  //   now: new Date().toISOString()
  // });

  const response = null;

  if (!response?.data?.olympiads || !response.data?.cities) {
    return json({ olympiads: [], cities: [] });
  }

  return json({ olympiads: response.data.olympiads.nodes, cities: response.data.cities.nodes });
}

const animationVariants: AnimationVariants = {
  hidden: { opacity: 0, x: '-150px', transition: { duration: 0.3 } },
  visible: { opacity: 1, x: '0px', transition: { duration: 0.3 } }
};

function observerCallback(entries: IntersectionObserverEntry[], setCitiesSeen: (seen: boolean) => void) {
  entries.forEach((entry) => {
    setCitiesSeen(entry.isIntersecting);
  });
}

function TripIndexInner({
  olympiads,
  cities,
  width
}: {
  olympiads: OlympiadFieldsFragment[];
  cities: CityFieldsFragment[];
  width: number;
}) {
  const [citiesSeen, setCitiesSeen] = useState(false);
  const firstRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        observerCallback(entries, setCitiesSeen);
      },
      {
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    const observedRef = firstRef.current;

    if (observedRef) {
      observer.observe(observedRef);
    }

    return () => {
      if (observedRef) {
        observer.unobserve(observedRef);
      }
    };
  }, []);

  if (!olympiads || !cities) {
    return null;
  }

  return (
    <Fragment key="trip-index-inner">
      <MainCopy olympiads={olympiads as any[]} variants={animationVariants} />
      <div className="mt-10 h-4">
        <AnimatePresence>
          {width < 768 && !citiesSeen && (
            <motion.div
              className="flex w-full rotate-180 flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[0, 1].map((_, i) => (
                <ExpandIcon key={i} className="h-2 fill-[#e0e0e0]" delay={i * 0.2} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <CitiesList cities={cities} firstRef={firstRef} />
    </Fragment>
  );
}

export default function TripIndex() {
  const loaderData = useLoaderData<typeof loader>() || {};

  const tripContext = useTripContext();

  const { width, appState, dispatch } = tripContext;

  const { loaded } = appState;

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--body-background', 'var(--globe-background)');
  }, [width]);

  useEffect(() => {
    if (!loaded) {
      dispatch({ type: 'LOADED', loaded: true });
    }
  }, [loaded, dispatch]);

  if (!loaderData.olympiads || !loaderData.cities) {
    return null;
  }

  return (
    <div className="relative z-10">
      <TripIndexInner
        olympiads={loaderData.olympiads as OlympiadFieldsFragment[]}
        cities={loaderData.cities as CityFieldsFragment[]}
        width={width}
      />
    </div>
  );
}
