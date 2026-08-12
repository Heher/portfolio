import { atom } from 'jotai';

export const currentTimeState = atom({
  time: '00:00:00',
  left: 0,
});
