"use client";
import { signInWithGoogle } from "@/serverActions/users"; // Import the function

const SignInButton = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithGoogle(); // Use the exported function
      console.log("Sign-in successful:", result);
      if (result.url) {
        if (typeof window !== "undefined") {
          window.location.href = result.url; // Redirect to the URL if available
        }
      }
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
