import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { NeonButton, SignupShell } from "@/components/signup/SignupShell";

export const Route = createFileRoute("/signup/done")({
  component: DoneStep,
});

function DoneStep() {
  return (
    <SignupShell
      title="You're all set!"
      subtitle="Welcome to Project Z"
      footer={
        <Link to="/">
          <NeonButton>Enter</NeonButton>
        </Link>
      }
    >
      <div className="flex flex-col items-center pt-6">
        <span
          className="grid h-24 w-24 place-items-center rounded-full border-2"
          style={{
            borderColor: "oklch(0.72 0.19 45)",
            background: "oklch(0.22 0.08 300)",
            boxShadow: "0 0 30px -2px oklch(0.72 0.19 45), inset 0 0 20px -4px oklch(0.72 0.19 45)",
          }}
        >
          <Check className="h-12 w-12" style={{ color: "oklch(0.82 0.17 75)" }} strokeWidth={3} />
        </span>
      </div>
    </SignupShell>
  );
}