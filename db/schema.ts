// drizzle/schema.ts
// Import Drizzle column types and table builder
import {
  pgTable,
  text,
  uuid,
  date,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

// Define the `users` table structure
export const UserSchema = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(), // Unique user ID, generated as UUID
  name: text("name").notNull(), // User's chosen display name
  email: text("email").notNull().unique(), // User's email address for communication and login
  emailVerified: boolean("email_verified").default(false).notNull(), // Whether the user's email is verified
  image: text("image"), // Profile picture URL (optional)
  createdAt: timestamp("created_at").defaultNow().notNull(), // Timestamp of when the user account was created
  updatedAt: timestamp("updated_at").defaultNow().notNull(), // Timestamp of the last update to the user's information

  // Additional fields
  firstName: text("first_name").notNull(), // User's first name
  lastName: text("last_name").notNull(), // User's last name
  userName: text("username").notNull(), // User's username
  sizing: text("sizing"), // Optional: S, M, L, etc.
  gender: text("gender"), // Optional: male, female, other
  role: text("role").default("user"), // User or admin (defaults to 'user')
  hometown: text("hometown"), // City or neighborhood
  birthday: date("birthday").notNull(), // Date of birth
  sportsPlayed: text("sports_played"), // CSV string or later a join table
  sportsWish: text("sports_wish"), // Same as above
  recessFavorite: text("recess_favorite"), // Kickball, dodgeball, etc.
});

// Define the `sessions` table structure
export const SessionSchema = pgTable("sessions", {
  id: uuid("id").defaultRandom().primaryKey(), // Unique session ID
  userId: uuid("user_id")
    .notNull()
    .references(() => UserSchema.id, { onDelete: "cascade" }), // Foreign key to users
  token: text("token").notNull().unique(), // Unique session token
  expiresAt: timestamp("expires_at").notNull(), // Time when the session expires
  ipAddress: text("ip_address"), // Optional: IP address of the device
  userAgent: text("user_agent"), // Optional: User agent information of the device
  createdAt: timestamp("created_at").defaultNow().notNull(), // Timestamp of when the session was created
  updatedAt: timestamp("updated_at").defaultNow().notNull(), // Timestamp of when the session was updated
});

// Define the `accounts` table structure
export const AccountSchema = pgTable("accounts", {
  id: uuid("id").defaultRandom().primaryKey(), // Unique account ID
  userId: uuid("user_id")
    .notNull()
    .references(() => UserSchema.id, { onDelete: "cascade" }), // Foreign key to users
  accountId: text("account_id").notNull(), // ID of the account as provided by the SSO or equal to userId for credential accounts
  providerId: text("provider_id").notNull(), // ID of the provider
  accessToken: text("access_token"), // Optional: Access token of the account
  refreshToken: text("refresh_token"), // Optional: Refresh token of the account
  accessTokenExpiresAt: timestamp("access_token_expires_at"), // Optional: Time when the access token expires
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"), // Optional: Time when the refresh token expires
  scope: text("scope"), // Optional: Scope of the account
  idToken: text("id_token"), // Optional: ID token returned from the provider
  password: text("password"), // Optional: Password for email/password authentication
  createdAt: timestamp("created_at").defaultNow().notNull(), // Timestamp of when the account was created
  updatedAt: timestamp("updated_at").defaultNow().notNull(), // Timestamp of when the account was updated
});

// Define the `verifications` table structure
export const VerificationSchema = pgTable("verifications", {
  id: uuid("id").defaultRandom().primaryKey(), // Unique verification ID
  identifier: text("identifier").notNull(), // Identifier for the verification request
  value: text("value").notNull(), // Value to be verified
  expiresAt: timestamp("expires_at").notNull(), // Time when the verification request expires
  createdAt: timestamp("created_at").defaultNow().notNull(), // Timestamp of when the verification request was created
  updatedAt: timestamp("updated_at").defaultNow().notNull(), // Timestamp of when the verification request was updated
});
