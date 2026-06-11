import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mohammed Fares | Software Engineer",
  description: "Software Engineer with a strong command of the full SDLC — from requirements gathering and database architecture to backend development and frontend implementation.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Mohammed Fares",
    "Laravel",
    "React",
    "TypeScript",
    "PHP",
    "Python"
  ],
  authors: [{ name: "Mohammed Fares" }],
  openGraph: {
    title: "Mohammed Fares | Software Engineer",
    description: "I build end-to-end solutions — from system architecture and database design to polished, performant user interfaces.",
    url: "https://mohammedfares.dev",
    siteName: "Mohammed Fares Portfolio",
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full scroll-smooth`}
    >
      <body className="bg-background text-foreground font-sans antialiased min-h-screen selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
