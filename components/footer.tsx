import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, LifeBuoy } from "lucide-react";
import { site } from "@/lib/site";
import logoMarkWhite from "../assets/logo-mark-white.png";

/**
 * Footer — BUILD_SPEC §5.
 * Dark indigo-gradient footer: wordmark + tagline, quick nav, contact block
 * (address, click-to-call phone, mailto email, hours), champagne hairline,
 * © {year} line, and the 988 crisis line. No client hooks — server component.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cta-dark relative overflow-hidden text-lavender-100">
      <div className="container-luxe relative z-10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300"
              aria-label={`${site.name} — home`}
            >
              <Image
                src={logoMarkWhite}
                alt=""
                aria-hidden="true"
                className="h-11 w-auto"
              />
              <span className="font-display text-2xl font-semibold tracking-[-0.01em] text-white">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm font-display text-lg italic text-lavender-200/90">
              {site.tagline}
            </p>
            <p className="mt-3 text-sm text-lavender-200/70">{site.therapist}</p>
          </div>

          {/* Quick nav */}
          <nav aria-label="Footer" className="md:col-span-3">
            <h3 className="eyebrow eyebrow-on-dark mb-5">Explore</h3>
            <ul className="space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[28px] items-center text-sm text-lavender-100/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="eyebrow eyebrow-on-dark mb-5">Get in touch</h3>
            <p className="mb-4 text-sm text-lavender-100/70">
              {site.locationsTagline}
            </p>
            <ul className="space-y-4 text-sm">
              {site.locations.map((loc) => (
                <li key={loc.label} className="flex items-start gap-3">
                  <MapPin size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-lavender-300" aria-hidden="true" />
                  <span className="text-lavender-100/85">
                    <span className="font-medium text-white">{loc.label}</span>
                    <br />
                    {loc.lines.join(", ")}
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Phone size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-lavender-300" aria-hidden="true" />
                <a
                  href={site.phoneHref}
                  className="text-lavender-100/85 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-lavender-300" aria-hidden="true" />
                <a
                  href={site.emailHref}
                  className="break-all text-lavender-100/85 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-lavender-300" aria-hidden="true" />
                <span className="text-lavender-100/85">{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="champagne-hairline my-10" />

        {/* Crisis line */}
        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <LifeBuoy size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-champagne-soft" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-lavender-100/85">
            In crisis? Call or text{" "}
            <a
              href="tel:988"
              className="font-semibold text-white underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300"
            >
              988
            </a>{" "}
            (Suicide &amp; Crisis Lifeline), or dial{" "}
            <a
              href="tel:911"
              className="font-semibold text-white underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300"
            >
              911
            </a>{" "}
            in an emergency.
          </p>
        </div>

        {/* Bottom row */}
        <p className="mt-8 text-xs text-lavender-200/60">
          © {year} Indigo Counseling &amp; Wellness · Mount Pleasant, SC
        </p>
      </div>
    </footer>
  );
}
