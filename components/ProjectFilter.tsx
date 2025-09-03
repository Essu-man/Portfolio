'use client';

import React, { useState } from "react";
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
        return "from-ocean-500 to-electric-500";
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

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mb-6 sm:mb-10 p-4 sm:p-6 bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-md rounded-2xl border border-ocean-500/20 relative overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-ocean-500/10 to-electric-500/10 z-0"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
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
                <button
                  onClick={() => handleFilterClick(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 relative z-10 ${
                    isActive 
                      ? `bg-gradient-to-r ${gradient} border-none text-white hover:shadow-lg shadow-md` 
                      : "bg-slate-700/80 border border-ocean-500/30 text-ocean-200 hover:bg-slate-600/80 hover:border-ocean-400/50"
                  }`}
                >
                  {category}
                </button>

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
