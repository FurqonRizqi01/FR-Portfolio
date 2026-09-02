import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.scss";
import SmoothScroll from "@/components/providers/SmoothScroll";
import PageTransition from "@/components/providers/PageTransition";
import Cursor from "@/components/ui/Cursor";
import Preloader from "@/components/ui/Preloader";
import ScrollTop from "@/components/ui/ScrollTop";
import { SITE_URL } from "@/lib/site";


const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
    "700",
  ],
  variable: "--font-display",
  display: "swap",
});


const inter = Inter({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
  ],
  variable: "--font-body",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default:
    "Muhammad Furqon Rizqi | Software Engineer",
    
    template:
    "%s | Muhammad Furqon Rizqi"
  },


  description:
  "Muhammad Furqon Rizqi is a Software Engineer and Full-Stack Developer specializing in React, Next.js, Laravel, Golang, and scalable web applications.",


  keywords:[
    "Muhammad Furqon Rizqi",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Golang Developer",
  ],


  authors:[
    {
      name:
      "Muhammad Furqon Rizqi"
    }
  ],


  creator:
  "Muhammad Furqon Rizqi",


  metadataBase: new URL(SITE_URL),


  openGraph:{

    title:
    "Muhammad Furqon Rizqi | Software Engineer",

    description:
    "Portfolio of Muhammad Furqon Rizqi, a Full-Stack Developer building modern web applications.",

    url: SITE_URL,

    siteName:
    "FR Portfolio",

    images:[
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Furqon Rizqi Portfolio",
      }
    ],

    locale:
    "en_US",

    type:
    "website",

  },


  twitter:{

    card:
    "summary_large_image",

    title:
    "Muhammad Furqon Rizqi | Software Engineer",

    description:
    "Full-Stack Developer Portfolio",

    images:[
      "/og-image.png"
    ]

  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Furqon Rizqi",
    jobTitle: "Software Engineer",
    description:
      "Software Engineer and Full-Stack Developer building reliable web, backend, and mobile applications.",
    url: SITE_URL,
    image: `${SITE_URL}/images/profile/furqon-bg.png`,
    sameAs: [
      "https://github.com/FurqonRizqi01",
      "https://www.linkedin.com/in/muhammad-furqon-rizqi-57b025258/",
      "https://discord.com/users/614950521794461714",
    ],
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "React",
      "Next.js",
      "Laravel",
      "Golang",
    ],
  };

  return (
    <html lang="en">
        <body className={`${barlow.variable} ${inter.variable}`}>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
              }}
            />
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
