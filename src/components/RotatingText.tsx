"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["designer", "developer", "student"];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex min-w-[120px] h-[1.1em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[currentIndex]}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute left-0"
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
} 