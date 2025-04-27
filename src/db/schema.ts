// drizzle/schema.ts
// Import Drizzle column types and table builder
import { pgTable, text, uuid, date } from "drizzle-orm/pg-core";

// Define the `UserSchema` table structure
export const UserSchema = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(), // Unique user ID, generated as UUID
  firstName: text("first_name").notNull(), // User's display name
  lastName: text("last_name").notNull(), // User's display name
  userName: text("username").notNull(), // User's display name
  email: text("email").notNull(), // User's email (required)
  image: text("image"), // Profile picture URL
  sizing: text("sizing"), // Optional: S, M, L, etc.
  gender: text("gender"), // Optional: male, female, other
  role: text("role").default("user"), // user or admin (defaults to 'user')

  // New onboarding fields
  hometown: text("hometown"), // City or neighborhood
  birthday: date("birthday").notNull(), // Date of birth
  sportsPlayed: text("sports_played"), // CSV string or later a join table
  sportsWish: text("sports_wish"), // Same as above
  recessFavorite: text("recess_favorite"), // Kickball, dodgeball, etc.
});
