"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ success: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        success: true,
        message: "Thank you for your message. We will get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        {/* Background Design Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#FAF9F6]">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[#F8F3E9] rounded-bl-[150px]"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#D46A6A]/10 rounded-full"></div>
          <div className="absolute top-24 right-24 w-40 h-40 bg-[#A7BFA3]/10 rounded-full"></div>

          {/* Decorative pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238C644B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-[#D46A6A]/10 px-4 py-2 rounded-full mb-6">
                <span className="text-[#D46A6A] font-medium text-sm">
                  We'd Love To Hear From You
                </span>
              </div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#6B4F3B] mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                CONNECT <span className="text-[#D46A6A]">WITH US</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-[#6B4F3B]/80 mb-8 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                We're not in the business of making clothes. We're in the
                business of making stories wearable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="mailto:business@preetizen.com"
                  className="inline-flex items-center px-6 py-3 bg-[#8C644B] text-white rounded-lg hover:bg-[#6b4f3b] transition-colors shadow-lg shadow-[#8C644B]/10"
                >
                  <span className="font-medium mr-2">Email Us</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>

                <a
                  href="tel:+916295616967"
                  className="inline-flex items-center px-6 py-3 border border-[#8C644B] text-[#8C644B] rounded-lg hover:bg-[#8C644B]/5 transition-colors"
                >
                  <span className="font-medium mr-2">Call Us</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              className="hidden md:block relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full aspect-square relative">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#8C644B]/20"></div>
                <div className="absolute inset-6 rounded-full border-2 border-dashed border-[#D46A6A]/20"></div>
                <div className="absolute inset-12 rounded-full border-2 border-dashed border-[#A7BFA3]/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-serif text-3xl text-[#6B4F3B] mb-2">
                      Get in Touch
                    </h3>
                    <p className="text-[#8C644B]">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-5 right-20 w-16 h-16 bg-white shadow-lg rounded-lg flex items-center justify-center"
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8C644B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute bottom-5 left-20 w-16 h-16 bg-white shadow-lg rounded-lg flex items-center justify-center"
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D46A6A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-5 w-16 h-16 bg-white shadow-lg rounded-lg flex items-center justify-center"
                  initial={{ y: 5 }}
                  animate={{ y: -5 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A7BFA3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - subtle arrow down */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8C644B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-sm p-8 border border-[#e1b866]/10">
              <h2 className="font-serif text-2xl font-bold text-[#6b4f3b] mb-6">
                Get In Touch
              </h2>

              <motion.div variants={fadeIn} className="flex items-start mb-6">
                <div className="w-10 h-10 rounded-full bg-[#e1b866]/10 flex items-center justify-center mr-4">
                  <FiMail className="text-[#8C644B]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#6b4f3b]">Email Us</h3>
                  <a
                    href="mailto:business@preetizen.com"
                    className="text-[#8C644B] hover:text-[#e1b866] transition-colors"
                  >
                    business@preetizen.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start mb-6">
                <div className="w-10 h-10 rounded-full bg-[#e1b866]/10 flex items-center justify-center mr-4">
                  <FiPhone className="text-[#8C644B]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#6b4f3b]">Call Us</h3>
                  <a
                    href="tel:+916295616967"
                    className="text-[#8C644B] hover:text-[#e1b866] transition-colors"
                  >
                    +91 62956 16967 (Navin Mundra)
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start mb-6">
                <div className="w-10 h-10 rounded-full bg-[#e1b866]/10 flex items-center justify-center mr-4">
                  <FiMapPin className="text-[#8C644B]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#6b4f3b]">Visit Us</h3>
                  <p className="text-[#333333]">
                    24/1 Karunamoyee Ghat Road
                    <br />
                    Kolkata – 700042
                    <br />
                    West Bengal, India
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start mb-6">
                <div className="w-10 h-10 rounded-full bg-[#e1b866]/10 flex items-center justify-center mr-4">
                  <FiClock className="text-[#8C644B]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#6b4f3b]">Business Hours</h3>
                  <p className="text-[#333333]">
                    Monday - Saturday: 10:00 AM - 6:00 PM
                    <br />
                    We typically respond within 24 hours.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <h3 className="font-medium text-[#6b4f3b] mb-3">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/preetizen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#e1b866]/10 flex items-center justify-center hover:bg-[#e1b866]/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-[#8C644B]" />
                  </a>
                  <a
                    href="https://facebook.com/preetizen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#e1b866]/10 flex items-center justify-center hover:bg-[#e1b866]/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-[#8C644B]" />
                  </a>
                  <a
                    href="https://wa.me/916295616967"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#e1b866]/10 flex items-center justify-center hover:bg-[#e1b866]/20 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-[#8C644B]" />
                  </a>
                </div>
              </motion.div>

              {/* Business Information */}
              <motion.div
                variants={fadeIn}
                className="mt-10 pt-6 border-t border-[#e1b866]/10"
              >
                <p className="text-sm text-[#6b4f3b]/70">
                  Preetizen operates as a registered partnership in India.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg shadow-sm p-8 border border-[#e1b866]/10">
              <h2 className="font-serif text-2xl font-bold text-[#6b4f3b] mb-6">
                Send us a Message
              </h2>

              {formStatus.success === null ? (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div variants={fadeIn}>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#6b4f3b] mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-base border border-[#e1b866]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C644B]/40"
                      />
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#6b4f3b] mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-base border border-[#e1b866]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C644B]/40"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={fadeIn} className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[#6b4f3b] mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 text-base border border-[#e1b866]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C644B]/40"
                    />
                  </motion.div>

                  <motion.div variants={fadeIn} className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#6b4f3b] mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 text-base border border-[#e1b866]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C644B]/40"
                    ></textarea>
                  </motion.div>

                  <motion.div variants={fadeIn} className="text-right">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center px-6 py-3 bg-[#8C644B] text-white font-medium rounded-md hover:bg-[#6b4f3b] transition-colors ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
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
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-6 rounded-md ${
                    formStatus.success ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <p
                    className={`text-lg ${
                      formStatus.success ? "text-green-800" : "text-red-800"
                    }`}
                  >
                    {formStatus.message}
                  </p>
                  {formStatus.success && (
                    <button
                      onClick={() =>
                        setFormStatus({ success: null, message: "" })
                      }
                      className="mt-4 text-[#8C644B] hover:text-[#6b4f3b]"
                    >
                      Send another message
                    </button>
                  )}
                </motion.div>
              )}

              {/* Quick links */}
              <motion.div
                variants={fadeIn}
                className="mt-8 pt-6 border-t border-[#e1b866]/10"
              >
                <h3 className="text-lg font-medium text-[#6b4f3b] mb-3">
                  Frequently Asked Questions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#8C644B]">
                  <Link
                    href="/faq#shipping"
                    className="hover:text-[#e1b866] transition-colors"
                  >
                    Shipping Information
                  </Link>
                  <Link
                    href="/faq#returns"
                    className="hover:text-[#e1b866] transition-colors"
                  >
                    Return Policy
                  </Link>
                  <Link
                    href="/faq#sizing"
                    className="hover:text-[#e1b866] transition-colors"
                  >
                    Sizing Guide
                  </Link>
                  <Link
                    href="/faq#payment"
                    className="hover:text-[#e1b866] transition-colors"
                  >
                    Payment Methods
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mt-8"
            >
              <div className="bg-white rounded-lg shadow-sm p-4 border border-[#e1b866]/10">
                <iframe
                  title="Preetizen Office Location"
                  className="w-full h-[300px] rounded-md"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.156680761342!2d88.40470615!3d22.5782705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277c6bcffffff%3A0x70fbadcd46f97a28!2s24%2F1%20Karunamoyee%20Ghat%20Rd%2C%20Kolkata%2C%20West%20Bengal%20700042!5e0!3m2!1sen!2sin!4v1624573291234!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#6b4f3b]">
              Meet Our Founders
            </h2>
            <p className="mt-2 text-[#8C644B]">
              The creative minds behind Preetizen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/3 relative">
                <div className="aspect-square relative">
                  <Image
                    src="https://static.wixstatic.com/media/cf391b_283900e561eb49a496f95f8247302da8~mv2.jpg/v1/fill/w_269,h_303,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2813_edited_edited.jpg"
                    alt="Preeti Sarkar - Founder & Creative Head"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="sm:w-2/3 p-6 flex flex-col justify-center">
                <h3 className="font-serif text-xl font-bold text-[#6b4f3b]">
                  Preeti Sarkar
                </h3>
                <p className="text-[#8C644B] mb-3">Founder & Creative Head</p>
                <p className="text-gray-600 mb-4">
                  With a passion for design and an eye for detail, Preeti leads
                  our creative direction and product development.
                </p>
                <a
                  href="mailto:preeti@preetizen.com"
                  className="text-[#8C644B] hover:text-[#e1b866] transition-colors"
                >
                  preeti@preetizen.com
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/3 relative">
                <div className="aspect-square relative">
                  <Image
                    src="https://static.wixstatic.com/media/cf391b_6c68c3069c6e408f9c74e4b835d509c2~mv2.jpg/v1/crop/x_15,y_0,w_1103,h_1246/fill/w_269,h_303,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4121_edited_edited_edited_edited.jpg"
                    alt="Navin Mundra - Business & Tech Head"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="sm:w-2/3 p-6 flex flex-col justify-center">
                <h3 className="font-serif text-xl font-bold text-[#6b4f3b]">
                  Navin Mundra
                </h3>
                <p className="text-[#8C644B] mb-3">Business & Tech Head</p>
                <p className="text-gray-600 mb-4">
                  Navin oversees our business operations and technological
                  advancement, ensuring seamless customer experiences.
                </p>
                <a
                  href="mailto:navin@preetizen.com"
                  className="text-[#8C644B] hover:text-[#e1b866] transition-colors"
                >
                  navin@preetizen.com
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
