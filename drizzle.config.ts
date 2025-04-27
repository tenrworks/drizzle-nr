//drizzle.config.ts
import { defineConfig } from "drizzle-kit";
import "dotenv/config";
import { config } from "dotenv";
config({ path: "./path/to/.env" });

export default defineConfig({
  schema: "./src/db/schema.ts", // Path to your schema file
  out: "./drizzle", // Output directory for migrations
  dialect: "postgresql", // Database dialect
  dbCredentials: {
    url: process.env.DATABASE_URL! as string, // Database connection URL
  },
});
