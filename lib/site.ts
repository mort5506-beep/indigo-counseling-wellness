export const site = {
  name: "Indigo Counseling & Wellness",
  tagline: "an innovative approach to therapy",
  therapist: "Lisa Larkins Morton, LPC",
  phone: "843.367.5452",
  phoneHref: "tel:+18433675452",
  email: "lisa@indigocounselingandwellness.com",
  emailHref: "mailto:lisa@indigocounselingandwellness.com",
  address: "207 Simmons Street, Mount Pleasant, SC 29464",
  mapQuery: "207 Simmons Street, Mount Pleasant, SC 29464",
  hours: "Evening & weekend hours available",
  locationsTagline: "Two locations for your convenience across the Charleston area",
  locations: [
    {
      label: "Mount Pleasant",
      lines: ["207 Simmons Street", "Mount Pleasant, SC 29464"],
      address: "207 Simmons Street, Mount Pleasant, SC 29464",
      mapQuery: "207 Simmons Street, Mount Pleasant, SC 29464",
    },
    {
      label: "Charleston",
      lines: ["1 Carriage Lane, Building D, 2nd Floor", "Charleston, SC 29407"],
      address: "1 Carriage Lane, Building D, 2nd Floor, Charleston, SC 29407",
      mapQuery: "1 Carriage Lane, Charleston, SC 29407",
    },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Specialties", href: "/specialties" },
    { label: "Rates", href: "/rates" },
    { label: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof site;
