import { json, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useLocation } from '@remix-run/react';
// import { withSentry } from '@sentry/remix';
import { useEffect } from 'react';

import globalStyles from '~/styles/global.css?url';

import stylesheet from '~/tailwind.css?url';
import * as gtag from '~/utils/gtags.client';

export function links() {
  return [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'stylesheet', href: stylesheet },
    { href: 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&display=swap', rel: 'stylesheet' }
  ];
}

export const loader = async () => {
  return json({ gaTrackingId: process.env.GA_TRACKING_ID });
};

function App() {
  const appLocation = useLocation();
  // const outlet = useOutlet();
  const { gaTrackingId } = useLoaderData<typeof loader>();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(appLocation.pathname, gaTrackingId);
    }
  }, [appLocation, gaTrackingId]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[var(--body-background)]">
        {process.env.NODE_ENV === 'development' || !gaTrackingId ? null : (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}');
              `
              }}
            />
          </>
        )}
        {/* <body> */}
        {/* <AnimatePresence mode="wait">{outlet}</AnimatePresence> */}
        <Outlet />
        <ScrollRestoration
          getKey={(location, matches) => {
            return location.pathname;
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

export default App;
