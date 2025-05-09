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
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

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
  email = "caessuman3@gail.com",
  phone = "+233240767261",
  location = "North Legon, Accra",
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
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Social media icons with gradients
  const socialLinks = [
    {
      name: "Github",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Essu-man",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/constance-akua-essuman-252502213/",
    },
   
  ];

  return (
    <section className="w-full py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container px-4 sm:px-6 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              {subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div variants={itemVariants} className="md:col-span-1">
              <Card className="bg-gray-800/90 border-gray-700 overflow-hidden">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white text-sm sm:text-base">
                          {email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mr-3">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <p className="text-white text-sm sm:text-base">
                          {phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-600 flex items-center justify-center mr-3">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="text-white text-sm sm:text-base">
                          {location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-white font-medium mb-3 text-sm sm:text-base">
                      Connect
                    </h4>
                    <div className="flex space-x-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors duration-300"
                        >
                          <span className="h-4 w-4 sm:h-5 sm:w-5">
                            {social.icon}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2">
              <Card className="bg-gray-800/90 border-gray-700 overflow-hidden">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                    Send a Message
                  </h3>

                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 flex items-center text-green-400"
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
                            <Input
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 text-sm sm:text-base"
                              required
                            />
                          </div>
                          <div>
                            <Input
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              placeholder="Your Email"
                              className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 text-sm sm:text-base"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Input
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 text-sm sm:text-base"
                            required
                          />
                        </div>
                        <div>
                          <Textarea
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                            required
                          />
                        </div>
                        <div>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 sm:px-6 rounded-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center">
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
                              <span className="flex items-center">
                                <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />{" "}
                                Send Message
                              </span>
                            )}
                          </Button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
