import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <CodingProfiles />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2024 Harish R. Built with React & Framer Motion</p>
      </footer>
    </div>
  );
};

export default Index;
