import { z } from 'zod';

const ZPlans = z.enum(['basic', 'premium', 'bundle']);
export type Plans = z.infer<typeof ZPlans>;

export const ZOnboardingFormData = z.object({
  email: z.email(),
  // plan: ZPlans,
});
export type OnboardingFormData = z.infer<typeof ZOnboardingFormData>;
