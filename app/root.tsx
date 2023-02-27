import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from '@remix-run/react';
import { withSentry } from '@sentry/remix';

import globalStyles from '~/styles/global.css';

import stylesheet from '~/tailwind.css';

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
  const appLocation = useLocation();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={appLocation.pathname.includes('trip') ? 'bg-[var(--nav-background)]' : 'bg-white'}>
        <Outlet />
        <ScrollRestoration
          getKey={(location, matches) => {
            return location.pathname;
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default withSentry(App);
