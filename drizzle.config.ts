//drizzle.config.ts
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
  schema: "./db/schema.ts", // Path to your schema file
  out: "./migrations", // Output directory for migrations
  dialect: "postgresql", // Database dialect
  dbCredentials: {
    url: process.env.DATABASE_URL! as string, // Database connection URL
  },
});
