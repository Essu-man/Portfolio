'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  location?: string;
}

const ContactSection = ({
  title = "Get In Touch",
  subtitle = "I'm always open to new opportunities and collaborations. Feel free to reach out!",
  email = "your.email@example.com",
  phone = "+1 (555) 123-4567",
  location = "Your City, Country",
}: ContactSectionProps) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  // Social media icons with gradients
  const socialLinks = [
    {
      name: "Github",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/yourprofile/",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-20 bg-gradient-to-b from-slate-900 via-ocean-950/30 to-slate-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-ocean-500/4 to-electric-500/4 blur-3xl"
            style={{
              width: 100 + Math.random() * 200,
              height: 100 + Math.random() * 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              repeat: Infinity,
              duration: 12 + Math.random() * 10,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 via-electric-400 to-ocean-600 mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{ backgroundSize: "200% auto" }}
            >
              {title}
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-ocean-500 to-electric-500 mx-auto mb-6 rounded-full"
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
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-ocean-500/20 overflow-hidden shadow-2xl rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-ocean-500 to-electric-600 flex items-center justify-center mr-4 shadow-lg">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-ocean-300 font-medium">Email</p>
                      <p className="text-white text-sm sm:text-base font-medium">
                        {email}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-electric-500 to-ocean-600 flex items-center justify-center mr-4 shadow-lg">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-electric-300 font-medium">Phone</p>
                      <p className="text-white text-sm sm:text-base font-medium">
                        {phone}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-ocean-600 to-electric-500 flex items-center justify-center mr-4 shadow-lg">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-ocean-300 font-medium">Location</p>
                      <p className="text-white text-sm sm:text-base font-medium">
                        {location}
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-10">
                  <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
                    Connect With Me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-ocean-500/20 to-electric-500/20 border border-ocean-400/30 hover:from-ocean-500/30 hover:to-electric-500/30 flex items-center justify-center transition-all duration-300 group"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="h-5 w-5 sm:h-6 sm:w-6 text-ocean-300 group-hover:text-ocean-200 transition-colors duration-300">
                          {social.icon}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-ocean-500/20 overflow-hidden shadow-2xl rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                  Send a Message
                </h3>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-ocean-500/20 border border-ocean-500/30 rounded-lg p-4 flex items-center text-ocean-300"
                    >
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      <span className="text-sm sm:text-base">
                        Message sent successfully!
                      </span>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <input
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-ocean-500/30 text-white placeholder:text-ocean-300/70 text-sm sm:text-base focus:border-ocean-400/50 focus:ring-ocean-400/20 rounded-lg transition-all duration-300"
                            required
                          />
                        </div>
                        <div>
                          <input
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-ocean-500/30 text-white placeholder:text-ocean-300/70 text-sm sm:text-base focus:border-ocean-400/50 focus:ring-ocean-400/20 rounded-lg transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <input
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-ocean-500/30 text-white placeholder:text-ocean-300/70 text-sm sm:text-base focus:border-ocean-400/50 focus:ring-ocean-400/20 rounded-lg transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Your Message"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-ocean-500/30 text-white placeholder:text-ocean-300/70 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base focus:border-ocean-400/50 focus:ring-ocean-400/20 rounded-lg transition-all duration-300 resize-none"
                          required
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full md:w-auto bg-gradient-to-r from-ocean-600 to-electric-600 hover:from-ocean-500 hover:to-electric-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center">
                              <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                              Send Message
                            </span>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
