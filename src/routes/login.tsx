import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { NeonButton, SignupShell } from "@/components/signup/SignupShell";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const valid = /.+@.+\..+/.test(email) && pass.length >= 6;
  return (
    <SignupShell
      title="Entrar"
      subtitle="Bem-vindo de volta ao Project Z"
      back="/"
      footer={
        <div className="space-y-3">
          <NeonButton disabled={!valid} onClick={() => nav({ to: "/home" })}>Entrar</NeonButton>
          <p className="text-center text-[13px] text-foreground/60">
            Ainda não tem conta?{" "}
            <Link to="/signup/name" className="text-[oklch(0.82_0.17_75)] underline">Cadastre-se</Link>
          </p>
        </div>
      }
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
          placeholder="Senha"
          className="w-full rounded-xl border border-[oklch(0.35_0.08_300)] bg-[oklch(0.16_0.05_300)] px-4 py-4 text-[15px] text-foreground placeholder:text-foreground/40 focus:border-[oklch(0.65_0.14_195)] focus:outline-none"
        />
        <button type="button" className="w-full text-right text-[13px] text-foreground/60">
          Esqueci minha senha
        </button>
      </div>
    </SignupShell>
  );
}