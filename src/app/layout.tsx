import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abdulazeez Salami – Frontend Developer",
    template: "%s | Abdulazeez Salami",
  },
  icons: {
    icon: "/assets/ic.png"
  },
  description:
    "Frontend developer specializing in React, Next.js, TypeScript, and modern web interfaces.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Web Developer",
  ],
  authors: [{ name: "Abdulazeez Salami" }],
  creator: "Abdulazeez Salami",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Abdulazeez Salami – Frontend Developer",
    description:
      "Frontend developer building clean, modern, and scalable web applications.",
    url: "https://your-domain.com",
    siteName: "Abdulazeez Salami Portfolio",
    images: [
      {
        url: "/assets/ic.png",
        width: 1200,
        height: 630,
        alt: "Abdulazeez Salami Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulazeez Salami – Frontend Developer",
    description:
      "Frontend developer specializing in React, Next.js, and TypeScript.",
    images: ["/assets/ic.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-default`}
      >
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
