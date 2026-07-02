import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import heroImg from "@/assets/metaverse-hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [agreed, setAgreed] = useState(true);
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-background px-6 pb-8 pt-10">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="relative w-full max-w-sm">
          <img
            src={heroImg}
            alt="Project Z cosmic Z logo"
            width={768}
            height={1024}
            className="w-full rounded-3xl object-cover"
          />
        </div>
        <h1 className="mt-6 text-2xl font-semibold tracking-wide text-foreground">
          Meet Metaverse Friends!
        </h1>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <label className="flex items-start gap-3 text-sm text-foreground/90">
          <button
            type="button"
            onClick={() => setAgreed((v) => !v)}
            aria-pressed={agreed}
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-accent bg-accent/30"
          >
            {agreed && <Check className="h-4 w-4 text-accent-foreground" />}
          </button>
          <span>
            By continuing, you agree to Project Z's{" "}
            <a href="#" className="text-accent underline">Terms of Service</a> and{" "}
            <a href="#" className="text-accent underline">Privacy Policy</a>.
          </span>
        </label>

        <button
          type="button"
          className="w-full rounded-2xl border-2 border-primary bg-primary/10 py-4 text-xl font-medium text-primary shadow-[0_0_25px_-5px_var(--primary)] transition-colors hover:bg-primary/20"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="w-full rounded-2xl border-2 border-accent bg-accent/10 py-4 text-xl font-medium text-foreground shadow-[0_0_25px_-5px_var(--accent)] transition-colors hover:bg-accent/20"
        >
          Log In
        </button>

        <p className="pt-2 text-center text-xs text-muted-foreground">
          Version 2.13.0-23200
        </p>
      </div>
    </main>
  );
}
