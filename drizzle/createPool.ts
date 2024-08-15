import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from '@drizzle/schema';
import { GDDB } from 'types/db';

const { Pool } = pg;

export function createPoolConnection() {
  try {
    let db: GDDB | null = null;

    const pool = new Pool({
      connectionString: process.env.DATABASE_URL
    });

    db = drizzle(pool, { schema });

    return db;
  } catch (e) {
    return null;
  }
}
