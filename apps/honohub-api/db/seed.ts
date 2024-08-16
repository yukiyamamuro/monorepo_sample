import { db } from "./db";
import * as schema from "./schema";

await db.insert(schema.users).values([
	{
		id: 1,
		firstName: "Tanaka",
		lastName: "Taro",
		email: "xxxx@xxx.xx",
	},
	{
		id: 2,
		firstName: "Yamada",
		lastName: "Ichiro",
		email: "xxxx@xxx.xx",
	},
	{
		id: 3,
		firstName: "Kato",
		lastName: "Jiro",
		email: "xxxx@xxx.xx",
	},
]);

console.log("Seeding complete.");
