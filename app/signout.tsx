"use client";

import { authClient } from "@/lib/auth-client";

export default function Signout() {
  return (
    <button
      className="bg-neutral-700 text-white p-2 "
      onClick={() => authClient.signOut()}
    >
      Signout
    </button>
  );
}
