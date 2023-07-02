import type { LoaderArgs } from '@remix-run/node';

import donutAR from '~/data/donut/donut.usdz';

export async function loader({ params }: LoaderArgs) {
  return new Response(donutAR, {
    status: 200,
    headers: {
      'Content-Type': 'model/usd'
    }
  });
}
