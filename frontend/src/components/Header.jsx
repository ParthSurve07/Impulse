import React from 'react'
import { motion } from 'framer-motion'
// import './Header.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      transition={{ duration: 0.5 }}
      className="mx-auto my-4 max-w-[90vw]"
    >
      <div className="px-4 py-3 rounded-2xl flex justify-between items-center">
        <div className="w-10">
          <img
            className="rounded-lg"
            src="https://images.pexels.com/photos/8457466/pexels-photo-8457466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className="text-white">
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-x-16"
          >
            <motion.li className='uppercase' whileHover={{ scale: 1.4 }} variants={itemVariants}>
              About
            </motion.li>
            <motion.li className='uppercase' whileHover={{ scale: 1.4 }} variants={itemVariants}>
              Gallery
            </motion.li>
            <motion.li className='uppercase' whileHover={{ scale: 1.4 }} variants={itemVariants}>
              Contact
            </motion.li>
          </motion.ul>
        </div>
        <div>
          <motion.button
            whileHover={{
              scale: 1.18,
              boxShadow: "0px 0px 10px 5px rgba(255, 105, 180, 0.8)", // Glow effect on hover
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-3 rounded-xl text-white transition-all duration-300 cursor-none"
          >
            REGISTER
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Header
