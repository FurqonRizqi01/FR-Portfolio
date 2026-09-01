import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.scss";
import SmoothScroll from "@/components/providers/SmoothScroll";
import PageTransition from "@/components/providers/PageTransition";
import Cursor from "@/components/ui/Cursor";
import Preloader from "@/components/ui/Preloader";
import ScrollTop from "@/components/ui/ScrollTop";


const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
    "700",
  ],
  variable: "--font-display",
});


const inter = Inter({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
  ],
  variable: "--font-body",
});


export const metadata: Metadata = {
  title: "Muhammad Furqon Rizqi | Software Engineer",
  description:
    "Portfolio of Muhammad Furqon Rizqi, Software Engineer and Full-Stack Developer.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
        <body className={`${barlow.variable} ${inter.variable}`}>
            <Preloader />
            <Cursor />
            <ScrollTop />
            <SmoothScroll />
            <PageTransition />

            {children}
        </body>
    </html>
  );
}
