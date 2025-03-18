import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Code,
  Database,
  Flame,
  Layers,
  Smartphone,
  Zap,
  Sparkles,
  Cpu,
  Globe,
} from "lucide-react";
import { Card } from "./ui/card";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const SkillCard = ({
  icon,
  title,
  description = "Skill description",
  color = "from-blue-500 to-indigo-500",
}: SkillCardProps) => {
  return (
    <motion.div whileHover={{ y: -10, scale: 1.03 }} className="w-full">
      <Card className="h-full p-6 flex flex-col items-center text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl transition-all duration-300 overflow-hidden relative group">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        <motion.div
          className={`p-4 mb-4 rounded-full bg-gradient-to-br ${color} relative z-10`}
          whileHover={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <motion.h3
          className="text-xl font-bold mb-2 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-300 relative z-10">{description}</p>

        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br opacity-20 blur-2xl"
          initial={{ scale: 0.8, opacity: 0.1 }}
          whileHover={{ scale: 1.2, opacity: 0.3 }}
          transition={{ duration: 1 }}
        />
      </Card>
    </motion.div>
  );
};

interface SkillsSectionProps {
  skills?: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
  }[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const defaultSkills = [
    {
      icon: <Zap size={24} className="text-white" />,
      title: "React",
      description:
        "Building interactive UIs with reusable components and efficient state management",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Code size={24} className="text-white" />,
      title: "TypeScript",
      description:
        "Writing type-safe code to prevent bugs and improve developer experience",
      color: "from-blue-600 to-indigo-500",
    },
    {
      icon: <Flame size={24} className="text-white" />,
      title: "Firebase",
      description:
        "Leveraging Firebase for authentication, database, and hosting solutions",
      color: "from-orange-500 to-amber-400",
    },
    {
      icon: <Sparkles size={24} className="text-white" />,
      title: "FastAPI",
      description:
        "Building high-performance APIs with Python's modern web framework",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: <Cpu size={24} className="text-white" />,
      title: "Python",
      description:
        "Developing efficient backend logic with Python's powerful libraries",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Globe size={24} className="text-white" />,
      title: "Expo",
      description:
        "Developing cross-platform mobile applications with React Native",
      color: "from-violet-500 to-purple-400",
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
    hidden: { y: 50, opacity: 0 },
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
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl"
            style={{
              width: 100 + Math.random() * 500,
              height: 100 + Math.random() * 500,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 10 + Math.random() * 20,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
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
            My Skills
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
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
          <p className="text-gray-300 max-w-2xl mx-auto">
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
                color={skill.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
