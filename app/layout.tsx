import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"], display: "swap" });

const title = "Starixis | Digital Commerce for Physical Retail";
const description = "Starixis is developing technology designed to help physical retail evolve for a more connected world.";
const openGraphTitle = "The Digital Commerce Layer for Physical Retail | Starixis";
const openGraphDescription = "Technology for a more connected relationship between digital commerce and real-world retail environments.";

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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: openGraphTitle, type: "image/png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: openGraphTitle,
    description: openGraphDescription,
    images: ["/og.png"],
  },
};

// CloudWatch RUM. Cookies are disabled, so nothing is stored on or read from the
// visitor's device and no consent banner is required — see infra/terraform/rum.tf.
// Renders only when both IDs are present at build time, so nothing loads until it
// is configured. The privacy notice must describe whatever this actually does.
const rumAppId = process.env.NEXT_PUBLIC_RUM_APP_ID;
const rumIdentityPoolId = process.env.NEXT_PUBLIC_RUM_IDENTITY_POOL_ID;
const rumRegion = process.env.NEXT_PUBLIC_RUM_REGION ?? "eu-west-2";

const rumSnippet = (appId: string, identityPoolId: string, region: string) => `
(function(n,i,v,r,s,c,x,z){x=window.AwsRumClient={q:[],n:n,i:i,v:v,r:r,c:c};window[n]=function(c,p){x.q.push({c:c,p:p});};
z=document.createElement('script');z.async=true;z.src=s;document.head.insertBefore(z,document.head.getElementsByTagName('script')[0]);
})('cwr','${appId}','1.0.0','${region}','https://client.rum.us-east-1.amazonaws.com/1.x/cwr.js',
{sessionSampleRate:1,identityPoolId:'${identityPoolId}',endpoint:'https://dataplane.rum.${region}.amazonaws.com',telemetries:['performance','errors'],allowCookies:false,enableXRay:false});
`;

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
      sameAs: ["https://www.linkedin.com/in/yogesh-nagar-uk/"],
    },
  };
  return (
    <html lang="en-GB" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        {rumAppId && rumIdentityPoolId && (
          <script dangerouslySetInnerHTML={{ __html: rumSnippet(rumAppId, rumIdentityPoolId, rumRegion) }} />
        )}
      </body>
    </html>
  );
}
