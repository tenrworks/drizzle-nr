import { signIn, signUp } from "@/server/users";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-4">
      <button className="bg-amber-500  w-1/2 h-10 md:h-20" onClick={signIn}>
        Sign In
      </button>
      <button className="bg-amber-800 w-1/2 h-10 md:h-20" onClick={signUp}>
        Sign Up
      </button>
    </main>
  );
}
