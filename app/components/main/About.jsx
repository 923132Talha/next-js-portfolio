'use client';

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="aboutme" className="py-20 bg-slate-950 text-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            About Me
          </h2>
          <p className="mt-2 text-slate-400 text-lg">
            Get to know more about my background, passion, and skill set.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Animated GIF / Visual Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-40 animate-pulse"></div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 p-2 shadow-2xl group w-full max-w-md">
              <img
                src="/wd.gif" 
                alt="Developer Coding Setup"
                className="w-full h-64 sm:h-80 rounded-xl transform transition-transform duration-500 group-hover:scale-105 object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-100">
              Passionate <span className="text-cyan-400">Full-Stack Developer</span> & Problem Solver
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Hi I'm Talha ! I love crafting modern, high-performance web applications. I focus on building clean frontend user interfaces while engineering scalable backend architectures.
            </p>

            {/* Quick Highlights / Stats */}
            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">Full-Stack</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Frontend & Backend Architecture</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-500">Modern Stack</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">React, Next.js, Node.js & APIs</p>
              </div>
            </div>

            {/* Skill Badges */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Tech Stack Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "JavaScript", "Tailwind CSS", "Node.js", "Express", "REST APIs", "Git"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs sm:text-sm bg-slate-800/80 text-cyan-300 rounded-full border border-slate-700/60 hover:border-cyan-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
              >
                Let's Work Together
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;