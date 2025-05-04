import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "http://localhost:3000",
});

export const signIn = async () => {
  try {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    return data;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};
