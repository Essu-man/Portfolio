import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      title: "Content Management API",
      description:
        "Scalable backend API for content management with authentication, authorization, and media handling.",
      imageUrl:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      category: "backend",
      technologies: ["Django", "PostgreSQL", "Docker", "AWS"],
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
      title: "Social Media Analytics",
      description:
        "Backend service for processing and analyzing social media data with visualization endpoints.",
      imageUrl:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      category: "backend",
      technologies: ["Django", "Redis", "Celery", "D3.js"],
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
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) =>
          project.category?.toLowerCase() === activeFilter.toLowerCase(),
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter, projects]);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <ProjectFilter
          onFilterChange={handleFilterChange}
          activeFilter={activeFilter}
          categories={["All", "Web", "Mobile", "Backend"]}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-muted-foreground">
                No projects found in this category. Check back soon!
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
