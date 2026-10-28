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


export const metadata = {
  title: "Harun Or Roshid - Full Stack Developer",

  description:
    "Portfolio of Harun Or Roshid, a Full Stack Developer specializing in React, Next.js, Node.js, MongoDB and modern web development.",

  keywords: [
    "Harun Or Roshid",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
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
