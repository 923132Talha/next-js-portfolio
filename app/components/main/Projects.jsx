"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectCardVariant } from '@/utils/motion';
import projects from '@/utils/projects';

const Projects = () => {
  return (
    <div id="projects" className="container flex flex-col gap-9 mx-auto px-4 py-19">
      <h1 className="text-6xl text-center text-white font-bold mb-8">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const { ref, inView } = useInView({ triggerOnce: true });

          return (
            <motion.div
              ref={ref}
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={projectCardVariant(index * 0.2)}
              className="max-w-xs mx-auto backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
            > <div className="w-full h-59">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-59 object-center"
                />
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <p className="mt-2 text-white">{project.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  {project.liveDemo ? (
                    <Link href={project.liveDemo} target="_blank">
                      <span className="text-white hover:text-indigo-700 text-md font-semibold">Live Demo</span>
                    </Link>
                  ):
                   <Link href={project.githubUrl} target="_blank">
                      <span className="text-white hover:text-indigo-700 text-md font-semibold">Github</span>
                    </Link>
                  }
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
