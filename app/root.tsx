import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from '@remix-run/react';
import { AnimatePresence } from 'framer-motion';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Olympic cities',
  viewport: 'width=device-width,initial-scale=1'
});

export default function App() {
  // const location = useLocation();

  // console.log(location);
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
