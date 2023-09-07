import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation, useOutlet } from '@remix-run/react';
import { withSentry } from '@sentry/remix';
import { AnimatePresence, motion } from 'framer-motion';

import globalStyles from '~/styles/global.css';

import stylesheet from '~/tailwind.css';

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

// function getBodyBackground(location: string) {
//   if (location.includes('trip')) {
//     return 'bg-[var(--nav-background)]';
//   }

//   if (location === '/') {
//     return 'bg-[var(--index-background)]';
//   }

//   return 'bg-white';
// }

function App() {
  // const appLocation = useLocation();
  // const outlet = useOutlet();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[var(--body-background)]">
        {/* <AnimatePresence mode="wait">{outlet}</AnimatePresence> */}
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
