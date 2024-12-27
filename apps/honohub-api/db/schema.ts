import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email"),
});

export const workspaces = sqliteTable("workspaces", {
  id: integer("id").primaryKey(),
  name: text("name"),
  createdAt: date("created_at"), // Added createdAt column
  // Add other relevant columns here as needed
});
