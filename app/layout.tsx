import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indigo Counseling & Wellness — an innovative approach to therapy",
  description:
    "Indigo Counseling & Wellness — a luxury, mind-body therapy practice in Mount Pleasant / Charleston, SC, led by Lisa Larkins Morton, LPC. Compassionate, judgment-free counseling. EMDR & DBT trained. Evening & weekend hours. Your first 15-minute consultation is complimentary.",
  metadataBase: new URL("https://indigocounselingandwellness.com"),
  openGraph: {
    title: "Indigo Counseling & Wellness — an innovative approach to therapy",
    description:
      "Compassionate, judgment-free therapy in Mount Pleasant / Charleston, SC. EMDR & DBT trained. Free 15-minute consultation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          <main id="main" className="min-h-dvh">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
