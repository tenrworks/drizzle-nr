"use server";
import { auth } from "@/lib/auth";

export const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: "grodriguez1224@gmai.com",
      password: "password",
    },
  });
}; // path to your auth file

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "grodriguez1224@gmai.com",
      password: "password",
      name: "G Rodriguez",
    },
  });
}; // path to your auth file

// // Google sign-in function
export const signInWithGoogle = async () => {
  try {
    const result = await auth.api.signInSocial({
      body: {
        provider: "google",
      },
    });
    console.log("Google sign-in successful:", result);
    // return result;
    // if (result.url) {
    //   if (typeof window !== "undefined") {
    //     window.location.href = result.url;
    //   }
    // }
    return result;
  } catch (error) {
    console.error("Google sign-in failed:", error);
    throw error; // Re-throw the error for the caller to handle
  }
};
