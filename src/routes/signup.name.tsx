import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { NeonButton, SignupShell } from "@/components/signup/SignupShell";

export const Route = createFileRoute("/signup/name")({
  component: NameStep,
});

function NameStep() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  return (
    <SignupShell
      title="Qual é o seu nome?"
      subtitle="É assim que os outros vão te ver"
      footer={<NeonButton disabled={!name.trim()} onClick={() => nav({ to: "/signup/age" })}>Próximo</NeonButton>}
    >
      <input
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu nome"
        className="w-full rounded-xl border border-[oklch(0.35_0.08_300)] bg-[oklch(0.16_0.05_300)] px-4 py-4 text-[16px] text-foreground placeholder:text-foreground/40 focus:border-[oklch(0.65_0.14_195)] focus:outline-none"
      />
    </SignupShell>
  );
}