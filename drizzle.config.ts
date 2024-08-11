import type { Config } from 'drizzle-kit';

export default {
  schema: './database/schema.ts',
  out: './database/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
  },
  verbose: true,
  strict: true,
} satisfies Config;