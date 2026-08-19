export type SelectedSkill = {
  using: boolean;
  new: boolean;
};

export type CompanyData = Record<string, { using: boolean; new: boolean }>;

export type CompanyInfo = {
  name: string;
  slug: string;
  location: string;
  title: string;
};
