import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env" });
console.log("Current working directory:", process.cwd());
console.log(process.env.DATABASE_URL);
export const db = drizzle(process.env.DATABASE_URL!);
