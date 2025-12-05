import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TranslationWrapper } from "../components/TranslationWrapper";
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
  title: "Aikia Labs - AI Implementation Training",
  description: "Learn AI implementation from the educator actually using it across multiple businesses. Practical AI training for European professionals and educators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <TranslationWrapper>
          {children}
        </TranslationWrapper>
      </body>
    </html>
  );
}
