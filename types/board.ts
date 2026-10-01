import z from 'zod';

const ZMessageMode = z.enum(['text', 'freestyle']);
export type MessageMode = z.infer<typeof ZMessageMode>;

const ZAlign = z.enum(['left', 'center', 'right']);
export type Align = z.infer<typeof ZAlign>;

export const ZSubmittedMessageData = z.object({
  mode: ZMessageMode,
  pixels: z.string(),
  text: z.string(),
  textColor: z.string(),
  align: ZAlign,
});
export type MessageData = z.infer<typeof ZSubmittedMessageData>;
