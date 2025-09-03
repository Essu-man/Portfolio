'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: ProjectCardProps[];
}

const ProjectsSection = ({
  title = "My Projects",
  subtitle = "Check out some of my recent work across web, mobile, and backend development.",
  projects = [
    {
      id: "1",
      title: "Vehicle Transfer of Ownership System",
      description:
        "Designed for internal DVLA use to handle digital processing of vehicle ownership changes. Helped reduce paperwork and improve service delivery time by digitizing core parts of the workflow.",
      imageUrl:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
      category: "backend",
      technologies: ["Django", "Python", "PostgreSQL", "REST API"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: "2",
      title: "DV Plates Secretization System",
      description:
        "Built to validate and secure DV number plates through a digital process. Added backend logic to support data encryption and secure verification steps.",
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      category: "backend",
      technologies: ["Django", "Python", "PostgreSQL", "Encryption"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: "3",
      title: "LessonCraft (Mobile App)",
      description:
        "Mobile app that assists basic school teachers in breaking down term curricula into weekly sessions. Includes options for lesson activities, assessments, and suggested excursion locations.",
      imageUrl:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      category: "mobile",
      technologies: ["React Native", "Expo", "Firebase", "Gemini API"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: "4",
      title: "Poultry Management System",
      description:
        "Helps poultry farmers monitor egg production, feeding, and medication schedules. Designed for simplicity and ease of use in low-connectivity environments.",
      imageUrl:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
      category: "web",
      technologies: ["React", "Shadcn", "Tailwind CSS", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: "5",
      title: "AgriRent",
      description:
        "Connects farmers to equipment and labor for rent, including both skilled and unskilled workers. Supports listings, bookings, and messaging between users.",
      imageUrl:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "Firestore", "Firebase"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: "6",
      title: "Furnica (Furniture E-commerce)",
      description:
        "E-commerce platform for browsing and purchasing furniture online. Features modern UI, secure payments, and comprehensive product management.",
      imageUrl:
        "https://images.unsplash.com/photo-1512149673953-1e251807ec7c?w=800&q=80",
      category: "web",
      technologies: ["React", "Clerk", "Tailwind CSS", "REST API"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ],
}: ProjectsSectionProps) => {
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectCardProps[]>(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isChangingFilter, setIsChangingFilter] = useState(false);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Filter projects when activeFilter changes
  useEffect(() => {
    setIsChangingFilter(true);

    const filterTimeout = setTimeout(() => {
      if (activeFilter === "All") {
        setFilteredProjects(projects);
      } else {
        const filtered = projects.filter(
          (project) =>
            project.category?.toLowerCase() === activeFilter.toLowerCase(),
        );
        setFilteredProjects(filtered);
      }

      setIsChangingFilter(false);
    }, 300); // Short delay for animation

    return () => clearTimeout(filterTimeout);
  }, [activeFilter, projects]);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-20 px-4 bg-gradient-to-br from-slate-900 via-ocean-950/20 to-slate-900 relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-ocean-500/4 to-electric-500/4 blur-3xl"
            style={{
              width: 100 + Math.random() * 300,
              height: 100 + Math.random() * 300,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              repeat: Infinity,
              duration: 15 + Math.random() * 15,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Subtle circuit pattern */}
      <div className="absolute inset-0 z-0 opacity-8">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="circuit"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 15 0 L 15 15 L 30 15 M 0 15 L 15 15 L 15 30"
                fill="none"
                stroke="url(#circuitGradient)"
                strokeWidth="0.3"
              />
            </pattern>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
              <stop offset="100%" stopColor="rgba(14, 165, 233, 0.5)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 via-electric-400 to-ocean-600"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ backgroundSize: "200% auto" }}
          >
            {title}
          </motion.h2>
          <motion.div
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-ocean-500 to-electric-500 mx-auto mb-6 sm:mb-8 rounded-full"
            animate={{
              width: [80, 100, 80],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <ProjectFilter
          onFilterChange={handleFilterChange}
          activeFilter={activeFilter}
          categories={["All", "Web", "Mobile", "Backend"]}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))
              ) : (
                <motion.div
                  className="col-span-full text-center py-12 sm:py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-base sm:text-xl text-gray-300">
                    No projects found in this category. Check back soon!
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
