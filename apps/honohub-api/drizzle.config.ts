import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./db/schema.ts",
	out: "./db/migrations",
	dialect: "sqlite",
	dbCredentials: {
		url: "sqlite.db",
		// host: process.env.DB_HOST,
		// user: process.env.DB_USER,
		// password: process.env.DB_PASSWORD,
		// database: process.env.DB_NAME,
	},
});
