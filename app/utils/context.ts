import { createContext } from 'react';

import type { ContextType } from 'types/trip';

export const TripPageContext = createContext<ContextType>({} as ContextType);
