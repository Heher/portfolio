import { drizzle as pgDrizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';

import { relations } from '@drizzle/relations';
import config from 'config';

const { Pool } = pg;

// Create a singleton pool that can be reused
let pool: pg.Pool | undefined;

function getPool() {
  if (!pool) {
    const connectionString = config.DATABASE_URL;

    console.log(connectionString);

    if (!connectionString) {
      throw new Error('DATABASE_URL is not defined');
    }

    pool = new Pool({ connectionString });
  }

  return pool;
}

export async function closePool() {
  if (pool) {
    await pool.end();

    pool = undefined;
  }
}

export function createPoolConnection() {
  return pgDrizzle({ client: getPool(), relations });
}
