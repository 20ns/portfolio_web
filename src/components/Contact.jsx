import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const contactVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        delay: 0.2, // Delay the link animation slightly
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-16"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={contactVariants}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <motion.div
          variants={linkVariants}
          className="mt-8 flex justify-center space-x-6"
        >
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            <i className="fab fa-linkedin fa-2x"></i> LinkedIn
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="far fa-envelope fa-2x"></i> Email
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;