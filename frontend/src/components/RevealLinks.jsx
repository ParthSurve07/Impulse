import React, { Children } from 'react'
import { hover, motion } from 'framer-motion'

function RevealLinks() {
  return (
    <section className='grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black'>
      <FlipLink>About</FlipLink>
      <FlipLink>Gallery</FlipLink>
      <FlipLink>Contact</FlipLink>
    </section>
  )
}

const FlipLink = ({ children, href }) => {
  return (
    <motion.a 
      initial="initial"
      whileHover="hovered"
      href={href} 
      className='relative block overflow-hidden whitespace-nowrap font-black text-4xl uppercase'
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: '-100%' },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className='absolute inset-0'
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {children}
      </motion.div>
    </motion.a>
  )
}

export default RevealLinks
