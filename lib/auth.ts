//this is the file that will be used to connect to the database and run queries
//this is where better-auth connects to the database
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; // your drizzle instance
import { schema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema, // your drizzle schema, which is importing from your drizzle schema file
  }),
  emailAndPassword: {
    enabled: true,
    socialProviders: {
      google: {
        prompt: "select_account", // optional
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      },
    },
  },

  plugins: [nextCookies()],
  // Optional: you can add a custom session cookie name
  // cookieName: "your-custom-cookie-name",
  // Optional: you can add a custom session cookie path
  // cookiePath: "/your-custom-path",
  // Optional: you can add a custom session cookie domain
  // cookieDomain: "your-custom-domain",
  // Optional: you can add a custom session cookie max age
  // cookieMaxAge: 60 * 60 * 24 * 7, // 1 week
  // Optional: you can add a custom session cookie secure flag
  // cookieSecure: process.env.NODE_ENV === "production",
  // Optional: you can add a custom session cookie httpOnly flag
  // cookieHttpOnly: true,
  // Optional: you can add a custom session cookie sameSite flag
  // cookieSameSite: "lax",
  // Optional: you can add a custom session cookie path
});

console.log("Auth config:", auth);
