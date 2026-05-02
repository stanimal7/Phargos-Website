import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phargos — AI-Native ERP for Distribution Operators | Hardwood & Building Products",
  description:
    "Phargos is the AI-native ERP platform built for hardwood flooring, lumber, and building products distributors. Deploys in days. No consultants. No implementation fees. Request a demo.",
  openGraph: {
    type: "website",
    url: "https://phargos.ai",
    title: "Phargos — AI-Native ERP for Distribution Operators",
    description:
      "The ERP platform built for hardwood, lumber, and building products distributors. Deploys in days, not months.",
    images: [
      {
        url: "https://phargos.ai/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
