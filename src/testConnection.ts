import { db } from "@/db/drizzle"; // Import your Drizzle instance
import { user } from "@/db/schema"; // Import the user table schema

async function testConnection() {
  try {
    // Test a simple query to fetch all users
    const users = await db.select().from(user);
    console.log("Users in the database:", users);
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

// Run the test
testConnection();
