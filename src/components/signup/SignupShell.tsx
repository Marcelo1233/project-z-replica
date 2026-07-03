import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { type ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  back?: string;
  children: ReactNode;
  footer: ReactNode;
};

export function SignupShell({ title, subtitle, back, children, footer }: Props) {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-background text-foreground">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-2 text-[13px] font-medium text-foreground/90">
        <span>16:08</span>
        <div className="flex items-center gap-1 text-[11px]">
          <span>▲</span><span>✦</span><span>M</span>
          <span className="ml-2">📶</span><span>▱</span><span>44%</span>
        </div>
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-3">
        {back ? (
          <Link
            to={back}
            className="grid h-10 w-10 place-items-center rounded-xl bg-[oklch(0.2_0.05_300)] text-foreground/90"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
        ) : <span className="h-10 w-10" />}
        <button type="button" className="text-[15px] text-foreground/80">Help</button>
      </div>

      {/* Header */}
      <div className="px-6 pt-4 text-center">
        <h1 className="text-[22px] font-semibold text-foreground">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-[13px] text-foreground/60">{subtitle}</p>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pt-8">{children}</div>

      {/* Footer / Next */}
      <div className="px-6 pb-8">{footer}</div>
    </main>
  );
}

export function NeonButton({
  children,
  disabled,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-2xl border-2 border-[oklch(0.72_0.19_45)] bg-[oklch(0.18_0.05_300)] py-4 text-[22px] font-semibold text-[oklch(0.82_0.17_75)] shadow-[0_0_18px_-2px_oklch(0.72_0.19_45),inset_0_0_12px_-4px_oklch(0.72_0.19_45)] transition-opacity disabled:opacity-40"
    >
      {children}
    </button>
  );
}