import React from 'react';
import { motion } from 'framer-motion';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <motion.path
            d="M10 50 L50 10 L90 50 L50 90 Z"
            fill="none"
            stroke="#64ffda"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#64ffda"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Soft Coder
      </motion.h2>
    </div>
  );
};

export default Loading;