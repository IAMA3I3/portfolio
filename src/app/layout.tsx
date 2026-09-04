import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { siteUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdulazeez Salami",
  jobTitle: "Web Developer",
  url: siteUrl,
  image: `${siteUrl}/assets/me.webp`,
  email: "mailto:abdulazeezsalami19@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/abdulazeezsalami19/",
    "https://web.facebook.com/profile.php?id=100084453611899",
    "https://www.instagram.com/_az_ziz/",
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Abdulazeez Salami – Web Developer",
    template: "%s | Abdulazeez Salami",
  },
  icons: {
    icon: "/assets/ic.png"
  },
  description:
    "Web developer specializing in React, Next.js, TypeScript, and full-stack web applications.",
  keywords: [
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Abdulazeez Salami" }],
  creator: "Abdulazeez Salami",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Abdulazeez Salami – Web Developer",
    description:
      "Web developer building clean, modern, and scalable web applications.",
    url: siteUrl,
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
    title: "Abdulazeez Salami – Web Developer",
    description:
      "Web developer specializing in React, Next.js, and TypeScript.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
