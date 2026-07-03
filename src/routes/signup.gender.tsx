import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mars, Venus, Transgender } from "lucide-react";
import { NeonButton, SignupShell } from "@/components/signup/SignupShell";

export const Route = createFileRoute("/signup/gender")({
  component: GenderStep,
});

type Gender = "male" | "female" | "nb";

const OPTIONS: Array<{
  id: Gender;
  label: string;
  Icon: typeof Mars;
  color: string;
  glow: string;
  bg: string;
}> = [
  { id: "male", label: "Male", Icon: Mars, color: "oklch(0.75 0.15 220)", glow: "oklch(0.75 0.15 220)", bg: "oklch(0.22 0.08 240)" },
  { id: "female", label: "Female", Icon: Venus, color: "oklch(0.7 0.22 320)", glow: "oklch(0.7 0.22 320)", bg: "oklch(0.22 0.1 320)" },
  { id: "nb", label: "Non-binary", Icon: Transgender, color: "oklch(0.7 0.15 60)", glow: "oklch(0.7 0.15 60)", bg: "oklch(0.22 0.08 60)" },
];

function GenderStep() {
  const nav = useNavigate();
  const [sel, setSel] = useState<Gender | null>(null);
  return (
    <SignupShell
      title="Select Gender"
      subtitle="You can't modify your gender after the registration"
      back="/signup/age"
      footer={<NeonButton disabled={!sel} onClick={() => nav({ to: "/signup/bio" })}>Next</NeonButton>}
    >
      <div className="flex items-start justify-center gap-6 pt-2">
        {OPTIONS.map(({ id, label, Icon, color, glow, bg }) => {
          const active = sel === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setSel(id)}
              className="flex flex-col items-center gap-2"
            >
              <span
                className="grid h-16 w-16 place-items-center rounded-2xl border-2 transition-all"
                style={{
                  borderColor: active ? color : "oklch(0.3 0.05 300)",
                  background: bg,
                  boxShadow: active
                    ? `0 0 22px -2px ${glow}, inset 0 0 14px -4px ${glow}`
                    : "none",
                  opacity: sel && !active ? 0.5 : 1,
                }}
              >
                <Icon className="h-8 w-8" style={{ color }} strokeWidth={2.5} />
              </span>
              <span
                className="text-[14px]"
                style={{ color: active ? "oklch(0.98 0.01 300)" : "oklch(0.65 0.05 300)" }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </SignupShell>
  );
}