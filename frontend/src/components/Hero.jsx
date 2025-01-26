import React from "react";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const taglineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
  },
};

function Hero() {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(100% 100% at 50% 0%, black 50%, #54156F)",
      }}
      className="relative min-h-screen flex justify-center items-center text-center text-white px-4"
    >
      <motion.div className="space-y-4" initial="hidden" animate="visible">
        {/* Main Title */}
        <motion.h1
          variants={titleVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide"
        >
          SOFTA Presents IMPULSE 2K25
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={taglineVariants}
          className="text-lg md:text-xl lg:text-2xl font-semibold"
        >
          Crack the Code, Conquer the Drive!
        </motion.p>
      </motion.div>
    </div>
  );
}


export default Hero;
