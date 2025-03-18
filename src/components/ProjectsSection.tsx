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
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      category: "web",
      technologies: ["React", "TypeScript", "Firebase", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "2",
      title: "Fitness Tracking App",
      description:
        "Mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations.",
      imageUrl:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      category: "mobile",
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "3",
      title: "API Gateway Service",
      description:
        "High-performance API gateway with authentication, rate limiting, and request routing capabilities.",
      imageUrl:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      category: "backend",
      technologies: ["FastAPI", "PostgreSQL", "Docker", "AWS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "4",
      title: "Task Management Dashboard",
      description:
        "Interactive dashboard for team task management with real-time updates and progress tracking.",
      imageUrl:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
      category: "web",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "5",
      title: "Data Processing Pipeline",
      description:
        "Scalable backend service for processing and analyzing large datasets with visualization endpoints.",
      imageUrl:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      category: "backend",
      technologies: ["FastAPI", "Redis", "Celery", "D3.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "6",
      title: "AR Navigation App",
      description:
        "Augmented reality mobile app for indoor navigation in large venues like malls and airports.",
      imageUrl:
        "https://images.unsplash.com/photo-1512149673953-1e251807ec7c?w=800&q=80",
      category: "mobile",
      technologies: ["React Native", "Expo", "ARKit", "ARCore"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
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
      className="py-12 sm:py-20 px-4 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5 blur-3xl"
            style={{
              width: 100 + Math.random() * 500,
              height: 100 + Math.random() * 500,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 10 + Math.random() * 20,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ backgroundSize: "200% auto" }}
          >
            {title}
          </motion.h2>
          <motion.div
            className="w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4 sm:mb-6 rounded-full"
            animate={{
              width: [60, 80, 60],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
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
