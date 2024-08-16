import { defineCollection, defineHub } from "honohub";

import * as schema from "./db/schema";
import { db } from "./db/db";

export default defineHub({
	db,
	collections: [
		defineCollection({
			slug: "users",
			schema: schema.users,
		}),
	],
});
