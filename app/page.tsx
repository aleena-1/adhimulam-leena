import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import PremiumBackground from "@/components/PremiumBackground";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Interactive from "@/components/sections/Interactive";
import Leadership from "@/components/sections/Leadership";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <PremiumBackground />
      <Loader />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Interactive />
        <Projects />
        <Skills />
        <Research />
        <Certifications />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
