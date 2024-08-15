import { DBOptions, GDDB } from 'types/db';
// import { createCFConnection } from './createCF';
import { createPoolConnection } from './createPool';

// function createDBConnection(options?: DBOptions) {
//   try {
//     let db: GDDB | null = null;

//     if (options?.cloudflare) {
//       db = createCFConnection(options.cloudflare);
//     } else {
//       db = createPoolConnection();
//     }

//     return db;
//   } catch (e) {
//     return null;
//   }
// }

let db: GDDB | null = null;

export function getDB(options?: DBOptions): GDDB | null {
  if (!db) {
    const newDB = createPoolConnection();

    db = newDB;
  }

  return db;
}
