import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      className="bg-gray-900 py-6 mt-10"
    >
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;