import * as dotenv from "dotenv";
dotenv.config();

import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { UserSchema } from "./db/schema"; // Updated import to use `UserSchema`

// Infer the type for inserting into the `UserSchema` table
type UserInsert = typeof UserSchema.$inferInsert; // For inserts
type UserSelect = typeof UserSchema.$inferSelect; // For selects

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: UserInsert = {
    firstName: "G",
    lastName: "Rodriguez",
    userName: "G",
    email: "G@example.com",
    role: "user",
    birthday: "11/12/1992",
    // Optional, but you can set it explicitly
    // Other optional fields can be omitted or included as needed
  };

  await db.insert(UserSchema).values(user); // Updated to use `UserSchema`
  console.log("New user created!");

  const allUsers: UserSelect[] = await db.select().from(UserSchema); // Updated to use `UserSchema`
  console.log("Getting all users from the database: ", allUsers);

  await db
    .update(UserSchema) // Updated to use `UserSchema`
    .set({
      role: "admin",
    })
    .where(eq(UserSchema.email, user.email)); // Updated to use `UserSchema`
  console.log("User role updated!");
}

main();
