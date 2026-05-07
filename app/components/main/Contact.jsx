"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInTitle, slideInForm } from "@/utils/motion";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="contact" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full px-6 py-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInTitle()}
          className="w-full lg:w-1/2 text-white text-center mb-8 lg:mb-0"
        >
          <h2 className="text-6xl font-bold leading-tight mb-4">Contact</h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInForm()}
          className="w-full lg:w-1/2 bg-transparent p-8 rounded-xl shadow-lg backdrop-blur-lg"
        >
          <form className="space-y-6 text-lg text-white">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-white">Message</label>
              <textarea
                id="message"
                name="message"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4"
                placeholder="Enter message"
              />
            </div>

            <div className="flex justify-center">
              <button className="w-full cursor-pointer py-3 px-6 bg-transparent border border-white font-semibold rounded-lg">
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
