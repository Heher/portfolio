import type { RouteConfig } from '@react-router/dev/routes';

import { index, layout, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/index.tsx'),
  ...prefix('ui', [
    layout('routes/ui/layout.tsx', [
      route('tables', 'routes/ui/tables.tsx'),
      route('onboarding', 'routes/ui/onboarding.tsx'),
      route('product-page', 'routes/ui/product-page.tsx'),
      route('email-template', 'routes/ui/email-template.tsx'),
      route('tv-guide', 'routes/ui/tv-guide.tsx'),
      route('dashboard', 'routes/ui/dashboard.tsx'),
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
