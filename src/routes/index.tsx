import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
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
            Conheça amigos no Metaverso!
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
            Ao continuar, você concorda com os{" "}
            <a href="#" className="text-[oklch(0.65_0.14_195)] underline">Termos de Serviço</a> e a{" "}
            <a href="#" className="text-[oklch(0.65_0.14_195)] underline">Política de Privacidade</a> do Project Z.
          </span>
        </label>

        <Link
          to="/signup/name"
          className="block w-full rounded-2xl border-2 border-[oklch(0.72_0.19_45)] bg-[oklch(0.18_0.05_300)] py-4 text-center text-[22px] font-medium text-[oklch(0.82_0.17_75)] shadow-[0_0_18px_-2px_oklch(0.72_0.19_45),inset_0_0_12px_-4px_oklch(0.72_0.19_45)] transition-colors hover:bg-[oklch(0.22_0.05_300)]"
        >
          Cadastrar
        </Link>
        <Link
          to="/login"
          className="block w-full rounded-2xl border-2 border-[oklch(0.75_0.15_290)] bg-[oklch(0.18_0.05_300)] py-4 text-center text-[22px] font-medium text-[oklch(0.92_0.03_290)] shadow-[0_0_18px_-2px_oklch(0.75_0.15_290),inset_0_0_12px_-4px_oklch(0.75_0.15_290)] transition-colors hover:bg-[oklch(0.22_0.05_300)]"
        >
          Entrar
        </Link>

        <p className="pt-1 text-center text-[13px] text-foreground/70">
          Versão 2.13.0-23200
        </p>
      </div>
    </main>
  );
}
