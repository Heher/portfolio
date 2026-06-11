import { useOutletContext } from 'react-router';

import type { OutletContextType } from '~/routes/trip/trip';

export function useTripContext() {
  return useOutletContext<OutletContextType>();
}
