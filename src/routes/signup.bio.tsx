import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { NeonButton, SignupShell } from "@/components/signup/SignupShell";

export const Route = createFileRoute("/signup/bio")({
  component: BioStep,
});

function BioStep() {
  const nav = useNavigate();
  const [bio, setBio] = useState("");
  const max = 160;
  return (
    <SignupShell
      title="Fale sobre você"
      subtitle="Escreva uma bio curta pra galera te conhecer"
      back="/signup/gender"
      footer={<NeonButton disabled={bio.trim().length < 3} onClick={() => nav({ to: "/signup/account" })}>Próximo</NeonButton>}
    >
      <textarea
        autoFocus
        value={bio}
        onChange={(e) => setBio(e.target.value.slice(0, max))}
        placeholder="Eu adoro explorar o metaverso..."
        rows={5}
        className="w-full resize-none rounded-xl border border-[oklch(0.35_0.08_300)] bg-[oklch(0.16_0.05_300)] px-4 py-3 text-[15px] text-foreground placeholder:text-foreground/40 focus:border-[oklch(0.65_0.14_195)] focus:outline-none"
      />
      <div className="mt-2 text-right text-[12px] text-foreground/50">{bio.length}/{max}</div>
    </SignupShell>
  );
}