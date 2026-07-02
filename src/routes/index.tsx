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
    <main className="relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col overflow-hidden bg-background text-foreground">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-2 text-[13px] font-medium text-foreground/90">
        <span>16:07</span>
        <div className="flex items-center gap-1 text-[11px]">
          <span>▲</span>
          <span>✦</span>
          <span>M</span>
          <span className="ml-2">📶</span>
          <span>▱</span>
          <span>44%</span>
        </div>
      </div>

      {/* Hero image - full bleed */}
      <div className="relative flex-1">
        <img
          src={heroImg}
          alt="Project Z cosmic Z logo"
          width={768}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent pb-6 pt-16">
          <h1 className="text-center text-[26px] font-normal tracking-wide text-foreground/95">
            Meet Metaverse Friends!
          </h1>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="space-y-4 px-6 pb-6">
        <label className="flex items-start gap-3 text-[13px] leading-snug text-foreground/90">
          <button
            type="button"
            onClick={() => setAgreed((v) => !v)}
            aria-pressed={agreed}
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-[oklch(0.65_0.14_195)]"
          >
            {agreed && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
          </button>
          <span>
            By continuing, you agree to Project Z's{" "}
            <a href="#" className="text-[oklch(0.65_0.14_195)] underline">Terms of Service</a> and{" "}
            <a href="#" className="text-[oklch(0.65_0.14_195)] underline">Privacy Policy</a>.
          </span>
        </label>

        <button
          type="button"
          className="w-full rounded-full border-2 border-primary bg-[oklch(0.2_0.05_300)] py-3.5 text-[22px] font-normal text-primary shadow-[0_0_20px_-4px_var(--primary)] transition-colors hover:bg-[oklch(0.25_0.05_300)]"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="w-full rounded-full border-2 border-foreground/80 bg-transparent py-3.5 text-[22px] font-normal text-foreground shadow-[0_0_20px_-4px_oklch(0.9_0.02_300)] transition-colors hover:bg-foreground/5"
        >
          Log In
        </button>

        <p className="pt-1 text-center text-[13px] text-foreground/70">
          Version 2.13.0-23200
        </p>
      </div>
    </main>
  );
}
