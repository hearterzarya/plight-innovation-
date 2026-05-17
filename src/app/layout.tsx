import type { Metadata } from "next";
import { Inter, Sora, Instrument_Serif } from "next/font/google";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { siteMetadata } from "@/lib/site-metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  ...siteMetadata,
  keywords: [
    "AI wildlife monitoring system",
    "wildlife repellent device",
    "human-animal conflict solution",
    "smart rural protection system",
    "AI wildlife safety technology",
    "forest fire detection AI",
    "Jim Corbett wildlife technology",
    "wildlife safety device India",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-bg-deep font-sans text-text-soft antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
