import type { Metadata } from "next";
import {
  Sparkles,
  User,
  Heart,
  Users,
  Scale,
  CreditCard,
  FileText,
  Phone,
  ChevronDown,
  Check,
} from "lucide-react";

import { site } from "@/lib/site";
import AuroraBackground from "@/components/aurora-background";
import Reveal, { RevealStagger, RevealItem } from "@/components/reveal";
import GlassCard from "@/components/glass-card";
import GradientButton from "@/components/gradient-button";
import SectionHeading from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Rates & Insurance | Indigo Counseling & Wellness",
  description:
    "Simple, transparent therapy pricing in Mount Pleasant / Charleston, SC. Complimentary 15-minute consultation · Individual counseling $165 · Couples & family sessions $200 (60 min). Sliding-scale fees and payment plans available on an as-needed basis. We don't accept insurance, but provide documentation for out-of-network reimbursement.",
  alternates: { canonical: "/rates" },
};

/* ----------------------------- Data ----------------------------- */

const plans = [
  {
    name: "Initial Consultation",
    duration: "15 minutes",
    price: "Complimentary",
    note: "A relaxed, no-pressure conversation to see if we're the right fit.",
    icon: Sparkles,
    featured: true,
  },
  {
    name: "Individual Counseling",
    duration: "60 minutes",
    price: "$165",
    note: "One-on-one therapy at a pace that feels safe for you.",
    icon: User,
    featured: false,
  },
  {
    name: "Couples Counseling",
    duration: "60 minutes",
    price: "$200",
    note: "Rebuild connection, communication, and trust — together.",
    icon: Heart,
    featured: false,
  },
  {
    name: "Family Session",
    duration: "60 minutes",
    price: "$200",
    note: "Space for families to be heard and move forward as one.",
    icon: Users,
    featured: false,
  },
] as const;

const goodToKnow = [
  {
    title: "Sliding scale",
    icon: Scale,
    body: "On an as-needed basis, we offer sliding-scale fees based on your ability to pay, along with payment plans. If finances are a barrier to the support you need, let's talk.",
  },
  {
    title: "Payment methods",
    icon: CreditCard,
    body: "Cash, checks, and all major credit cards are accepted.",
  },
  {
    title: "Insurance & reimbursement",
    icon: FileText,
    body: "Indigo does not accept insurance, but we provide documentation for every session so you can file for reimbursement from an out-of-network provider.",
  },
] as const;

const faqs = [
  {
    q: "Do you accept insurance?",
    a: "Indigo does not accept insurance directly. However, we provide detailed documentation for every session so you can submit a claim to your insurer for out-of-network reimbursement. If you'd like help understanding what that looks like for your plan, just ask.",
  },
  {
    q: "What is the sliding scale?",
    a: "On an as-needed basis, we offer sliding-scale fees based on your ability to pay, along with payment plans. Cost should never be the reason you go without support — if finances are a barrier, let's have an honest conversation about what's possible.",
  },
  {
    q: "How do I get started?",
    a: "Begin with your complimentary 15-minute consultation — a relaxed conversation to see if we're a good fit, with no obligation. Evening and weekend hours are available to fit real life. When you're ready, reach out and we'll find a time that works for you.",
  },
] as const;

/* ----------------------------- Page ----------------------------- */

export default function RatesPage() {
  return (
    <>
      {/* 1 — HERO (dark aurora) */}
      <section className="relative overflow-hidden">
        <AuroraBackground variant="dark" />
        <div className="container-luxe relative z-10 pt-36 pb-16 text-center md:pt-44 md:pb-24">
          <Reveal>
            <p className="eyebrow eyebrow-on-dark mb-5">RATES</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.01em] text-white md:text-[4rem]">
              Simple, transparent pricing
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-[58ch] text-lg leading-[1.7] text-lavender-100/85 md:text-xl">
              Therapy is an investment — and at Indigo we work to make it
              possible for as many people as we can.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2 — PRICING CARDS (light / cream) */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <AuroraBackground variant="light" />
        <div className="container-luxe relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="WHAT IT COSTS"
              title="Sessions & fees"
              subtitle="Every journey starts with a complimentary 15-minute conversation. From there, sessions are 60 minutes — clear pricing, no surprises."
            />
          </Reveal>

          <RevealStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <RevealItem key={plan.name} className="h-full">
                  <GlassCard
                    hover
                    className={`relative flex h-full flex-col p-7 ${
                      plan.featured
                        ? "border-champagne/60 ring-1 ring-champagne/40 sm:-translate-y-2 sm:shadow-[0_30px_80px_-24px_rgba(43,16,101,0.30)]"
                        : ""
                    }`}
                  >
                    {plan.featured && (
                      <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_-8px_rgba(124,58,237,0.6)]">
                        <Sparkles className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                        Start here
                      </span>
                    )}

                    <span
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                        plan.featured
                          ? "bg-brand text-white"
                          : "bg-lavender-100 text-violet-700"
                      }`}
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>

                    <h3 className="font-sans text-base font-semibold tracking-wide text-ink">
                      {plan.name}
                    </h3>
                    <p className="mt-1 font-sans text-sm font-medium text-ink-faint">
                      {plan.duration}
                    </p>

                    <p
                      className={`mt-5 font-display font-semibold leading-none tracking-[-0.01em] tabular-nums ${
                        plan.featured
                          ? "text-gradient text-[2.5rem]"
                          : "text-ink text-[3rem]"
                      }`}
                    >
                      {plan.price}
                    </p>

                    <p className="mt-4 flex-1 font-sans text-sm leading-[1.65] text-ink-soft">
                      {plan.note}
                    </p>
                  </GlassCard>
                </RevealItem>
              );
            })}
          </RevealStagger>

          {/* Shared CTA below the grid */}
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center gap-4">
              <GradientButton href="/contact" size="lg">
                Book your free consultation
              </GradientButton>
              <p className="font-sans text-sm text-ink-faint">
                {site.hours}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — GOOD TO KNOW (light) */}
      <section className="relative overflow-hidden bg-surface py-24 md:py-32">
        <div className="container-luxe relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="GOOD TO KNOW"
              title="Making care accessible"
              subtitle="We believe support shouldn't be out of reach. Here's how we keep things flexible and clear."
            />
          </Reveal>

          <RevealStagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {goodToKnow.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title} className="h-full">
                  <GlassCard hover className="flex h-full flex-col p-8">
                    <span
                      className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender-100 text-violet-700"
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-sans text-base leading-[1.7] text-ink-soft">
                      {item.body}
                    </p>
                  </GlassCard>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* 4 — FAQ (light) — native <details> for no-JS accessibility */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <AuroraBackground variant="light" />
        <div className="container-luxe relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="QUESTIONS"
              title="Frequently asked"
            />
          </Reveal>

          <div className="mx-auto mt-12 max-w-3xl">
            <RevealStagger className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <RevealItem key={faq.q}>
                  <details className="group glass rounded-[22px] [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-[22px] px-6 py-5 font-display text-xl font-semibold tracking-[-0.01em] text-ink transition-colors duration-200 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 md:text-2xl">
                      <span>{faq.q}</span>
                      <ChevronDown
                        className="h-5 w-5 flex-shrink-0 text-violet-700 transition-transform duration-200 group-open:rotate-180"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="font-sans text-base leading-[1.7] text-ink-soft">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                </RevealItem>
              ))}
            </RevealStagger>

            <Reveal delay={0.1}>
              <p className="mt-8 flex items-center justify-center gap-2 text-center font-sans text-sm text-ink-soft">
                <Check className="h-4 w-4 text-sage-600" strokeWidth={2} aria-hidden="true" />
                Still have a question? We&rsquo;re happy to help — just reach out.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 — CTA BAND (dark) */}
      <section className="relative overflow-hidden bg-cta-dark">
        <AuroraBackground variant="dark" className="bg-transparent" />
        <div className="container-luxe relative z-10 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-[20ch] font-display text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.01em] text-white md:text-[3.25rem]">
              Ready to begin? Your first 15 minutes are on us.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GradientButton href="/contact" size="lg">
                Book your free consultation
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
