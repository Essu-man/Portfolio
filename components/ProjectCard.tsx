'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

export interface ProjectCardProps {
  id?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  category?: "web" | "mobile" | "backend" | string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A short description of the project showcasing the key features and technologies used.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  category = "web",
  technologies = ["React", "TypeScript", "Tailwind"],
  githubUrl = "https://github.com/Essu-man",
  liveUrl = "https://example.com",
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate a gradient based on category
  const getCategoryGradient = () => {
    switch (category.toLowerCase()) {
      case "web":
        return "from-ocean-500 to-electric-600";
      case "mobile":
        return "from-electric-500 to-ocean-600";
      case "backend":
        return "from-ocean-600 to-electric-500";
      default:
        return "from-ocean-500 to-electric-500";
    }
  };

  const categoryGradient = getCategoryGradient();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="h-full flex flex-col overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-md border border-ocean-500/20 hover:border-ocean-400/40 transition-all duration-500 relative group shadow-2xl rounded-2xl">
        {/* Background gradient effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}
        />

        <div className="relative overflow-hidden h-36 sm:h-48">
          <motion.div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute top-3 right-3 z-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div
              className={`px-3 py-1 rounded-full bg-gradient-to-r ${categoryGradient} text-white text-xs font-medium shadow-lg`}
            >
              {category}
            </div>
          </motion.div>

          {/* Animated overlay with view project button */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/40 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-ocean-600 to-electric-600 text-white rounded-full font-semibold flex items-center gap-2 hover:from-ocean-500 hover:to-electric-500 transition-all duration-300 shadow-lg"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(liveUrl, "_blank")}
                >
                  View Project
                  <ArrowUpRight size={16} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-6 flex-grow relative z-10">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-ocean-400 group-hover:to-electric-400 transition-all duration-300 mb-3">
            {title}
          </h3>
          
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -2, scale: 1.05 }}
              >
                <div className="px-3 py-1 bg-ocean-500/10 border border-ocean-400/30 text-ocean-200 text-xs rounded-full hover:bg-ocean-500/20 hover:border-ocean-400/50 transition-all duration-300">
                  {tech}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex justify-between gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => window.open(githubUrl, "_blank")}
                className="flex items-center gap-2 px-4 py-2 bg-ocean-500/10 border border-ocean-400/30 text-ocean-200 text-sm rounded-full hover:bg-ocean-500/20 hover:border-ocean-400/50 hover:text-ocean-100 transition-all duration-300"
              >
                <Github size={16} />
                Code
              </button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => window.open(liveUrl, "_blank")}
                className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${categoryGradient} text-white text-sm rounded-full hover:shadow-lg transition-all duration-300`}
              >
                <ExternalLink size={16} />
                Live Demo
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
