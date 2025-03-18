import React, { useState } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

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

  // Get gradient based on category
  const getCategoryGradient = (category: string) => {
    switch (category.toLowerCase()) {
      case "all":
        return "from-violet-500 to-fuchsia-500";
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

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mb-4 sm:mb-8 p-3 sm:p-6 bg-gray-800/90 backdrop-blur-md rounded-xl border border-gray-700/50 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 z-0"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 relative z-10">
        {categories.map((category, index) => {
          const isActive = selected === category;
          const gradient = getCategoryGradient(category);

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button
                  variant={isActive ? "default" : "outline"}
                  onClick={() => handleFilterClick(category)}
                  className={`px-3 sm:px-6 py-1 sm:py-2 text-sm sm:text-base rounded-full transition-all duration-300 relative z-10 ${isActive ? `bg-gradient-to-r ${gradient} border-none text-white hover:shadow-lg` : "bg-gray-700/80 border-gray-600/50 text-white hover:bg-gray-600/80"}`}
                >
                  {category}
                </Button>

                {/* Animated indicator for active filter */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className={`absolute -inset-1 rounded-full bg-gradient-to-r ${gradient} opacity-30 blur-md -z-10`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.3 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectFilter;
