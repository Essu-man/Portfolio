import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    let ref;
    switch (section) {
      case "skills":
        ref = skillsRef;
        break;
      case "projects":
        ref = projectsRef;
        break;
      case "contact":
        ref = contactRef;
        break;
      default:
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-background">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <Header onNavigate={scrollToSection} />

      <main>
        <HeroSection
          name="John Doe"
          title="Full-Stack Developer"
          specializations={["React", "TypeScript", "Expo", "Django"]}
        />

        <div ref={skillsRef}>
          <SkillsSection />
        </div>

        <div ref={projectsRef}>
          <ProjectsSection />
        </div>

        <div ref={contactRef}>
          <ContactSection
            email="developer@example.com"
            phone="+1 (555) 123-4567"
            location="San Francisco, CA"
          />
        </div>
      </main>

      <Footer
        socialLinks={{
          github: "https://github.com",
          linkedin: "https://linkedin.com",
          twitter: "https://twitter.com",
          email: "mailto:contact@example.com",
        }}
      />
    </div>
  );
};

export default Home;
