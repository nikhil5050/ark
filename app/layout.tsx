import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "ARK Line Media | Photography, Videography & Content That Drives Business Growth",
  description: "ARK Line Media helps businesses grow through strategic photography, videography, branding and content creation across Maharashtra and India.",
  keywords: "Photography Company Maharashtra, Video Production Company Maharashtra, Corporate Video Production Pune, Real Estate Photography Pune, Real Estate Video Production, Brand Photography Pune, Corporate Photography Pune, Food Photography Pune, Restaurant Reels Pune, Personal Branding Photography Pune, Personal Branding Video Pune, Social Media Content Creation Pune, Drone Videography Pune, Media Production Company Pune"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-[#0a0a0a] text-[#f5f5f5]`}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
