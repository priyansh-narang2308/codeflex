import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ConvexClerkProvider from "@/providers/ConvexWithClerkProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeFlex AI - Get Jacked",
  description: "AI Fitness Trainer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>

      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>

            <div className="absolute inset-0 
    bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] 
    bg-[size:20px_20px] 
    opacity-10 
    blur-[1px]">
            </div>

            <div className="absolute inset-0 
    bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] 
    bg-[size:20px_20px] 
    opacity-20">
            </div>

            <div className="absolute inset-0 
    bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] 
    bg-[size:20px_20px] 
    animate-pulse 
    opacity-5">
            </div>
          </div>


          <main className="pt-24 flex-grow">

            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
