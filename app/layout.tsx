import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_LEGAL_NAME, BUSINESS_ADDRESS } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Event Management Platform | Nisarga Enterprises",
    template: "%s | Nisarga Events",
  },
  description:
    "Nisarga Enterprises - Professional event management platform for corporate events, weddings, conferences, and celebrations. Plan, manage, and execute memorable events.",
  keywords: [
    "event management",
    "event planning",
    "corporate events",
    "wedding events",
    "conference management",
    "event booking",
    "event organizer",
  ],
  authors: [{ name: SITE_LEGAL_NAME }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Event Management Platform | Nisarga Enterprises",
    description:
      "Professional event management and planning platform for all types of events.",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary",
    title: "Event Management Platform | Nisarga Enterprises",
    description:
      "Professional event management and planning platform for all types of events.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_LEGAL_NAME,
              url: SITE_URL,
              description: "Professional event management platform",
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS_ADDRESS.streetAddress,
                addressLocality: BUSINESS_ADDRESS.addressLocality,
                addressRegion: BUSINESS_ADDRESS.addressRegion,
                postalCode: BUSINESS_ADDRESS.postalCode,
                addressCountry: BUSINESS_ADDRESS.addressCountry,
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
