export type SelectedCity = {
  name: string | null;
  slug: string | null;
  olympiads: {
    id: string;
    year: number;
    olympiadType: 'summer' | 'winter' | null;
  }[];
};
