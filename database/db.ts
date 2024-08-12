import { neonConfig } from '@neondatabase/serverless'
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres"
import * as schema from "./schema"

// Connect to Vercel Postgres
if (!process.env.VERCEL_ENV) {

    neonConfig.useSecureWebSocket = false
    neonConfig.pipelineTLS = false
    neonConfig.pipelineConnect = false

    neonConfig.wsProxy = (host) => `${host}:54321/pooler/v2/`;
}

export const db = drizzle(sql, { schema, logger: true })