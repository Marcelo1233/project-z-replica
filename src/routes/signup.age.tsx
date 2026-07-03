import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { NeonButton, SignupShell } from "@/components/signup/SignupShell";

export const Route = createFileRoute("/signup/age")({
  component: AgeStep,
});

function AgeStep() {
  const nav = useNavigate();
  const [age, setAge] = useState("");
  const valid = /^\d+$/.test(age) && Number(age) >= 13 && Number(age) <= 120;
  return (
    <SignupShell
      title="How old are you?"
      subtitle="You can't modify your age after the registration"
      back="/signup/name"
      footer={<NeonButton disabled={!valid} onClick={() => nav({ to: "/signup/gender" })}>Next</NeonButton>}
    >
      <input
        autoFocus
        inputMode="numeric"
        value={age}
        onChange={(e) => setAge(e.target.value.replace(/\D/g, "").slice(0, 3))}
        placeholder="18"
        className="w-full rounded-xl border border-[oklch(0.35_0.08_300)] bg-[oklch(0.16_0.05_300)] px-4 py-4 text-center text-[28px] font-semibold text-foreground placeholder:text-foreground/30 focus:border-[oklch(0.65_0.14_195)] focus:outline-none"
      />
    </SignupShell>
  );
}