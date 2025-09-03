'use client';

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Enhanced progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 z-50 shadow-lg"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <Header onNavigate={scrollToSection} />

      <main>
        <HeroSection
          name="Your Name"
          title="Full-Stack Developer"
          specializations={["React", "TypeScript", "Django", "Expo", "Firebase", "Vercel"]}
        />

        <div ref={skillsRef}>
          <SkillsSection />
        </div>

        <div ref={projectsRef}>
          <ProjectsSection />
        </div>

        <div ref={contactRef}>
          <ContactSection
            email="your.email@example.com"
            phone="+1 (555) 123-4567"
            location="Your City, Country"
          />
        </div>
      </main>

      <Footer
        socialLinks={{
          github: "https://github.com/yourusername",
          linkedin: "https://linkedin.com/in/yourprofile",
          email: "mailto:your.email@example.com",
        }}
      />
    </div>
  );
}