import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from '@remix-run/react';
import { withSentry } from '@sentry/remix';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

import globalStyles from '~/styles/global.css';

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

function App() {
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {/* {typeof document === 'undefined' ? '__STYLES__' : null} */}
      </head>
      <body className={location.pathname === '/trip' ? 'bg-[var(--nav-background)]' : 'bg-white'}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default withSentry(App);
