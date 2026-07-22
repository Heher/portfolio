import type { createPoolConnection } from '@drizzle/createPool';

export type GDDB = ReturnType<typeof createPoolConnection>;

export type DBOptions = {
  cloudflare?: string;
};
