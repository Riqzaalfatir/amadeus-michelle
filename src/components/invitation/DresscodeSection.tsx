"use client";

import React from 'react'
import { motion, Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.5,   
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5, 
      ease: [0.22, 1, 0.36, 1], 
    },
  },
};

const DresscodeSection = () => {
    return (
        <section className='w-full bg-[#E9D5C0]'>
            <motion.div
              className='py-[47px] text-center'
              variants={container}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, margin: "-100px" }}
            >
                <motion.h2
                  className='text-[#2E497C] text-[24px] md:text-[28px] lg:text-[24px] font-nephilm mb-[22px] tracking-[1px] leading-none'
                  variants={fadeUp}
                >
                  DRESSCODE
                </motion.h2>
                <motion.h4
                  className='text-[#C75376] text-[16px] md:text-[20px] lg:text-[16px] font-breadley tracking-[1px]'
                  variants={fadeUp}
                >
                  Cocktail attire with <br />colourful pastel colors
                </motion.h4>
            </motion.div>
        </section>
    )
}

export default DresscodeSection