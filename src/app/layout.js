import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {
  siteName,
  siteUrl,
  siteTitle,
  siteDescription,
} from "@/lib/seo";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  keywords: [
    "Harun Or Roshid",
    "Harun Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
  ],

  authors: [
    {
      name: siteName,
      url: siteUrl,
    },
  ],

  creator: siteName,

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {children}
       
        </body>
        
    </html>
  );
}
