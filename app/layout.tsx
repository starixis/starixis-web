import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"], display: "swap" });

const title = "Starixis | Digitally Transforming Physical Shopping";
const description = "Starixis is a UK retail technology company building the digital commerce layer for physical retail, connecting shoppers, retailers and shopping destinations.";
const openGraphTitle = "Digitally Transforming Physical Shopping | Starixis";
const openGraphDescription = "Building connected digital commerce experiences for shoppers, retailers and physical shopping destinations.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.starixis.com"),
  title,
  description,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "64x64", type: "image/x-icon" },
      { url: "/starixis-icon.svg", type: "image/svg+xml" },
      { url: "/starixis-icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/starixis-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/starixis-icon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/starixis-icon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/starixis-icon-256.png", sizes: "256x256", type: "image/png" },
      { url: "/starixis-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/starixis-icon-32.png",
    apple: [{ url: "/starixis-app-icon-1024.png", sizes: "1024x1024", type: "image/png" }],
  },
  openGraph: {
    title: openGraphTitle,
    description: openGraphDescription,
    url: "https://www.starixis.com",
    siteName: "Starixis",
    images: ["/og-image.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: openGraphTitle,
    description: openGraphDescription,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Starixis Limited",
    legalName: "Starixis Limited",
    alternateName: "Starixis",
    description,
    url: "https://www.starixis.com",
    logo: "https://www.starixis.com/starixis-icon-512.png",
    sameAs: ["https://www.linkedin.com/company/starixis"],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Companies House",
      value: "17356742",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "71-75 Shelton Street",
      addressLocality: "London",
      postalCode: "WC2H 9JQ",
      addressCountry: "GB",
    },
    founder: {
      "@type": "Person",
      name: "Yogesh Nagar",
      jobTitle: "Founder",
      image: "https://www.starixis.com/yogesh-nagar-founder-starixis.jpg",
    },
  };
  return (
    <html lang="en-GB" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
