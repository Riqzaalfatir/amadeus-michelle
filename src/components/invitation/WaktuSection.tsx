"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const photoReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, rotate: -5 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const SaveTheDateSection = () => {
  return (
    <section className="w-full flex justify-center bg-[#F6EEE1]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="w-full max-w-[439px] flex flex-col items-center"
      >
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-[#E0A786] text-[18px] uppercase py-[27px] font-nephilm pt-[28px] relaxed tracking-[1px]"
        >
          Sabtu, 24 Januari 2026
        </motion.h2>

        {/* Gallery */}
        <motion.div
          variants={container}
          className="flex gap-4 mb-[40px]"
        >
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              variants={photoReveal}
              whileHover={{
                y: -6,
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="w-[70px] h-[90px] border-2 border-white rounded-lg bg-gray-200 shadow-sm"
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SaveTheDateSection;