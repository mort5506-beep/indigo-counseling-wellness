import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

type GradientButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  "aria-label"?: string;
};

/**
 * GradientButton — BUILD_SPEC §5.
 *  - href provided → renders a Next <Link>; otherwise a <button>.
 *  - primary  → brand gradient fill, white text, sheen sweep on hover.
 *  - outline  → violet border + violet text on transparent/glass.
 *  - ghost    → text-only violet, subtle hover wash.
 * Pill shaped, cursor-pointer, visible focus ring, min-height 44px, active scale.
 */
export default function GradientButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  "aria-label": ariaLabel,
}: GradientButtonProps) {
  const sizeCls =
    size === "lg"
      ? "min-h-[52px] px-8 text-base"
      : "min-h-[44px] px-6 text-sm";

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold tracking-wide " +
    "cursor-pointer select-none transition-[transform,box-shadow,background-color,color] duration-200 ease-out " +
    "active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  const variantCls: Record<Variant, string> = {
    primary:
      "bg-brand text-white btn-sheen shadow-[0_14px_44px_-16px_rgba(43,16,101,0.55)] hover:shadow-[0_24px_60px_-18px_rgba(124,58,237,0.6)] hover:-translate-y-0.5",
    outline:
      "border border-violet-600/70 text-violet-700 bg-white/40 backdrop-blur-sm hover:bg-violet-600/10 hover:border-violet-600",
    ghost:
      "text-violet-700 hover:bg-violet-600/10",
  };

  const cls = `${base} ${sizeCls} ${variantCls[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel} onClick={onClick}>
        <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
