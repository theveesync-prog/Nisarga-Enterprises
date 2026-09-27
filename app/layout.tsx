import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_LEGAL_NAME,
  BUSINESS_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_TEL,
  FOUNDING_YEAR,
} from "@/lib/constants";
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

const TITLE = "Nisarga Publicity | Premium Advertising & Event Management Company in Mangaluru Since 1996";
const DESCRIPTION =
  "Coastal Karnataka's full-service advertising and event management agency since 1996. Authorized railway & transit advertiser. The partner of record for government, corporate and large-scale brand activations in Mangaluru & Udupi.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Nisarga Publicity",
  },
  description: DESCRIPTION,
  keywords: [
    "event management company Mangalore",
    "advertising agency Mangalore",
    "outdoor advertising Udupi",
    "corporate event management Karnataka",
    "railway station branding India",
    "premium event agency coastal Karnataka",
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
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
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
        {/* AdvertisingAgency Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AdvertisingAgency",
              name: SITE_LEGAL_NAME,
              url: SITE_URL,
              description: DESCRIPTION,
              foundingDate: `${FOUNDING_YEAR}`,
              email: CONTACT_EMAIL,
              telephone: CONTACT_PHONE_TEL,
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
