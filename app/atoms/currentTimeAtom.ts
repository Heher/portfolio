import { atom } from 'jotai';

export const currentTimeState = atom<{ time: string | null; left: number }>({
  time: null,
  left: 0,
});
