import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xbuctech.com"),
  title: {
    default: "XBUC TECH | IT and Cybersecurity Solutions",
    template: "%s | XBUC TECH",
  },
  description:
    "Practical IT and cybersecurity solutions that help businesses reduce risk, protect critical systems, and operate confidently.",
  applicationName: "XBUC TECH",
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
  authors: [{ name: "XBUC TECH" }],
  creator: "XBUC TECH",
  publisher: "XBUC TECH",
  verification: {
    google: "z_MkeforSz_85xlRgmmXIV42sZXk_z6LprvbZ5AZKWk",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xbuctech.com",
    siteName: "XBUC TECH",
    title: "XBUC TECH | IT and Cybersecurity Solutions",
    description:
      "Practical IT and cybersecurity solutions that help businesses reduce risk, protect critical systems, and operate confidently.",
  },
  twitter: {
    card: "summary",
    title: "XBUC TECH | IT and Cybersecurity Solutions",
    description:
      "Practical IT and cybersecurity solutions that help businesses reduce risk, protect critical systems, and operate confidently.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}