import React, { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface ProjectFilterProps {
  onFilterChange?: (category: string) => void;
  categories?: string[];
  activeFilter?: string;
}

const ProjectFilter = ({
  onFilterChange = () => {},
  categories = ["All", "Web", "Mobile", "Backend"],
  activeFilter = "All",
}: ProjectFilterProps) => {
  const [selected, setSelected] = useState(activeFilter);

  const handleFilterClick = (category: string) => {
    setSelected(category);
    onFilterChange(category);
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mb-8 p-4 bg-background rounded-lg shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={selected === category ? "default" : "outline"}
              onClick={() => handleFilterClick(category)}
              className="px-6 py-2 rounded-full transition-all duration-300"
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectFilter;
