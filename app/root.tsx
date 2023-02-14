import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from '@remix-run/react';

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
  const { pathname } = useLocation();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {/* {typeof document === 'undefined' ? '__STYLES__' : null} */}
      </head>
      <body className={pathname === '/trip' ? 'bg-[var(--nav-background)]' : ''}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
