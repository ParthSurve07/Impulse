import React from 'react'
import { motion } from 'framer-motion'
// import './Header.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
}

function Header() {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3 }}
      className="my-4 w-[90vw] max-w-[90%] z-10 fixed top-0 left-[5%]"
    >
      <div className="px-4 md:px-16 py-3 rounded-2xl flex flex-col md:flex-row justify-between items-center">
        <div className="text-white mb-3 md:mb-0">
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-x-4 md:gap-x-16"
          >
            {["About", "Gallery", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                className="uppercase font-bold tracking-wider relative transition-all duration-150 text-sm md:text-base"
                variants={itemVariants}
                whileHover={{
                  textShadow: "0px 2px 6px rgba(147, 51, 234, 0.8)",
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div>
          <motion.button
            whileHover={{
              scale: 1.18,
              boxShadow: "0px 0px 15px 5px rgba(138, 43, 226, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 md:px-8 py-2 md:py-3 rounded-xl text-white transition-all duration-300 tracking-wider font-bold text-sm md:text-base cursor-none"
          >
            REGISTER
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}


export default Header
