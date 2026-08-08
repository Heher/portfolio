import type { ClassValue } from 'clsx';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUIHeadingTransitionName(path: string) {
  const slug = path
    .replace(/^\/+|\/+$/g, '')
    .replace(/[^a-z0-9]+/gi, '-');

  return `ui-heading-${slug}`;
}

export function getUIBodyTransitionName(path: string) {
  const slug = path
    .replace(/^\/+|\/+$/g, '')
    .replace(/[^a-z0-9]+/gi, '-');

  return `ui-body-${slug}`;
}
