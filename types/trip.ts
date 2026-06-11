import type { Visit } from 'types/globe';

import type { SelectedCity } from './city';

export type TripPageState = {
  selectedImage: string | null;
  moveableGlobe: boolean;
  selectedCity: string | null;
  selectedCityData: SelectedCity | null;
  selectedRouteLeg: number | null;
  loaded: boolean;
};

export type ContextType = TripPageState & {
  width: number;
  visits: Visit[];
};
