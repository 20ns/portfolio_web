import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1.',
      imageUrl: 'https://placekitten.com/300/200',
      projectUrl: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2.',
      imageUrl: 'https://placekitten.com/300/200',
      projectUrl: '#',
    },
    {
      title: 'Project 3',
      description: 'A brief description of project 3.',
      imageUrl: 'https://placekitten.com/300/200',
      projectUrl: '#',
    },
  ];

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
      },
    }),
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
          animate={controls}
          initial="hidden"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              custom={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-lg w-full h-40 object-cover"
              />
              <h3 className="text-xl font-bold mt-4 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;