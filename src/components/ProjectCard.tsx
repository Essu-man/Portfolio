import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
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
  id = "1",
  title = "Project Title",
  description = "A short description of the project showcasing the key features and technologies used.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  category = "web",
  technologies = ["React", "TypeScript", "Tailwind"],
  githubUrl = "https://github.com",
  liveUrl = "https://example.com",
  onClick = () => {},
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate a gradient based on category
  const getCategoryGradient = () => {
    switch (category.toLowerCase()) {
      case "web":
        return "from-blue-500 to-indigo-600";
      case "mobile":
        return "from-purple-500 to-pink-600";
      case "backend":
        return "from-emerald-500 to-teal-600";
      default:
        return "from-gray-500 to-gray-600";
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
      <Card className="h-full flex flex-col overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 relative group">
        {/* Background gradient effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}
        />

        <div className="relative overflow-hidden h-48">
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
            <Badge
              className={`bg-gradient-to-r ${categoryGradient} text-white border-none shadow-lg`}
              variant="default"
            >
              {category}
            </Badge>
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
                  className="px-4 py-2 bg-white text-black rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
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

        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {title}
          </CardTitle>
          <motion.div
            className="flex flex-wrap gap-1 mt-2"
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
                <Badge
                  variant="outline"
                  className="bg-white/5 border-white/20 text-gray-200 hover:bg-white/10 transition-colors duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardHeader>

        <CardContent className="flex-grow relative z-10">
          <CardDescription className="text-sm text-gray-300">
            {description}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex justify-between pt-2 border-t border-white/10 relative z-10">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(githubUrl, "_blank")}
              className="flex items-center gap-1 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white transition-colors duration-300"
            >
              <Github size={16} />
              Code
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="default"
              size="sm"
              onClick={() => window.open(liveUrl, "_blank")}
              className={`flex items-center gap-1 bg-gradient-to-r ${categoryGradient} text-white border-none hover:shadow-lg transition-all duration-300`}
            >
              <ExternalLink size={16} />
              Live Demo
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
