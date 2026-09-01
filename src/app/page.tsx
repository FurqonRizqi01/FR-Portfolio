import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Profile from "@/components/sections/Profile";
import ProfileCredentials from "@/components/sections/ProfileCredentials";
import Technologies from "@/components/sections/Technologies";
import Contact from "@/components/sections/Contact";
import Signature from "@/components/sections/Signature";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
        <Profile />
        <ProfileCredentials />
        <Technologies />
        <Contact />
        <Signature />
      </main>

      <Footer />
    </>
  );
}
