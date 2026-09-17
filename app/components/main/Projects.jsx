"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import projects from '@/utils/projects';

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 tracking-tight">
          Featured Work
        </h1>
        <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
          A collection of projects showcasing modern web design and creative coding.
        </p>
      </div>

      {/* Single Vertical Column with Alternating Card Alignment */}
      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {projects.map((project, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          // Even items align LEFT, Odd items align RIGHT
          const isEven = index % 2 === 0;

          return (
            <motion.div
              ref={ref}
              key={project.id || index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className={`group relative flex flex-col w-full md:w-[680px] rounded-2xl overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/50 ${
                isEven ? 'self-start' : 'self-end'
              }`}
            >
              {/* Top hover line glow */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card Image */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-1 p-6 z-10">
                <h2 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-200">
                  {project.title}
                </h2>

                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {project.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer Action Links */}
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-800/80">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>GitHub</span>
                    </Link>
                  )}

                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;