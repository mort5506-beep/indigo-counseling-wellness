import AuroraBackground from "@/components/aurora-background";

/**
 * Minimal placeholder Home — the Home-page agent replaces this fully.
 * Keep tiny: just a hero so the route compiles.
 */
export default function HomePage() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6 pt-[72px]">
      <AuroraBackground variant="dark" />
      <div className="container-luxe relative z-10 text-center">
        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-white md:text-6xl">
          Indigo Counseling &amp; Wellness
        </h1>
      </div>
    </section>
  );
}
