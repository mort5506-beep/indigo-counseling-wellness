import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Flower2,
  Activity,
  Baby,
  HeartHandshake,
  Brain,
  Leaf,
  BadgeCheck,
  MoonStar,
  Phone,
  ArrowRight,
  ArrowDown,
  Quote,
} from "lucide-react";

import { site } from "@/lib/site";
import AuroraBackground from "@/components/aurora-background";
import Reveal, { RevealStagger, RevealItem } from "@/components/reveal";
import GlassCard from "@/components/glass-card";
import GradientButton from "@/components/gradient-button";
import SectionHeading from "@/components/section-heading";
import heroBg from "../assets/hero-serenity.jpg";

export const metadata: Metadata = {
  title:
    "Indigo Counseling & Wellness | Women's Mental Health & Nervous System–Informed Therapy",
  description:
    "Lisa Larkins Morton, LPC — integrative, nervous system–informed psychotherapy for women across the lifespan in Mount Pleasant / Charleston, SC. Specialized support for reproductive mental health, relationships, anxiety, trauma, and burnout. Your first 15-minute consultation is complimentary.",
};

/* ---------- static content (BUILD_SPEC §6 HOME) ---------- */

const trustRow = [
  { icon: Flower2, label: "Women's mental health" },
  { icon: Activity, label: "Nervous system–informed" },
  { icon: BadgeCheck, label: "EMDR & DBT trained" },
];

const emphases = [
  {
    icon: Flower2,
    title: "Women-focused care",
    blurb:
      "Specialized support for women through every stage of life — from adolescence through later adulthood — navigating the changing identities, relationships, family roles, and life transitions that shape emotional health across the lifespan.",
  },
  {
    icon: Activity,
    title: "Nervous system regulation",
    blurb:
      "Evidence-based therapy combined with interventions that support regulation, mindfulness, and brain-body awareness — addressing both the psychological and physiological sides of stress, trauma, anxiety, ADHD, and burnout.",
  },
];

const specialties = [
  {
    icon: Flower2,
    title: "Women's Mental Health",
    items: "Anxiety · Depression · Self-esteem · Identity · Life transitions",
  },
  {
    icon: Baby,
    title: "Reproductive Mental Health",
    items: "Pregnancy & postpartum · Infertility · Pregnancy loss · Motherhood",
  },
  {
    icon: HeartHandshake,
    title: "Relationship Challenges",
    items: "Betrayal & infidelity · Marriage · Separation & divorce · Caregiving",
  },
  {
    icon: Brain,
    title: "Nervous System–Informed",
    items: "Stress · Trauma · Anxiety · ADHD · Burnout",
  },
  {
    icon: Leaf,
    title: "Transitions, Grief & Aging",
    items: "Perimenopause · Menopause · Grief & loss · Aging · End-of-life",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          1 · HERO  (serene stepping-stones photo background)
         ============================================================ */}
      <section className="relative flex min-h-dvh items-center overflow-hidden pt-36 pb-28 md:pt-48 md:pb-36">
        {/* Background photo + indigo scrim for headline legibility */}
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,12,46,0.66) 0%, rgba(20,12,46,0.30) 36%, rgba(34,18,78,0.40) 60%, rgba(20,12,46,0.86) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(112% 78% at 50% 52%, rgba(20,12,46,0.46), transparent 72%)",
          }}
        />

        <div className="container-luxe relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal as="p" className="eyebrow eyebrow-on-dark mb-6">
              Women&rsquo;s Mental Health · Nervous System&ndash;Informed Therapy
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                Therapy that meets you with{" "}
                <span className="text-gradient-light">compassion</span> —
                <br className="hidden sm:block" /> never judgment.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-[1.75] text-lavender-100/85 md:text-lg">
                Integrative, nervous system&ndash;informed psychotherapy for
                women across the lifespan, in Mount Pleasant, SC. Together we
                move beyond simply coping &mdash; toward lasting change, deeper
                resilience, and a more authentic, fulfilling life.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <GradientButton href="/contact" variant="primary" size="lg">
                  Book a free consultation
                  <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                </GradientButton>
                <GradientButton
                  href="/specialties"
                  variant="outline"
                  size="lg"
                  className="border-white/40 bg-white/5 text-white backdrop-blur-sm hover:border-white/70 hover:bg-white/10"
                >
                  Explore specialties
                </GradientButton>
              </div>
            </Reveal>

            {/* Trust row */}
            <Reveal delay={0.44}>
              <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                {trustRow.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 text-sm font-medium text-lavender-100/80"
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.75}
                      className="text-lavender-300"
                      aria-hidden="true"
                    />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Scroll cue */}
        <Reveal
          delay={0.6}
          className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
        >
          <span className="inline-flex flex-col items-center gap-2 text-lavender-100/55">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em]">
              Scroll
            </span>
            <ArrowDown size={16} strokeWidth={1.75} aria-hidden="true" />
          </span>
        </Reveal>
      </section>

      {/* ============================================================
          2 · A SAFE PLACE TO BE FULLY YOURSELF  (light / cream)
         ============================================================ */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <AuroraBackground variant="light" />

        <div className="container-luxe relative z-10">
          <Reveal className="mx-auto max-w-3xl">
            <GlassCard className="px-7 py-12 text-center md:px-14 md:py-16">
              <p className="eyebrow mb-6">A safe place to be fully yourself</p>
              <Quote
                size={34}
                strokeWidth={1.5}
                className="mx-auto mb-6 text-lavender-400"
                aria-hidden="true"
              />
              <p className="mx-auto max-w-[60ch] font-display text-[1.55rem] font-medium leading-[1.45] tracking-[-0.01em] text-ink md:text-[2rem] md:leading-[1.4]">
                My approach is compassionate, nonjudgmental, and grounded in the
                connection between your emotional well-being, your relationships,
                and your nervous system. I strive to create a safe space where
                you can explore your experiences, process difficult emotions, and
                strengthen resilience.
              </p>
              <p className="mx-auto mt-7 max-w-[60ch] text-base leading-[1.75] text-ink-soft md:text-lg">
                Healing involves more than insight alone. Together we move{" "}
                <span className="font-semibold text-violet-700">
                  beyond simply coping
                </span>{" "}
                — toward lasting change, deeper resilience, and a more authentic,
                fulfilling life.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          3 · OUR APPROACH / MIND-BODY  (light)
         ============================================================ */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-luxe">
          <Reveal>
            <SectionHeading
              eyebrow="WHERE I FOCUS"
              title="Two areas of focus"
              subtitle="While I support a wide range of concerns, my work centers on two deeply connected areas — caring for women across the lifespan, and helping the nervous system feel safe enough to heal."
              align="center"
            />
          </Reveal>

          <RevealStagger className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
            {emphases.map(({ icon: Icon, title, blurb }) => (
              <RevealItem key={title}>
                <GlassCard hover className="h-full p-8">
                  <span
                    className="bg-brand inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_12px_30px_-12px_rgba(124,58,237,0.6)]"
                    aria-hidden="true"
                  >
                    <Icon size={26} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.01em] text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.7] text-ink-soft">
                    {blurb}
                  </p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ============================================================
          4 · PHILOSOPHY  (glass panel over soft aurora)
         ============================================================ */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <AuroraBackground variant="light" />

        <div className="container-luxe relative z-10">
          <Reveal className="mx-auto max-w-4xl">
            <GlassCard className="px-7 py-12 md:px-16 md:py-16">
              <div className="mx-auto max-w-2xl text-center">
                <p className="eyebrow mb-4">PHILOSOPHY</p>
                <h2 className="font-display text-[2rem] font-semibold leading-[1.1] tracking-[-0.01em] text-ink md:text-[2.75rem]">
                  Let&rsquo;s start this journey together
                </h2>
              </div>

              <p className="mx-auto mt-8 max-w-[64ch] text-center text-base leading-[1.8] text-ink-soft md:text-lg">
                I provide integrative psychotherapy that recognizes the powerful
                connection between the mind, body, and nervous system. While
                insight and self-understanding are important, lasting change
                often requires helping the nervous system feel safe enough to
                process, adapt, and heal. My goal is to help you not only
                understand your experiences, but also develop the capacity to
                respond to life&rsquo;s challenges with greater flexibility,
                confidence, and well-being.
              </p>

              <hr className="champagne-hairline mx-auto my-8 max-w-xs" />

              <p className="text-center font-display text-2xl italic text-violet-700 md:text-3xl">
                — Lisa Larkins Morton, LPC
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          5 · SPECIALTIES PREVIEW  (light)
         ============================================================ */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-luxe">
          <Reveal>
            <SectionHeading
              eyebrow="SPECIALTIES"
              title="How I can help"
              subtitle="Specialized support for women across the lifespan and nervous system–informed care. These are the areas I most often walk through with clients."
              align="center"
            />
          </Reveal>

          <RevealStagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map(({ icon: Icon, title, items }) => (
              <RevealItem key={title} className="h-full">
                <Link
                  href="/specialties"
                  className="group block h-full rounded-[22px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  <GlassCard
                    hover
                    className="flex h-full flex-col p-7 transition-colors group-hover:border-violet-400/50"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lavender-100 text-violet-700 transition-colors group-hover:bg-violet-600 group-hover:text-white"
                        aria-hidden="true"
                      >
                        <Icon size={22} strokeWidth={1.75} />
                      </span>
                      <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-[1.7] text-ink-soft">
                      {items}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-violet-700">
                      Learn more
                      <ArrowRight
                        size={15}
                        strokeWidth={2}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </GlassCard>
                </Link>
              </RevealItem>
            ))}

            {/* Sixth tile — view all */}
            <RevealItem className="h-full">
              <GlassCard
                tone="light"
                className="flex h-full flex-col items-start justify-center gap-5 bg-gradient-to-br from-lavender-50 to-lavender-100/60 p-7"
              >
                <p className="font-display text-2xl font-semibold leading-tight tracking-[-0.01em] text-ink">
                  Explore every area of focus.
                </p>
                <GradientButton href="/specialties" variant="primary" size="md">
                  View all specialties
                  <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </GradientButton>
              </GlassCard>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* ============================================================
          6 · RATES TEASER  (glass over cream)
         ============================================================ */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <AuroraBackground variant="light" />

        <div className="container-luxe relative z-10">
          <Reveal className="mx-auto max-w-5xl">
            <GlassCard className="overflow-hidden px-7 py-12 md:px-14 md:py-14">
              <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:justify-between md:gap-12 md:text-left">
                <div className="max-w-xl">
                  <p className="eyebrow mb-4">RATES</p>
                  <h2 className="font-display text-[2rem] font-semibold leading-[1.1] tracking-[-0.01em] text-ink md:text-[2.5rem]">
                    Therapy is an investment in yourself.
                  </h2>
                  <p className="mt-4 text-base leading-[1.7] text-ink-soft md:text-lg">
                    Your first 15-minute consultation is complimentary — a
                    relaxed conversation about where you are, with no obligation
                    to continue.
                  </p>
                </div>
                <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row md:flex-col">
                  <GradientButton href="/rates" variant="outline" size="lg">
                    See rates
                  </GradientButton>
                  <GradientButton href="/contact" variant="primary" size="lg">
                    Book free consult
                  </GradientButton>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          7 · FINAL CTA BAND  (dark gradient + aurora)
         ============================================================ */}
      <section className="bg-cta-dark relative overflow-hidden py-28 md:py-36">
        <AuroraBackground variant="dark" className="bg-transparent" />

        <div className="container-luxe relative z-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow eyebrow-on-dark mb-5">Begin when you&rsquo;re ready</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-white md:text-6xl">
              Take the first step
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-lavender-100/85 md:text-lg">
              Your first 15-minute consultation is complimentary. Let&rsquo;s
              talk about where you are — and where you&rsquo;d like to be.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <GradientButton href="/contact" variant="primary" size="lg">
                Schedule your free consult
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </GradientButton>
              <a
                href={site.phoneHref}
                className="inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-full px-5 text-base font-medium text-lavender-100 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                aria-label={`Call ${site.name} at ${site.phone}`}
              >
                <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
                {site.phone}
              </a>
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-sm text-lavender-100/70">
              <MoonStar
                size={15}
                strokeWidth={1.75}
                className="text-lavender-300"
                aria-hidden="true"
              />
              {site.hours}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
