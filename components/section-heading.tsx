import type { ReactNode } from "react";

/**
 * SectionHeading — BUILD_SPEC §5.
 * Eyebrow (champagne, uppercase tracked), title (Cormorant display),
 * optional subtitle (Raleway, ink-soft). Supports left/center align and
 * light/dark tone for body vs. dark sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  const alignCls = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${isDark ? "eyebrow-on-dark" : ""} mb-4`}>{eyebrow}</p>
      )}
      <h2
        className={`font-display text-[2rem] font-semibold leading-[1.1] tracking-[-0.01em] md:text-[2.75rem] ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-[60ch] text-base leading-[1.7] md:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${isDark ? "text-lavender-100/85" : "text-ink-soft"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
