import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { NeonButton, SignupShell } from "@/components/signup/SignupShell";

export const Route = createFileRoute("/signup/account")({
  component: AccountStep,
});

function AccountStep() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const emailOk = /.+@.+\..+/.test(email);
  const passOk = pass.length >= 6;
  const matchOk = pass === confirm && confirm.length > 0;
  const valid = emailOk && passOk && matchOk;

  return (
    <SignupShell
      title="Criar sua conta"
      subtitle="Use um e-mail e uma senha para acessar"
      back="/signup/bio"
      footer={<NeonButton disabled={!valid} onClick={() => nav({ to: "/signup/done" })}>Criar conta</NeonButton>}
    >
      <div className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className="w-full rounded-xl border border-[oklch(0.35_0.08_300)] bg-[oklch(0.16_0.05_300)] px-4 py-4 text-[15px] text-foreground placeholder:text-foreground/40 focus:border-[oklch(0.65_0.14_195)] focus:outline-none"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Senha (mínimo 6 caracteres)"
          className="w-full rounded-xl border border-[oklch(0.35_0.08_300)] bg-[oklch(0.16_0.05_300)] px-4 py-4 text-[15px] text-foreground placeholder:text-foreground/40 focus:border-[oklch(0.65_0.14_195)] focus:outline-none"
        />
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="Confirmar senha"
          className="w-full rounded-xl border border-[oklch(0.35_0.08_300)] bg-[oklch(0.16_0.05_300)] px-4 py-4 text-[15px] text-foreground placeholder:text-foreground/40 focus:border-[oklch(0.65_0.14_195)] focus:outline-none"
        />
        {confirm.length > 0 && !matchOk && (
          <p className="text-[12px] text-[oklch(0.7_0.2_20)]">As senhas não coincidem</p>
        )}
      </div>
    </SignupShell>
  );
}