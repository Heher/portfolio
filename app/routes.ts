import type { RouteConfig } from '@react-router/dev/routes';

import { index, layout, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/index.tsx'),
  ...prefix('trip', [
    layout('routes/trip/layout.tsx', [
      index('routes/trip/index.tsx'),
      route(':slug', 'routes/trip/$slug.tsx'),
      route('route/:num', 'routes/trip/route.$num.tsx'),
    ]),
  ]),
] satisfies RouteConfig;
