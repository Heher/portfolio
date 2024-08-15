import { NeonHttpDatabase } from 'drizzle-orm/neon-http';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '@drizzle/schema';

export type GDDB = NodePgDatabase<typeof schema> | NeonHttpDatabase<typeof schema>;

export type DBOptions = {
  cloudflare?: string;
};
