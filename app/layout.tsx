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
  title: "MelloRemote - Land Your Dream Remote Job in 30 Days",
  description: "Average people are making $500 - $2,500 per month working from home with MelloRemote Access. Get the skills, job boards, and insider strategies to secure a financially rewarding remote job fast.",
  keywords: ["remote jobs", "work from home", "remote work", "online jobs", "remote career", "MelloRemote", "remote job training", "work remotely", "freelance jobs", "remote job course"],
  authors: [{ name: "MelloRemote" }],
  creator: "MelloRemote",
  publisher: "MelloRemote",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mello-remote.vercel.app",
    siteName: "MelloRemote",
    title: "MelloRemote - Land Your Dream Remote Job in 30 Days",
    description: "Average people are making $500 - $2,500 per month working from home. Join thousands who've transformed their careers with MelloRemote Access.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "MelloRemote Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MelloRemote - Land Your Dream Remote Job in 30 Days",
    description: "Average people are making $500 - $2,500 per month working from home. Join thousands who've transformed their careers with MelloRemote Access.",
    images: ["/icon.png"],
    creator: "@MelloRemote",
  },
  metadataBase: new URL("https://mello-remote.vercel.app"),
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
      >
        {children}
      </body>
    </html>
  );
}
