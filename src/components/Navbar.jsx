import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="bg-transparent py-4 px-8 fixed w-full top-0 z-10"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold text-white transition-colors duration-300"
        >
          My Name
        </a>
        <ul className="flex space-x-6">
          <li>
            <div className="navbar-link-container group">
              <a
                href="#about"
                className="text-gray-300 group-hover:text-white transition-colors duration-300 relative"
              >
                <span className="relative z-10">About</span>
              </a>
              <motion.div
                className="navbar-link-hover-effect border-4 border-gray-700"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>
          </li>
          {/* Repeat for other links: Projects, Contact */}
          <li>
            <div className="navbar-link-container group">
              <a
                href="#projects"
                className="text-gray-300 group-hover:text-white transition-colors duration-300 relative"
              >
                <span className="relative z-10">Projects</span>
              </a>
              <motion.div
                className="navbar-link-hover-effect border-4 border-gray-700"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>
          </li>
          <li>
            <div className="navbar-link-container group">
              <a
                href="#contact"
                className="text-gray-300 group-hover:text-white transition-colors duration-300 relative"
              >
                <span className="relative z-10">Contact</span>
              </a>
              <motion.div
                className="navbar-link-hover-effect border-4 border-gray-700"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;