import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://x-buctech.com"),
  title: {
    default: "X-BUC TECH | IT and Cybersecurity Solutions",
    template: "%s | X-BUC TECH",
  },
  description:
    "Practical IT and cybersecurity solutions that help businesses reduce risk, protect critical systems, and operate confidently.",
  applicationName: "X-BUC TECH",
  keywords: [
    "IT and cybersecurity services",
    "managed IT services",
    "cybersecurity solutions",
    "cloud infrastructure",
    "IT support",
    "compliance support",
    "network visibility",
    "software testing",
    "Austin IT services",
  ],
  authors: [{ name: "X-BUC TECH" }],
  creator: "X-BUC TECH",
  publisher: "X-BUC TECH",
  verification: {
    google: "z_MkeforSz_85xlRgmmXIV42sZXk_z6LprvbZ5AZKWk",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://x-buctech.com",
    siteName: "X-BUC TECH",
    title: "X-BUC TECH | IT and Cybersecurity Solutions",
    description:
      "Practical IT and cybersecurity solutions that help businesses reduce risk, protect critical systems, and operate confidently.",
  },
  twitter: {
    card: "summary_large_image",
    title: "X-BUC TECH | IT and Cybersecurity Solutions",
    description:
      "Practical IT and cybersecurity solutions that help businesses reduce risk, protect critical systems, and operate confidently.",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "X-BUC TECH",
  url: "https://x-buctech.com",
  email: "info@x-buctech.com",
  telephone: "+1-512-584-6924",
  description:
    "Practical IT and cybersecurity solutions that help businesses reduce risk, protect critical systems, and operate confidently.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14205 N Mopac Expy #500",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78728",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/x-buctech/",
    "https://x.com/x-buctech",
    "https://www.instagram.com/x-buctech/",
    "https://www.facebook.com/profile.php?id=61594184391657",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}