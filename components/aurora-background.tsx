"use client";

/**
 * AuroraBackground — animated gradient-mesh blobs (BUILD_SPEC §3 / §4).
 *
 *  variant="dark"  → layered violet / lavender / sage blobs over an indigo base.
 *                    Use behind hero & CTA bands (white text sits on top).
 *  variant="light" → faint blobs over cream. Use behind body sections.
 *
 * Always pointer-events-none and rendered behind content. Blobs drift slowly
 * (12–22s loops) and freeze under prefers-reduced-motion via the global CSS
 * media block in globals.css.
 */
export default function AuroraBackground({
  variant = "light",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const isDark = variant === "dark";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${
        isDark ? "bg-[#1b1140]" : "bg-transparent"
      } ${className}`}
    >
      {/* Blob 1 — violet */}
      <span
        className="aurora-blob"
        style={{
          top: "-12%",
          left: "-8%",
          width: "46vw",
          height: "46vw",
          background: isDark
            ? "radial-gradient(circle at center, rgba(124,58,237,0.55), transparent 62%)"
            : "radial-gradient(circle at center, rgba(124,58,237,0.18), transparent 64%)",
          animationDuration: "18s",
        }}
      />
      {/* Blob 2 — lavender */}
      <span
        className="aurora-blob"
        style={{
          top: "8%",
          right: "-12%",
          width: "42vw",
          height: "42vw",
          background: isDark
            ? "radial-gradient(circle at center, rgba(196,181,253,0.42), transparent 62%)"
            : "radial-gradient(circle at center, rgba(196,181,253,0.22), transparent 64%)",
          animationDuration: "22s",
          animationDelay: "-6s",
        }}
      />
      {/* Blob 3 — sage */}
      <span
        className="aurora-blob"
        style={{
          bottom: "-18%",
          left: "22%",
          width: "40vw",
          height: "40vw",
          background: isDark
            ? "radial-gradient(circle at center, rgba(16,185,129,0.30), transparent 64%)"
            : "radial-gradient(circle at center, rgba(16,185,129,0.12), transparent 66%)",
          animationDuration: "20s",
          animationDelay: "-12s",
        }}
      />
      {/* Blob 4 — deep indigo accent (dark only, adds depth) */}
      {isDark && (
        <span
          className="aurora-blob"
          style={{
            bottom: "-8%",
            right: "6%",
            width: "38vw",
            height: "38vw",
            background:
              "radial-gradient(circle at center, rgba(59,7,100,0.7), transparent 60%)",
            animationDuration: "16s",
            animationDelay: "-4s",
          }}
        />
      )}

      {/* Soft vignette to keep text legible on dark */}
      {isDark && (
        <span
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 0%, transparent 40%, rgba(27,17,64,0.55) 100%)",
          }}
        />
      )}

      <style>{`
        .aurora-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(60px);
          will-change: transform;
          animation-name: aurora-drift;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
        @keyframes aurora-drift {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          50%  { transform: translate3d(4%, 6%, 0) scale(1.12); }
          100% { transform: translate3d(-5%, -4%, 0) scale(0.95); }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora-blob { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
