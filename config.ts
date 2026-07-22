/* eslint-disable node/no-process-env */
export default {
  PARTYKIT_ADMIN: process.env.PARTYKIT_ADMIN,
  DATABASE_URL: process.env.DATABASE_URL,
  SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
  AWS_REGION: process.env.AWS_REGION,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
  VALKEY_URL: process.env.VALKEY_URL,
  VITE_DEPLOY_ENV: process.env.VITE_DEPLOY_ENV,
  SESSION_SECRET: process.env.SESSION_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  RESCORE_URL: process.env.RESCORE_URL,
  RESCORE_KEY: process.env.RESCORE_KEY,
};
