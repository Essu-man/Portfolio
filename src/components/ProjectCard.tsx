import React from "react";
import { motion } from "framer-motion";
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
import { Github, ExternalLink } from "lucide-react";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden bg-white dark:bg-gray-900 border-2 hover:border-primary transition-all duration-300">
        <div className="relative overflow-hidden h-48">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <Badge
            className="absolute top-3 right-3 bg-primary/90 hover:bg-primary"
            variant="default"
          >
            {category}
          </Badge>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className="flex flex-wrap gap-1 mt-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-secondary/10">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex justify-between pt-2 border-t">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(githubUrl, "_blank")}
            className="flex items-center gap-1"
          >
            <Github size={16} />
            Code
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={() => window.open(liveUrl, "_blank")}
            className="flex items-center gap-1"
          >
            <ExternalLink size={16} />
            Live Demo
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
