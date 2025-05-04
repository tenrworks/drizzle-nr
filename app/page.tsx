import { signIn, signUp } from "@/server/users";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Signout from "./components/signout";
import SignInButton from "./components/googleSignIn";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-4">
      <button
        className="bg-amber-500  w-1/2 h-10 md:h-20 hover:bg-amber-400"
        onClick={signIn}
      >
        Sign In
      </button>
      <button
        className="bg-amber-800 w-1/2 h-10 md:h-20 hover:bg-amber-700"
        onClick={signUp}
      >
        Sign Up
      </button>
      <Signout />
      <SignInButton />
      <p className="text-sm text-center">
        {session?.user ? `Welcome ${session.user.name} ` : "Not signed in"}
      </p>
    </main>
  );
}
