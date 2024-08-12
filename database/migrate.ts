import { sql } from '@vercel/postgres'
import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { neonConfig } from '@neondatabase/serverless'

async function runMigrations() {
    console.log('Migration started');

    if (!process.env.VERCEL_ENV) {
        neonConfig.useSecureWebSocket = false
        neonConfig.pipelineTLS = false
        neonConfig.pipelineConnect = false
    
        neonConfig.wsProxy = (host) => `${host}:54321/pooler/v2/`;
    }
    
    const db = drizzle(sql)

    await migrate(db, { migrationsFolder: './database/migrations' });

    console.log('Migration completed');

    process.exit(0);
}

runMigrations().catch((error) => {
    console.error('Migration failed');
    console.log(error);
    process.exit(1);
});