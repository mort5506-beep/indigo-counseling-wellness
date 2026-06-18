import type { Metadata } from "next";
import Image from "next/image";
import lisaPortrait from "../../assets/lisa-larkins-morton.jpg";
import {
  Flower2,
  Activity,
  Sparkles,
  ShieldCheck,
  Brain,
  Phone,
  ArrowRight,
  Quote,
} from "lucide-react";

import { site } from "@/lib/site";
import AuroraBackground from "@/components/aurora-background";
import Reveal, { RevealStagger, RevealItem } from "@/components/reveal";
import GlassCard from "@/components/glass-card";
import GradientButton from "@/components/gradient-button";
import SectionHeading from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About Lisa Larkins Morton, LPC | Indigo Counseling & Wellness",
  description:
    "Meet Lisa Larkins Morton, LPC — a psychotherapist in Charleston / Mount Pleasant, SC specializing in women's mental health across the lifespan, reproductive mental health, and nervous system–informed therapy. Integrative, trauma-informed care. Book a complimentary consultation.",
};

/* ---------- static content (BUILD_SPEC §6 ABOUT) ---------- */

const credentials = [
  {
    icon: Flower2,
    label: "Women's Mental Health",
    description:
      "Specialized, lifespan care for women — from adolescence through later adulthood, including reproductive and relational transitions.",
  },
  {
    icon: Activity,
    label: "Nervous System–Informed",
    description:
      "Interventions that support regulation, mindfulness, and brain-body awareness — addressing the physiological side of stress, trauma, anxiety, ADHD, and burnout.",
  },
  {
    icon: Sparkles,
    label: "Integrative & Experiential",
    description:
      "Traditional psychotherapy combined with practical, experiential tools for emotional regulation, resilience, and self-awareness.",
  },
  {
    icon: ShieldCheck,
    label: "Trauma-Informed",
    description:
      "A safe, paced approach that helps the nervous system feel safe enough to process, adapt, and heal.",
  },
  {
    icon: Brain,
    label: "EMDR & DBT",
    description:
      "Evidence-based modalities — EMDR for trauma, and Dialectical Behavior Therapy for emotion regulation and mindfulness.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ============================================================
          1 · HERO  (dark aurora) — medium height, with monogram portrait
         ============================================================ */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <AuroraBackground variant="dark" />

        <div className="container-luxe relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Title column */}
            <div className="text-center lg:text-left">
              <Reveal as="p" className="eyebrow eyebrow-on-dark mb-6">
                About
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-white sm:text-5xl md:text-6xl">
                  Meet Lisa Larkins Morton
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mx-auto mt-6 max-w-xl text-base leading-[1.75] text-lavender-100/85 md:text-lg lg:mx-0">
                  Licensed Professional Counselor · Women&rsquo;s Mental Health
                  &amp; Nervous System&ndash;Informed Therapy · Charleston, SC
                </p>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
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
            </div>

            {/* Portrait of Lisa Larkins Morton in a glass frame. */}
            <Reveal delay={0.24} className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
              <figure className="flex flex-col items-center">
                <GlassCard tone="dark" className="w-full p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[16px]">
                    <Image
                      src={lisaPortrait}
                      alt="Lisa Larkins Morton, Licensed Professional Counselor"
                      fill
                      sizes="(max-width: 1024px) 90vw, 420px"
                      className="object-cover object-top"
                      placeholder="blur"
                      priority
                    />
                    {/* Soft brand wash along the bottom for depth & cohesion */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(27,17,64,0.38), transparent 40%)",
                      }}
                    />
                  </div>
                </GlassCard>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          2 · BIO NARRATIVE  (light / cream) — the four §6 paragraphs
         ============================================================ */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <AuroraBackground variant="light" />

        <div className="container-luxe relative z-10">
          <div className="mx-auto max-w-[68ch]">
            {/* Lead paragraph — emphasized */}
            <Reveal>
              <p className="font-display text-[1.45rem] font-medium leading-[1.5] tracking-[-0.005em] text-ink md:text-[1.75rem] md:leading-[1.5]">
                I provide integrative psychotherapy that recognizes the powerful
                connection between the mind, body, and nervous system. While
                insight and self-understanding are important, lasting change
                often requires helping the nervous system feel safe enough to
                process, adapt, and heal.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-7 text-base leading-[1.85] text-ink-soft md:text-lg">
                I specialize in women&rsquo;s mental health, supporting women from
                adolescence through later adulthood as they navigate changing
                identities, relationships, family roles, and life circumstances.
                Areas of focus include pregnancy and postpartum adjustment,
                infertility, pregnancy loss, abortion experiences, motherhood,
                parenting, relationship concerns, betrayal and infidelity,
                marriage, separation and divorce, caregiving, grief and loss,
                perimenopause, menopause, aging, and end-of-life transitions.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 text-base leading-[1.85] text-ink-soft md:text-lg">
                Drawing from an integrative, trauma-informed, and nervous
                system&ndash;informed approach, I help women better understand
                themselves, strengthen emotional resilience, and navigate
                life&rsquo;s challenges with greater confidence, clarity, and
                self-compassion. In addition to traditional therapy, I may
                incorporate experiential and nervous system regulation tools that
                support emotional regulation, resilience, mindfulness, and
                self-awareness.
              </p>
            </Reveal>

            {/* Editorial pull-quote drawn from the personal paragraph */}
            <Reveal delay={0.08}>
              <figure className="my-12">
                <hr className="champagne-hairline mx-auto mb-8 max-w-xs" />
                <Quote
                  size={30}
                  strokeWidth={1.5}
                  className="mx-auto mb-4 text-lavender-400"
                  aria-hidden="true"
                />
                <blockquote className="text-center font-display text-2xl italic leading-[1.4] text-violet-700 md:text-[1.85rem]">
                  &ldquo;Healing involves more than insight alone.&rdquo;
                </blockquote>
                <hr className="champagne-hairline mx-auto mt-8 max-w-xs" />
              </figure>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-base leading-[1.85] text-ink-soft md:text-lg">
                I&rsquo;m based in Charleston, South Carolina, and my approach is
                deeply relational and compassionate. Beyond the work itself, I
                value presence, connection, and meaningful growth. As a
                self-employed practitioner, I&rsquo;ve intentionally structured my
                practice to prioritize family life — particularly being fully
                present for my young son — and that lived commitment to balance
                informs my work with clients, many of whom are seeking the same.
                Outside of my practice, I&rsquo;m
                an avid reader and lifelong learner with a passion for interior
                design, gardening, and the outdoors. Whether hiking in the
                mountains, boating on the lake, or tending my rose bushes and
                vegetable garden, I bring the same mindfulness and joy to
                everyday life that I strive to help my clients cultivate in
                theirs.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-8 text-right font-display text-2xl italic text-ink md:text-3xl">
                — Lisa Larkins Morton, LPC
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          3 · CREDENTIALS & MODALITIES  (light) — glass cards, stagger
         ============================================================ */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-luxe">
          <Reveal>
            <SectionHeading
              eyebrow="TRAINING & APPROACH"
              title="Credentials & modalities"
              subtitle="Evidence-based methods, woven together with warmth — chosen and paced for the person in the room."
              align="center"
            />
          </Reveal>

          <RevealStagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map(({ icon: Icon, label, description }) => (
              <RevealItem key={label} className="h-full">
                <GlassCard hover className="flex h-full flex-col p-7">
                  <span
                    className="bg-brand inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_12px_30px_-12px_rgba(124,58,237,0.6)]"
                    aria-hidden="true"
                  >
                    <Icon size={24} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.01em] text-ink">
                    {label}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7] text-ink-soft">
                    {description}
                  </p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ============================================================
          4 · CTA BAND  (dark gradient + aurora)
         ============================================================ */}
      <section className="bg-cta-dark relative overflow-hidden py-28 md:py-36">
        <AuroraBackground variant="dark" className="bg-transparent" />

        <div className="container-luxe relative z-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow eyebrow-on-dark mb-5">
              Begin when you&rsquo;re ready
            </p>
            <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-white md:text-5xl">
              Let&rsquo;s start this journey together
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-lavender-100/85 md:text-lg">
              Your first 15-minute consultation is complimentary — a relaxed,
              no-pressure conversation about where you are and where you&rsquo;d
              like to be. I&rsquo;d be honored to walk alongside you.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <GradientButton href="/contact" variant="primary" size="lg">
                Book a free consultation
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
