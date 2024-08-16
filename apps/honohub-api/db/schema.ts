import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
	id: integer("id").primaryKey(),
	firstName: text("first_name"),
	lastName: text("last_name"),
	email: text("email"),
});
