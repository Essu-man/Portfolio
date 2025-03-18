import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
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
  email = "developer@example.com",
  phone = "+1 (555) 123-4567",
  location = "San Francisco, CA",
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

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <ul className="space-y-6">
                    <motion.li
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-primary/10 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          Email
                        </h4>
                        <p className="text-base font-medium text-slate-900 dark:text-white">
                          {email}
                        </p>
                      </div>
                    </motion.li>
                    <motion.li
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-primary/10 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          Phone
                        </h4>
                        <p className="text-base font-medium text-slate-900 dark:text-white">
                          {phone}
                        </p>
                      </div>
                    </motion.li>
                    <motion.li
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-primary/10 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          Location
                        </h4>
                        <p className="text-base font-medium text-slate-900 dark:text-white">
                          {location}
                        </p>
                      </div>
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">
                Connect
              </h3>
              <div className="flex gap-4">
                {["github", "linkedin", "twitter", "dribbble"].map(
                  (platform) => (
                    <motion.a
                      key={platform}
                      href={`#${platform}`}
                      className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${platform}`}
                        alt={platform}
                        className="w-6 h-6"
                      />
                    </motion.a>
                  ),
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">
                      Send a Message
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full p-3 bg-slate-100 dark:bg-slate-800 border-none focus-visible:ring-primary"
                          required
                        />
                      </div>

                      <div>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full p-3 bg-slate-100 dark:bg-slate-800 border-none focus-visible:ring-primary"
                          required
                        />
                      </div>

                      <div>
                        <Input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full p-3 bg-slate-100 dark:bg-slate-800 border-none focus-visible:ring-primary"
                          required
                        />
                      </div>

                      <div>
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          value={formState.message}
                          onChange={handleChange}
                          className="w-full p-3 min-h-[150px] bg-slate-100 dark:bg-slate-800 border-none focus-visible:ring-primary resize-none"
                          required
                        />
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          className="w-full py-6 text-base font-medium"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                              Send Message
                              <Send className="ml-2 h-5 w-5" />
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
