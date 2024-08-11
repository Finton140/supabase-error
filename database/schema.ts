import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const User = pgTable('user', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name').notNull(),
})