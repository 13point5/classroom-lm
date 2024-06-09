import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="text-5xl font-bold tracking-tight text-[#131316] relative">
        ClassroomLM
      </h1>

      <p className="text-[#5E5F6E] pt-3 pb-6 max-w-[30rem] text-[1.0625rem] text-center relative">
        AI powered tools for students and teachers that{" "}
        <i className="text-black">&quot;talk&quot;</i> to each other for a
        personalised experience.
      </p>
      <div className="relative flex gap-3">
        <SignedIn>
          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
          >
            Dashboard
          </Link>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </main>
  );
}
