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
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'stylesheet', href: stylesheet },
    { href: 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&display=swap', rel: 'stylesheet' }
  ];
}

// export function ErrorBoundary({ error }) {
//   return (
//     <html>
//       <head>
//         <title>Oh no!</title>
//         <Meta />
//         <Links />
//       </head>
//       <body className="m-4">
//         <h1 className="text-2xl">Something went wrong!</h1>
//         <p>{error.message}</p>
//         <Scripts />
//       </body>
//     </html>
//   );
// }

// export function CatchBoundary() {
//   const caught = useCatch();

//   console.log(caught);

//   return (
//     <div>
//       <h1>Caught</h1>
//       <p>Status: {caught.status}</p>
//       <pre>
//         <code>{JSON.stringify(caught.data, null, 2)}</code>
//       </pre>
//     </div>
//   );
// }

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
