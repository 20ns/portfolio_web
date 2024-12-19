import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      id="home"
      className="py-24 flex items-center min-h-screen"
    >
      <div className="container mx-auto text-left">
        <h1 className="text-7xl font-bold">
          <span className="text-white">Hello, I'm </span>
          <span className="name-shadow text-white relative">
            {showText && (
              <span className="cursor-animation">Navpreet.</span>
            )}
            <span className="text-white" style={{ animation: 'blink 1s step-end infinite' }}>|</span>
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-xl text-gray-300 mt-5"
        >
          A Full-Stack Web Developer
        </motion.p>
      </div>
    </motion.section>
  );
}

export default Hero;