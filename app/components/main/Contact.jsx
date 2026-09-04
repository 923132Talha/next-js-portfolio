"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInTitle, slideInForm } from "@/utils/motion";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  // State management for submission feedback
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.target);
    // Replace with your Web3Forms Access Key or environment variable
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset(); // Reset form inputs after sending
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

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
          className="w-full lg:w-1/2 bg-transparent p-8 rounded-xl shadow-lg backdrop-blur-lg border border-white/10"
        >
          {status === "success" ? (
            <div className="text-center py-8 text-white space-y-4">
              <div className="text-5xl">✅</div>
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-gray-300">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-2 bg-transparent border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-lg text-white">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-black/20 text-white placeholder-gray-400"
                  placeholder="Enter name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-black/20 text-white placeholder-gray-400"
                  placeholder="Enter email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-black/20 text-white placeholder-gray-400 resize-none"
                  placeholder="Enter message"
                />
              </div>

              {status === "error" && (
                <div className="p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-sm">
                  {errorMessage}
                </div>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full cursor-pointer py-3 px-6 bg-transparent border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;