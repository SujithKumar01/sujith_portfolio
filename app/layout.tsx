import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujith Kumar | Machine Learning Engineer",
  description:
    "Machine Learning Engineer specializing in Audio AI, speaker diarization, noise reduction, and production-grade ML systems.",

  openGraph: {
    title: "Sujith Kumar | Machine Learning Engineer",
    description:
      "Production-grade ML systems for audio intelligence, large-scale pipelines, and speaker identification.",
    url: "https://YOUR-VERCEL-URL.vercel.app",
    siteName: "Sujith Kumar Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sujith Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
