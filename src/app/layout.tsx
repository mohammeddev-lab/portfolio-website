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
  title: "Mohammed Fares | Backend Developer & API Architect",
  description: "Senior Backend Developer and API Architect specializing in building scalable backend systems, microservices, NestJS, Laravel, cloud infrastructure, and database optimization.",
  keywords: [
    "Backend Developer",
    "API Architect",
    "System Designer",
    "Mohammed Fares",
    "Laravel",
    "PHP",
    "NodeJS",
    "NestJS",
    "Docker",
    "AWS",
    "PostgreSQL",
    "Microservices"
  ],
  authors: [{ name: "Mohammed Fares" }],
  openGraph: {
    title: "Mohammed Fares | Backend Developer & API Architect",
    description: "I build scalable backend systems, REST APIs, microservices, and cloud-native applications focused on performance, security, and reliability.",
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
