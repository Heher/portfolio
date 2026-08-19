import { motion } from 'motion/react';

import type { SelectedSkill } from '@/types/skills';

import { cn } from '@/lib/utils';

export default function Skill({ text, selected }: { text: string; selected: SelectedSkill | undefined }) {
  return (
    <motion.span
      className={cn(`block rounded-full border px-2 py-1 text-sm font-semibold`, selected
        ? 'border-name bg-white text-name'
        : `border-name/40 bg-transparent text-name/40`, selected?.using && `border-[oklch(0.4_0.1173_45.81)] bg-subtitle/30 text-[oklch(0.4_0.1173_45.81)]`)}
      initial={{ scale: 1 }}
      animate={{ scale: selected ? [1, 1.08, 1] : 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {text}
    </motion.span>
  );
}
