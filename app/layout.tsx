import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/cv";
import "./globals.css";

const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });
const heading = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-heading" });

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.title}`,
  description: profile.summary,
  openGraph: {
    title: `${profile.name} · ${profile.title}`,
    description: profile.summary,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
