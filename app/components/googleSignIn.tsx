"use client";
import { authClient } from "@/lib/auth-client";

const SignInButton = () => {
  const handleSignIn = async () => {
    try {
      const result = await authClient.signIn.social({
        provider: "google",
      });
      console.log("Sign-in successful:", result); // Moved outside the API call
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <button className="bg-green-500 p-5 text-black" onClick={handleSignIn}>
      Sign in with Google
    </button>
  );
};

export default SignInButton;
