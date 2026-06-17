import type { ReactNode } from "react";

/**
 * GlassCard — glass surface per BUILD_SPEC §3.
 *  tone="light" (default) → light glass for cream/light sections.
 *  tone="dark"            → dark glass for indigo/dark sections.
 *  hover=true             → lift -6px + shadow-lg + border glow on hover (§4).
 *
 * Pure presentational; no client hooks so it can be used in server components.
 * Hover is CSS-only (group-safe) and is neutralized by the global
 * prefers-reduced-motion block in globals.css.
 */
export default function GlassCard({
  children,
  className = "",
  hover = false,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tone?: "light" | "dark";
}) {
  const base = tone === "dark" ? "glass-dark" : "glass";
  const hoverCls = hover
    ? "transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-24px_rgba(43,16,101,0.30)] hover:border-violet-400/50"
    : "";

  return (
    <div
      className={`${base} rounded-[22px] ${hoverCls} ${className}`}
    >
      {children}
    </div>
  );
}
