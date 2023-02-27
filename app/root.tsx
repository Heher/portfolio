import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from '@remix-run/react';
import { withSentry } from '@sentry/remix';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

import globalStyles from '~/styles/global.css';
import visitData from '~/data/visits.json';
// import styles from '~/styles/tailwind.css';

import stylesheet from '~/tailwind.css';
import SimpleGlobe from './components/globe/SimpleGlobe';
import { ImageModal } from './components/modal/ImageModal';
import BackButton from './components/home/BackButton';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
});

export function links() {
  return [
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'stylesheet', href: stylesheet }
  ];
}

function GlobeFallback() {
  return <div>Loading...</div>;
}

function getGlobeContainerMaxes(citySelected, moveableGlobe) {
  // if (citySelected && !moveableGlobe) {
  //   return 'clip-container md:max-h-[500px] md:max-w-[500px]';
  // }
  return 'md:max-h-[800px] lg:max-h-[1000px] lg:max-w-[var(--max-width)]';
}

function getGlobeHeight(width, moveableMobile = false, citySelected = false) {
  // if (citySelected) {
  //   return '500px';
  // }

  if (width < 768) {
    if (moveableMobile) {
      return '100vh';
    }
    return '50vh';
  }

  // if (citySelected) {
  //   return '500px';
  // }

  return '100vh';
}

function getGlobeContainerTop(width, showDetails = false, citySelected = false) {
  if (width < 768) {
    if (!showDetails) {
      return 'auto';
    }

    return '0vh';
  }

  if (citySelected) {
    return '-20vh';
  }

  return '0vh';
}

function getMoveableGlobeContainerRight(width, moveableMobile = false) {
  if (moveableMobile) {
    return '0px';
  }

  if (width < 768 || width > 1100) {
    const difference = (width - 1100) / 2;
    return `${difference}px`;
  }

  return `0px`;
}

function getGlobeContainerBottom(width, showDetails = false) {
  if (width < 768 && !showDetails) {
    return '-20vh';
  }

  return 'auto';
}

function getGlobeContainerRight(width, citySelected = false) {
  // Mobile
  if (width < 768) {
    return '0px';
  }

  if (citySelected) {
    return '-200px';
  }

  // XL
  if (width > 2000) {
    const difference = (width - 1100) / 2;
    return `${difference - 500}px`;
  }

  if (width > 1100) {
    const difference = (width - 1100) / 2;
    return `${difference - 1100 * 0.35}px`;
  }

  if (width < 1000) {
    return `-${width * 0.5}px`;
  }

  return `-${width * 0.3}px`;
}

function toggleBodyBackground() {
  const body = document.body;

  body.classList.toggle('bg-[var(--globe-background)]');
  body.classList.toggle('bg-[var(--nav-background)]');
}

const variants = {
  moveable: (width: number) => ({
    width: '100%',
    height: getGlobeHeight(width),
    top: getGlobeContainerTop(width),
    right: getMoveableGlobeContainerRight(width),
    bottom: getGlobeContainerBottom(width)
  }),
  notMoveable: (width: number) => ({
    width: '100%',
    height: getGlobeHeight(width),
    top: getGlobeContainerTop(width),
    right: getGlobeContainerRight(width),
    bottom: getGlobeContainerBottom(width)
  }),
  showDetails: (width: number) => ({
    width: '100%',
    height: getGlobeHeight(width),
    top: getGlobeContainerTop(width, true),
    right: getGlobeContainerRight(width),
    bottom: getGlobeContainerBottom(width, true)
  }),
  moveableMobile: (width: number) => ({
    width: '100%',
    height: getGlobeHeight(width, true),
    top: getGlobeContainerTop(width, true),
    right: getMoveableGlobeContainerRight(width, true),
    bottom: getGlobeContainerBottom(width, true)
  }),
  citySelected: (width: number) => ({
    width: '100%',
    height: getGlobeHeight(width, false, true),
    top: getGlobeContainerTop(width, false, true),
    right: getGlobeContainerRight(width, true),
    bottom: getGlobeContainerBottom(width)
  })
};

function getGlobeVariant(routeSelected: boolean, moveableGlobe: boolean, showDetails: boolean, citySelected) {
  if (citySelected && !moveableGlobe) {
    return 'citySelected';
  }

  if (showDetails) {
    // Mobile
    if (moveableGlobe) {
      return 'moveableMobile';
    }
    return 'showDetails';
  }

  if (routeSelected || moveableGlobe) {
    return 'moveable';
  }

  return 'notMoveable';
}

function App() {
  const location = useLocation();

  // console.log(location);

  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [stopScroll, setStopScroll] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [moveableGlobe, setMoveableGlobe] = useState(false);
  const [routeSelected, setRouteSelected] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [pageContainerRef, { width, height }] = useMeasure({ debounce: 300 });

  function handleImageModal(img: string | null) {
    const body = document.body;

    body.classList.toggle('bg-slate-200');
    setSelectedImg(img);
  }

  function handleBackButton() {
    if (moveableGlobe) {
      setMoveableGlobe(false);
    } else {
      if (routeSelected) {
        setRouteSelected(false);
      }

      if (selectedCity) {
        setSelectedCity(null);
      }

      if (!selectedCity && !routeSelected && showDetails) {
        setShowDetails(false);
        toggleBodyBackground();
      }
    }

    setStopScroll(false);
  }

  // console.log(pathname);
  useEffect(() => {
    if (location?.pathname === '/' || location?.pathname === '/trip') {
      setSelectedCity(null);
    }
  }, [location.pathname]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {/* {typeof document === 'undefined' ? '__STYLES__' : null} */}
      </head>
      <body className={location.pathname === '/trip' ? 'bg-[var(--nav-background)]' : 'bg-white'}>
        <main
          ref={pageContainerRef}
          className={`relative h-[100dvh] w-full bg-[var(--nav-background)] ${stopScroll ? 'overflow-hidden' : ''}`}
        >
          <div className="body-container mx-auto h-[100dvh] max-w-[var(--max-width)]">
            {(routeSelected || selectedCity || showDetails || moveableGlobe) && (
              <>
                <div
                  className={`globe-background fixed top-0 left-0 w-full ${width < 768 && 'mobile'} ${
                    routeSelected || moveableGlobe ? 'route-selected z-40 h-[50px]' : 'z-10 h-[50vh]'
                  }`}
                ></div>
                <BackButton
                  routeSelected={routeSelected}
                  globeMoveable={moveableGlobe}
                  handleBackButton={handleBackButton}
                />
              </>
            )}
            {width && (
              <motion.div
                className={`globe-container fixed z-30 ${getGlobeContainerMaxes(selectedCity, moveableGlobe)} ${
                  selectedCity && !moveableGlobe && 'clip-container'
                } @container`}
                custom={width}
                variants={variants}
                animate={getGlobeVariant(routeSelected, moveableGlobe, showDetails, selectedCity)}
                transition={{ type: 'tween', ease: 'anticipate', duration: 0.6 }}
                initial={false}
              >
                <Suspense fallback={<GlobeFallback />}>
                  <SimpleGlobe
                    visits={visitData.olympiads}
                    selectedCity={selectedCity}
                    routeSelected={routeSelected}
                    showDetails={width >= 768 ? true : showDetails}
                    width={width}
                    moveable={moveableGlobe}
                    setMoveable={() => setMoveableGlobe(true)}
                  />
                </Suspense>
              </motion.div>
            )}
            <AnimatePresence>
              <Outlet
                context={{
                  handleImageModal,
                  setStopScroll,
                  width,
                  selectedCity,
                  setSelectedCity,
                  moveableGlobe,
                  setMoveableGlobe,
                  routeSelected,
                  setRouteSelected,
                  showDetails,
                  setShowDetails,
                  visits: visitData.olympiads
                }}
              />
            </AnimatePresence>
            {selectedImg && <ImageModal img={selectedImg} closeModal={() => handleImageModal(null)} />}
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default withSentry(App);
