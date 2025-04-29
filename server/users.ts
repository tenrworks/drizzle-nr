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
