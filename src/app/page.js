
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Certificates from "@/components/Certificates";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience/>
        <Certificates />
        <Contact />
      </main>
       <Footer/>
    </>
  );
}
