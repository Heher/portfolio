import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from '@remix-run/react';
import { AnimatePresence } from 'framer-motion';

import globalStyles from '~/styles/global.css';
import styles from '~/styles/tailwind.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Olympic cities',
  viewport: 'width=device-width,initial-scale=1'
});

export function links() {
  return [
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'stylesheet', href: styles }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {/* {typeof document === 'undefined' ? '__STYLES__' : null} */}
      </head>
      <body className="bg-[var(--nav-background)]">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
