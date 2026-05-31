import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/effects/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md Didarul Alam Alif | Cybersecurity Engineer & System Engineer",
  description:
    "Portfolio of Md Didarul Alam Alif — Offensive security-driven VAPT Specialist, Assistant System Engineer, and Full Stack Developer. Discover security write-ups, network engineering, and tools.",
  keywords: [
    "cybersecurity", "VAPT", "penetration testing", "system engineer",
    "offensive security", "security analyst", "network security", "full stack developer",
    "red team operator", "web security", "port scanner", "ReconScience",
  ],
  authors: [{ name: "Md Didarul Alam Alif" }],
  openGraph: {
    type: "website",
    title: "Md Didarul Alam Alif | Cybersecurity Engineer & System Engineer",
    description: "Offensive security-driven VAPT Specialist, Assistant System Engineer, and Full Stack Developer.",
    siteName: "Md Didarul Alam Alif Portfolio",
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
      data-theme="light"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-bg-primary text-text-primary selection:bg-accent-blue/30 selection:text-white">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
