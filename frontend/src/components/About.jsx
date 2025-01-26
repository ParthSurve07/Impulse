import React from "react";
import { motion } from "framer-motion";

const aboutVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

function About() {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(100% 100% at 50% 0%, #54156F 50%, black 100%)",
      }}
      className="py-12 sm:py-16 lg:py-20 text-white"
      id="about"
    >
      <motion.div
        variants={aboutVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-8 lg:px-16"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-center mb-6 sm:mb-8">
          About Impulse
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-center max-w-3xl mx-auto">
          Impulse 2K25 is a platform to challenge your problem-solving skills
          and technical expertise. Hosted by the SOFTA club, it offers an
          opportunity to showcase talent, collaborate with peers, and innovate.
          Join us to crack the code and conquer the drive, as we build a future
          together through technology and creativity!
        </p>

        {/* Button */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <motion.button
            whileHover={{
              scale: 1.15,
              boxShadow: "0px 0px 15px 5px rgba(138, 43, 226, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-sm sm:text-base lg:text-lg font-bold tracking-wider"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
