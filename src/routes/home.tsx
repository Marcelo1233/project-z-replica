import { createFileRoute } from "@tanstack/react-router";
import { Search, Megaphone, Bell, Gift, Compass, LayoutGrid, MessageCircle, ShoppingBag, Plus, ChevronRight } from "lucide-react";
import heroImg from "@/assets/metaverse-hero.jpg";

export const Route = createFileRoute("/home")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-background text-foreground">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-2 text-[13px] font-medium text-foreground/90">
        <span>16:10</span>
        <div className="flex items-center gap-1 text-[11px]">
          <span>▲</span><span>✦</span><span>M</span>
          <span className="ml-2">📶</span><span>▱</span><span>43%</span>
        </div>
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-3">
        <div className="flex items-center gap-2">
          <div
            className="grid h-11 w-11 place-items-center rounded-full border-2"
            style={{
              borderColor: "oklch(0.7 0.2 320)",
              background: "oklch(0.22 0.08 300)",
              boxShadow: "0 0 14px -2px oklch(0.7 0.2 320)",
            }}
          >
            <span className="text-[15px] font-semibold text-foreground/90">U</span>
          </div>
          <div>
            <div className="text-[14px] font-semibold text-foreground">usuario</div>
            <div className="flex items-center gap-1 text-[11px] text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.18_150)]" />
              Online
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {[Search, Megaphone, Bell].map((Icon, i) => (
            <button
              key={i}
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-[oklch(0.2_0.06_300)] text-foreground/85"
            >
              <Icon className="h-4.5 w-4.5" />
            </button>
          ))}
        </div>
      </div>

      {/* Gift banner */}
      <div className="mx-4 mt-3 flex items-center gap-2 self-start rounded-full bg-[oklch(0.28_0.09_60)] px-3 py-1.5 text-[12px] text-[oklch(0.88_0.12_75)]">
        <Gift className="h-4 w-4" />
        <span>Você tem um presente!</span>
      </div>

      {/* Hero orbit */}
      <div className="relative mt-2 h-[280px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Órbita cósmica"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Meet cards */}
      <div className="grid grid-cols-3 gap-3 px-4 pt-2">
        {[
          { title: "Text Meet", tag: "20 restantes", color: "oklch(0.65 0.15 220)" },
          { title: "Voice Meet", tag: "20 restantes", color: "oklch(0.7 0.18 165)" },
          { title: "Garrafa ao Mar", tag: "novo", color: "oklch(0.7 0.2 320)" },
        ].map((c) => (
          <button
            key={c.title}
            type="button"
            className="h-[110px] rounded-2xl border p-2.5 text-left"
            style={{
              borderColor: c.color,
              background: `linear-gradient(160deg, oklch(0.2 0.06 300), oklch(0.15 0.05 300))`,
              boxShadow: `0 0 14px -6px ${c.color}`,
            }}
          >
            <span
              className="inline-block rounded-full px-1.5 py-0.5 text-[9px]"
              style={{ background: "oklch(0.22 0.08 300)", color: c.color }}
            >
              {c.tag}
            </span>
            <div className="mt-1 text-[13px] font-semibold leading-tight text-foreground">
              {c.title}
            </div>
          </button>
        ))}
      </div>

      {/* Live Parties */}
      <section className="mx-4 mt-4 rounded-2xl border border-[oklch(0.3_0.08_300)] bg-[oklch(0.16_0.05_300)] p-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] font-semibold text-foreground">Salas ao vivo</h2>
          <ChevronRight className="h-4 w-4 text-foreground/60" />
        </div>
        <div className="mt-2 flex gap-3 overflow-x-auto pb-1 text-[12px]">
          {["Role play", "Conversas", "Anime", "Jogos"].map((t, i) => (
            <span
              key={t}
              className={
                i === 0
                  ? "text-[oklch(0.82_0.17_75)]"
                  : "text-foreground/60"
              }
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {["Grupo dos amigos", "RPG mesa", "Chat noturno", "Papo geral"].map((n, i) => (
            <div
              key={n}
              className="rounded-xl p-2 text-[10px] font-medium text-foreground/90"
              style={{
                background: [
                  "oklch(0.28 0.09 240)",
                  "oklch(0.28 0.09 30)",
                  "oklch(0.28 0.09 320)",
                  "oklch(0.28 0.09 150)",
                ][i],
              }}
            >
              <div className="h-8 w-8 rounded-md bg-black/30" />
              <div className="mt-1 line-clamp-2 leading-tight">{n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore circles teaser */}
      <section className="mx-4 my-4 flex items-center justify-between">
        <h2 className="text-[16px] font-semibold text-foreground">Explorar Círculos</h2>
        <ChevronRight className="h-4 w-4 text-foreground/60" />
      </section>

      <div className="h-24" />

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-1/2 flex w-full max-w-[430px] -translate-x-1/2 items-end justify-around border-t border-[oklch(0.25_0.06_300)] bg-[oklch(0.11_0.05_300)]/95 px-3 pb-4 pt-2 backdrop-blur">
        {[
          { Icon: Compass, label: "Descobrir", active: true },
          { Icon: LayoutGrid, label: "Círculos" },
          { Icon: Plus, label: "", center: true },
          { Icon: MessageCircle, label: "Chats" },
          { Icon: ShoppingBag, label: "Loja" },
        ].map(({ Icon, label, active, center }, i) =>
          center ? (
            <button
              key={i}
              type="button"
              className="-mt-6 grid h-14 w-14 place-items-center rounded-full border-2"
              style={{
                borderColor: "oklch(0.72 0.15 175)",
                background: "oklch(0.2 0.06 300)",
                boxShadow: "0 0 20px -2px oklch(0.72 0.15 175), inset 0 0 12px -4px oklch(0.72 0.15 175)",
              }}
            >
              <Plus className="h-7 w-7" style={{ color: "oklch(0.85 0.15 175)" }} strokeWidth={2.5} />
            </button>
          ) : (
            <button key={i} type="button" className="flex flex-1 flex-col items-center gap-1">
              <Icon
                className="h-5 w-5"
                style={{ color: active ? "oklch(0.85 0.15 175)" : "oklch(0.65 0.05 300)" }}
              />
              <span
                className="text-[10px]"
                style={{ color: active ? "oklch(0.85 0.15 175)" : "oklch(0.65 0.05 300)" }}
              >
                {label}
              </span>
            </button>
          ),
        )}
      </nav>
    </main>
  );
}