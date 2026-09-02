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

  metadataBase: new URL(SITE_URL),


  title: {
    default:
      "Muhammad Furqon Rizqi | Software Engineer & Full Stack Developer",

    template:
      "%s | Muhammad Furqon Rizqi",
  },


  description:
    "Official portfolio of Muhammad Furqon Rizqi, Software Engineer and Full Stack Developer specializing in React, Next.js, Laravel, Golang, and modern web applications.",


  keywords: [
    "Muhammad Furqon Rizqi",
    "Furqon Rizqi",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Golang Developer",
    "Web Developer Indonesia",
  ],


  authors: [
    {
      name:
        "Muhammad Furqon Rizqi",
      url:
        SITE_URL,
    },
  ],


  creator:
    "Muhammad Furqon Rizqi",


  publisher:
    "Muhammad Furqon Rizqi",


  category:
    "technology",


  robots: {

    index:
      true,

    follow:
      true,

    googleBot: {

      index:
        true,

      follow:
        true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,

    },
  },


  openGraph: {

    type:
      "website",

    url:
      SITE_URL,

    title:
      "Muhammad Furqon Rizqi | Software Engineer & Full Stack Developer",

    description:
      "Portfolio of Muhammad Furqon Rizqi showcasing modern web applications, software engineering projects, and technical experience.",

    siteName:
      "FR Portfolio",


    locale:
      "id_ID",


    images: [

      {

        url:
          "/og-image.png",

        width:
          1200,

        height:
          630,

        alt:
          "Muhammad Furqon Rizqi Portfolio",

      },

    ],

  },



  twitter: {

    card:
      "summary_large_image",

    title:
      "Muhammad Furqon Rizqi | Software Engineer",

    description:
      "Full Stack Developer portfolio showcasing React, Next.js, Laravel, and Golang projects.",


    images: [
      "/og-image.png",
    ],

  },


};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  const personJsonLd = {

    "@context":
      "https://schema.org",


    "@type":
      "Person",


    name:
      "Muhammad Furqon Rizqi",


    alternateName: [
      "Furqon Rizqi",
      "FR Portfolio",
    ],


    jobTitle:
      "Software Engineer",


    description:
      "Software Engineer and Full Stack Developer building modern frontend, backend, and scalable web applications.",


    url:
      SITE_URL,


    image:
      `${SITE_URL}/images/profile/furqon-bg.png`,


    worksFor: {

      "@type":
        "Organization",

      name:
        "Independent Software Engineer",

    },


    sameAs: [

      "https://github.com/FurqonRizqi01",

      "https://www.linkedin.com/in/muhammad-furqon-rizqi-57b025258/",

      "https://discord.com/users/614950521794461714",

    ],


    knowsAbout: [

      "Software Engineering",

      "Full Stack Development",

      "React",

      "Next.js",

      "Laravel",

      "Golang",

      "Database Design",

      "Web Application Development",

    ],

  };




  const websiteJsonLd = {

    "@context":
      "https://schema.org",


    "@type":
      "WebSite",


    name:
      "Muhammad Furqon Rizqi Portfolio",


    url:
      SITE_URL,


  };



  return (

    <html lang="en">

      <body
        className={`${barlow.variable} ${inter.variable}`}
      >


        <script

          type="application/ld+json"

          dangerouslySetInnerHTML={{

            __html:
              JSON.stringify([
                personJsonLd,
                websiteJsonLd,
              ])
              .replace(/</g, "\\u003c"),

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