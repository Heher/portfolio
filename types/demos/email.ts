import z from 'zod';

export const ZEmailFormData = z.object({
  email: z.email(),
});
export type EmailFormData = z.infer<typeof ZEmailFormData>;
