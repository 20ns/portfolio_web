import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 }); // Adjust threshold as needed

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="about"
      className="py-16"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={aboutVariants}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="lg:flex items-center">
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' } },
            }}
          >
            <img
              src="https://placekitten.com/400/400"
              alt="Your Name"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 lg:pl-16"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' } },
            }}
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with expertise in React,
              Node.js, and other modern web technologies. I love building
              interactive and user-friendly applications that solve real-world
              problems. In my free time, I enjoy exploring new technologies,
              contributing to open-source projects, and learning new things.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;