export const site = {
  name: "Indigo Counseling & Wellness",
  tagline: "an innovative approach to therapy",
  therapist: "Lisa Larkins Morton, LPC",
  phone: "843.367.5452",
  phoneHref: "tel:+18433675452",
  email: "lisa@indigocounselingandwellness.com",
  emailHref: "mailto:lisa@indigocounselingandwellness.com",
  address: "207 Simmons Street, Mount Pleasant, SC",
  mapQuery: "207 Simmons Street, Mount Pleasant, SC",
  hours: "Evening & weekend hours available",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Specialties", href: "/specialties" },
    { label: "Rates", href: "/rates" },
    { label: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof site;
