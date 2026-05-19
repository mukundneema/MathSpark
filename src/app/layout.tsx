import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Math Spark | Igniting a Passion for Mathematics",
  description: "Expert math tutoring for elementary and middle school students. Join Math Spark to build confidence and mastery through personalized 1-on-1 sessions.",
  openGraph: {
    title: "Math Spark | Igniting a Passion for Mathematics",
    description: "Expert math tutoring for elementary and middle school students. Join Math Spark to build confidence and mastery.",
    url: "https://mathspark.edu",
    siteName: "Math Spark",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Math Spark | Igniting a Passion for Mathematics",
    description: "Expert math tutoring for elementary and middle school students.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
