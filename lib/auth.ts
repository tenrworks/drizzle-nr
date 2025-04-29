//this is the file that will be used to connect to the database and run queries
//this is where better-auth connects to the database
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; // your drizzle instance
import { schema } from "@/db/schema";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema, // your drizzle schema,
  }),
});
