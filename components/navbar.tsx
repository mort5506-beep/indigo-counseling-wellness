"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";
import GradientButton from "@/components/gradient-button";
import logoMark from "../assets/logo-mark.png";
import logoMarkWhite from "../assets/logo-mark-white.png";

/**
 * Navbar — BUILD_SPEC §5 / §4.
 * Sticky top, transparent at top → glass after 24px scroll. Wordmark links home.
 * Active link state via usePathname. Mobile hamburger opens an accessible glass
 * overlay (focus-trappable, closes on route change + Esc). "Book free consult"
 * CTA → /contact. All targets ≥44px, focus rings, cursor-pointer.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll-aware glass
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Esc + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "glass border-b border-white/40 shadow-[0_8px_30px_-12px_rgba(43,16,101,0.18)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-luxe flex h-[72px] items-center justify-between"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 rounded-lg py-2 pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
          aria-label={`${site.name} — home`}
        >
          <Image
            src={scrolled ? logoMark : logoMarkWhite}
            alt=""
            aria-hidden="true"
            priority
            className="h-10 w-auto transition-opacity duration-300"
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-xl font-semibold leading-none tracking-[-0.01em] transition-colors duration-300 ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              Indigo
            </span>
            <span
              className={`mt-1 text-[0.6rem] font-semibold uppercase leading-none tracking-[0.22em] transition-colors duration-300 ${
                scrolled ? "text-champagne" : "text-lavender-300"
              }`}
            >
              Counseling &amp; Wellness
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative inline-flex min-h-[44px] items-center rounded-full px-4 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 ${
                  isActive(item.href)
                    ? scrolled
                      ? "text-violet-700"
                      : "text-white"
                    : scrolled
                      ? "text-ink-soft hover:text-ink"
                      : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span
                    aria-hidden="true"
                    className="bg-brand absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <GradientButton href="/contact" variant="primary" size="md">
            Book free consult
          </GradientButton>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-violet-600/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 lg:hidden ${
            scrolled || open ? "text-ink" : "text-white"
          }`}
        >
          {open ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Scrim */}
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={`fixed inset-0 z-40 bg-indigo-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Panel */}
        <div
          className={`glass fixed inset-x-3 top-[80px] z-50 origin-top rounded-[22px] border border-white/50 p-5 shadow-[0_30px_80px_-24px_rgba(43,16,101,0.35)] transition-all duration-300 ease-out ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-[48px] items-center rounded-xl px-4 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 ${
                    isActive(item.href)
                      ? "bg-violet-600/10 text-violet-700"
                      : "text-ink hover:bg-violet-600/5"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <hr className="champagne-hairline my-4" />

          <div className="flex flex-col gap-3">
            <GradientButton
              href="/contact"
              variant="primary"
              size="md"
              className="w-full"
            >
              Book free consult
            </GradientButton>
            <a
              href={site.phoneHref}
              tabIndex={open ? 0 : -1}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-4 text-sm font-medium text-ink-soft transition-colors hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
            >
              <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
