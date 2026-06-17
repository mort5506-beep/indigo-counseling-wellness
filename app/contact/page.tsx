import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

import { site } from "@/lib/site";
import AuroraBackground from "@/components/aurora-background";
import Reveal, { RevealStagger, RevealItem } from "@/components/reveal";
import GlassCard from "@/components/glass-card";
import GradientButton from "@/components/gradient-button";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Indigo Counseling & Wellness",
  description:
    "Reach out to Indigo Counseling & Wellness in Mount Pleasant, SC. Call 843.367.5452 or visit 207 Simmons Street to book your complimentary 15-minute consultation with Lisa Larkins Morton, LPC. Evening & weekend hours available.",
};

/* ---------- contact details (BUILD_SPEC §1 facts, EXACT) ---------- */

const contactItems = [
  {
    icon: MapPin,
    label: "Visit",
    value: site.address,
    href: undefined as string | undefined,
  },
  {
    icon: Phone,
    label: "Call",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: site.emailHref,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Evening & weekend hours available",
    href: undefined as string | undefined,
  },
];

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.mapQuery,
)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      {/* ============================================================
          1 · HERO  (dark aurora)
         ============================================================ */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <AuroraBackground variant="dark" />

        <div className="container-luxe relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal as="p" className="eyebrow eyebrow-on-dark mb-6">
              Contact
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-white sm:text-5xl md:text-6xl">
                Take the first step
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-[1.75] text-lavender-100/85 md:text-lg">
                Reach out for your complimentary 15-minute consultation. If
                needed, you will hear back within 48&ndash;72 hours.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          2 · CONTACT INFO + FORM  (light / cream)
         ============================================================ */}
      <section className="relative overflow-hidden bg-cream py-20 md:py-28">
        <AuroraBackground variant="light" />

        <div className="container-luxe relative z-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
            {/* LEFT — contact details + map */}
            <div className="flex flex-col gap-6">
              <Reveal>
                <p className="eyebrow mb-3">Get in touch</p>
                <h2 className="font-display text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.01em] text-ink md:text-[2.25rem]">
                  We&rsquo;d love to hear from you
                </h2>
                <p className="mt-4 max-w-[52ch] text-base leading-[1.7] text-ink-soft">
                  Call, email, or send a note using the form. Whatever feels most
                  comfortable — there&rsquo;s no wrong way to begin.
                </p>
              </Reveal>

              {/* Contact detail cards */}
              <RevealStagger className="grid gap-4 sm:grid-cols-2">
                {contactItems.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <GlassCard
                      hover={Boolean(href)}
                      className="flex h-full items-start gap-4 p-5"
                    >
                      <span
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lavender-100 text-violet-700"
                        aria-hidden="true"
                      >
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <span className="flex flex-col">
                        <span className="eyebrow mb-1 text-[0.7rem]">{label}</span>
                        <span className="text-base font-medium leading-[1.5] text-ink">
                          {value}
                        </span>
                      </span>
                    </GlassCard>
                  );

                  return (
                    <RevealItem key={label} className="h-full">
                      {href ? (
                        <a
                          href={href}
                          className="block h-full min-h-[44px] rounded-[22px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                          aria-label={
                            label === "Call"
                              ? `Call ${site.name} at ${value}`
                              : `Email ${site.name} at ${value}`
                          }
                        >
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </RevealItem>
                  );
                })}
              </RevealStagger>

              {/* Google Map embed */}
              <Reveal delay={0.1}>
                <GlassCard className="overflow-hidden p-2">
                  <iframe
                    src={mapSrc}
                    title="Map to Indigo Counseling & Wellness"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[320px] w-full rounded-[16px] border-0 md:h-[360px]"
                  />
                </GlassCard>
              </Reveal>
            </div>

            {/* RIGHT — contact form */}
            <Reveal delay={0.12} className="h-full">
              <GlassCard className="h-full p-6 md:p-9">
                <h2 className="font-display text-[1.6rem] font-semibold leading-[1.15] tracking-[-0.01em] text-ink md:text-[1.9rem]">
                  Send a message
                </h2>
                <p className="mt-2 mb-7 text-sm leading-[1.7] text-ink-soft">
                  Fields marked <span className="text-violet-700">*</span> are
                  required.
                </p>
                <ContactForm />
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          3 · CTA / REASSURANCE BAND  (dark gradient + aurora)
         ============================================================ */}
      <section className="bg-cta-dark relative overflow-hidden py-24 md:py-32">
        <AuroraBackground variant="dark" className="bg-transparent" />

        <div className="container-luxe relative z-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow eyebrow-on-dark mb-5">You&rsquo;re welcome here</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-white md:text-5xl">
              Reaching out is the hardest part
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-lavender-100/85 md:text-lg">
              Whenever you&rsquo;re ready, we&rsquo;re here. Your first 15-minute
              consultation is complimentary — a calm, no-pressure conversation
              about where you are and where you&rsquo;d like to be.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                aria-label={`Call ${site.name} at ${site.phone}`}
              >
                <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full px-5 text-base font-medium text-lavender-100 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                aria-label={`Email ${site.name} at ${site.email}`}
              >
                <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
                Email us
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-sm text-lavender-100/70">
              <Clock
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
