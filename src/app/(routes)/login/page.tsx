"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/about");
    }
  }, [session, router]);

  return (
    <div>
      <button onClick={() => signIn("google")}>Login</button>
    </div>
  );
}
