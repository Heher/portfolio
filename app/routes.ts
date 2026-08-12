import type { RouteConfig } from '@react-router/dev/routes';

import { index, layout, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/index.tsx'),
  ...prefix('demos', [
    layout('routes/demos/layout.tsx', [
      route('tables', 'routes/demos/tables.tsx'),
      route('onboarding', 'routes/demos/onboarding.tsx'),
      route('product-page', 'routes/demos/product-page.tsx'),
      route('email-template', 'routes/demos/email-template.tsx'),
      route('tv-guide', 'routes/demos/tv-guide.tsx'),
      route('dashboard', 'routes/demos/dashboard.tsx'),
    ]),
  ]),
  // ...prefix('trip', [
  //   layout('routes/trip/layout.tsx', [
  //     // index('routes/trip/testGlobeIndex.tsx'),
  //     index('routes/trip/index.tsx'),
  //     route(':slug', 'routes/trip/$slug.tsx'),
  //     route('route/:num', 'routes/trip/route.$num.tsx'),
  //   ]),
  // ]),
  // route('aggro', 'routes/aggro.tsx'),
] satisfies RouteConfig;
