import type { Metadata } from "next";
import {
  Flower2,
  Activity,
  CloudSun,
  ShieldCheck,
  HeartHandshake,
  LifeBuoy,
  HandHeart,
  Compass,
  Sparkles,
  Phone,
} from "lucide-react";

import { site } from "@/lib/site";
import AuroraBackground from "@/components/aurora-background";
import Reveal, { RevealStagger, RevealItem } from "@/components/reveal";
import GlassCard from "@/components/glass-card";
import GradientButton from "@/components/gradient-button";
import SectionHeading from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Specialties | Indigo Counseling & Wellness",
  description:
    "Areas of focus at Indigo Counseling & Wellness in Mount Pleasant / Charleston, SC — women's mental health, nervous system regulation, mood disorders, trauma (including complex PTSD), relationships, addiction, and borderline personality disorder. Compassionate, evidence-based therapy with Lisa Larkins Morton, LPC.",
  alternates: { canonical: "/specialties" },
};

/* ----------------------------- Data ----------------------------- */

const specialties = [
  {
    title: "Women's Health",
    icon: Flower2,
    featured: true,
    intro:
      "Specialized mental-health care for women through every stage of life.",
    items: [
      "Across the lifespan",
      "Reproductive mental health",
      "Pregnancy & postpartum",
      "Perimenopause & menopause",
    ],
  },
  {
    title: "Nervous System Regulation",
    icon: Activity,
    featured: true,
    intro:
      "A nervous system–informed approach — because healing involves more than insight alone.",
    items: [
      "Regulation & resilience",
      "Mindfulness",
      "Brain-body awareness",
      "Stress & burnout",
    ],
  },
  {
    title: "Mood Disorders",
    icon: CloudSun,
    featured: false,
    intro: "Finding steadier ground when the weather inside shifts.",
    items: ["Depression", "Anxiety", "Bi-Polar Disorder"],
  },
  {
    title: "Trauma",
    icon: ShieldCheck,
    featured: false,
    intro: "Gently processing the past so it loosens its grip.",
    items: ["PTSD", "Complex PTSD"],
  },
  {
    title: "Relationship Issues",
    icon: HeartHandshake,
    featured: false,
    intro: "Reconnect, repair, and navigate life's biggest transitions.",
    items: [
      "Communication",
      "Conflict",
      "Separation/Divorce",
      "Infidelity",
      "Infertility",
      "Family Planning",
    ],
  },
  {
    title: "Addiction",
    icon: LifeBuoy,
    featured: false,
    intro: "Compassionate, judgment-free support toward recovery.",
    items: ["Substance Use/Abuse", "Alcohol Use/Abuse", "Dual Diagnosis"],
  },
  {
    title: "Borderline Personality Disorder",
    icon: HandHeart,
    featured: false,
    intro:
      "A safe space to build coping skills, regulation, and self-compassion.",
    items: ["Skills & emotion regulation", "Self-compassion"],
  },
] as const;

/* ----------------------------- Page ----------------------------- */

export default function SpecialtiesPage() {
  return (
    <>
      {/* 1 — HERO (dark aurora) */}
      <section className="relative overflow-hidden">
        <AuroraBackground variant="dark" />
        <div className="container-luxe relative z-10 pt-36 pb-16 text-center md:pt-44 md:pb-24">
          <Reveal>
            <p className="eyebrow eyebrow-on-dark mb-5">SPECIALTIES</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.01em] text-white md:text-[4rem]">
              Areas of focus
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-[58ch] text-lg leading-[1.7] text-lavender-100/85 md:text-xl">
              Specialized in women&rsquo;s mental health and nervous system
              regulation &mdash; with compassionate, evidence-based support
              across a range of concerns.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2 — SPECIALTIES GRID (light / cream) */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <AuroraBackground variant="light" />
        <div className="container-luxe relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="HOW I CAN HELP"
              title="The work we do together"
              subtitle="Women's mental health and nervous system regulation are my core focus, alongside compassionate support across the concerns below. If you don't see yours here, reach out anyway — we'll find the right path."
            />
          </Reveal>

          <RevealStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((spec) => {
              const Icon = spec.icon;
              return (
                <RevealItem key={spec.title} className="h-full">
                  <GlassCard hover className="flex h-full flex-col p-8">
                    {spec.featured && (
                      <span
                        className="mb-4 inline-flex w-fit items-center rounded-full bg-champagne/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ring-1 ring-champagne/40"
                        style={{ color: "#7d6326" }}
                      >
                        Focus area
                      </span>
                    )}
                    <span
                      className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender-100 to-lavender-300/60 text-violet-700 ring-1 ring-white/60"
                      aria-hidden="true"
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </span>

                    <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink md:text-[1.75rem]">
                      {spec.title}
                    </h3>

                    <p className="mt-3 font-sans text-base leading-[1.65] text-ink-soft">
                      {spec.intro}
                    </p>

                    <ul className="mt-6 flex flex-1 flex-col gap-3">
                      {spec.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-sans text-base leading-[1.5] text-ink"
                        >
                          <span
                            className="mt-[0.55rem] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-champagne"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </RevealItem>
              );
            })}

            {/* Closing tile — warm, on-brand, fills the 6th grid cell at lg */}
            <RevealItem className="h-full">
              <GlassCard
                tone="dark"
                hover
                className="relative flex h-full flex-col justify-center overflow-hidden bg-cta-dark p-8"
              >
                <span
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-lavender-100 ring-1 ring-white/20"
                  aria-hidden="true"
                >
                  <Compass className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] text-white md:text-[1.75rem]">
                  Not seeing your concern?
                </h3>
                <p className="mt-3 font-sans text-base leading-[1.65] text-lavender-100/85">
                  These areas aren&rsquo;t a checklist. If something is weighing
                  on you, let&rsquo;s talk it through and find a way forward.
                </p>
                <div className="mt-7">
                  <GradientButton
                    href="/contact"
                    variant="outline"
                    className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white/60"
                  >
                    Start a conversation
                  </GradientButton>
                </div>
              </GlassCard>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* 3 — APPROACH / REASSURANCE STRIP (light) */}
      <section className="relative overflow-hidden bg-surface py-24 md:py-32">
        <div className="container-luxe relative z-10">
          <Reveal>
            <GlassCard className="mx-auto max-w-4xl p-10 text-center md:p-14">
              <span
                className="mx-auto mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender-100 text-violet-700"
                aria-hidden="true"
              >
                <Sparkles className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <p className="eyebrow mb-4">THE APPROACH</p>
              <h2 className="font-display text-[2rem] font-semibold leading-[1.1] tracking-[-0.01em] text-ink md:text-[2.5rem]">
                A collaborative, whole-person path
              </h2>
              <p className="mx-auto mt-5 max-w-[62ch] font-sans text-base leading-[1.7] text-ink-soft md:text-lg">
                My work is collaborative and strengths-based, blending
                evidence-based therapy with holistic, mind-body practices like
                mindfulness. Wherever we begin, we move at a pace that feels safe
                — building trust and self-efficacy so real change can take root.
              </p>
              <div className="champagne-hairline mx-auto mt-8 max-w-xs" />
              <p className="mt-6 font-display text-xl italic text-ink-soft">
                &mdash; {site.therapist}
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* 4 — CTA BAND (dark) */}
      <section className="relative overflow-hidden bg-cta-dark">
        <AuroraBackground variant="dark" className="bg-transparent" />
        <div className="container-luxe relative z-10 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-[22ch] font-display text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.01em] text-white md:text-[3.25rem]">
              Not sure where to start? Book a free consultation.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-[52ch] font-sans text-base leading-[1.7] text-lavender-100/85 md:text-lg">
              Your first 15-minute consultation is complimentary — a relaxed
              conversation to see if we&rsquo;re the right fit, with no
              obligation.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GradientButton href="/contact" size="lg">
                Book a free consultation
              </GradientButton>
              <GradientButton
                href={site.phoneHref}
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white/60"
                aria-label={`Call ${site.phone}`}
              >
                <Phone className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                {site.phone}
              </GradientButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
