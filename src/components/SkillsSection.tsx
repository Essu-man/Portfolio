import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Code, Database, Flame, Layers, Smartphone, Zap } from "lucide-react";
import { Card } from "./ui/card";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard = ({
  icon,
  title,
  description = "Skill description",
}: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      className="w-full"
    >
      <Card className="h-full p-6 flex flex-col items-center text-center bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-xl transition-all duration-300">
        <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </Card>
    </motion.div>
  );
};

interface SkillsSectionProps {
  skills?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const defaultSkills = [
    {
      icon: <Zap size={24} />,
      title: "React",
      description:
        "Building interactive UIs with reusable components and efficient state management",
    },
    {
      icon: <Code size={24} />,
      title: "TypeScript",
      description:
        "Writing type-safe code to prevent bugs and improve developer experience",
    },
    {
      icon: <Flame size={24} />,
      title: "Firebase",
      description:
        "Leveraging Firebase for authentication, database, and hosting solutions",
    },
    {
      icon: <Layers size={24} />,
      title: "Clerk",
      description: "Implementing secure authentication and user management",
    },
    {
      icon: <Database size={24} />,
      title: "Django",
      description:
        "Building robust backend systems with Python's powerful web framework",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Expo",
      description:
        "Developing cross-platform mobile applications with React Native",
    },
  ];

  const skillsToDisplay = skills || defaultSkills;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These are the technologies and frameworks I specialize in, allowing
            me to build modern, responsive, and scalable applications.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsToDisplay.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
