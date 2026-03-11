"use client"

import Image from "next/image"
import Ornament from "@/assets/Ornament-03.png"
import Frame from "@/assets/Ornament-Bingkai.png"
import Couple from "@/assets/FotoCouple2.png"
import { motion, Variants } from "framer-motion"

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.4,
    },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const photoReveal: Variants = {
  hidden: { opacity: 0, y: 30, rotate: -4 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const TerimakasihSection = () => {
  return (
    <section className="relative w-full bg-[#F6EEE1] overflow-hidden">

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[50px] left-[20px] w-[110px] md:w-[140px] z-10"
      >
        <Image
          src={Ornament}
          alt="ornament"
          width={140}
          height={140}
        />
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start md:justify-center lg:justify-between"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >

        <motion.div
          className="w-full md:w-[510px] -mr-0 md:-mr-[140px] z-20 md:pt-[40px] lg:pt-[60px] translate-y-[90px] md:translate-y-0 mb-4 md:mb-0"
        >
          <h2 className="text-[#2E497C] text-[28px] md:text-[38px] lg:text-[28px] font-nephilm uppercase tracking-[1px]">
            Terima Kasih
          </h2>

          <p className="text-[#C75376] text-[14px] md:text-[20px] lg:text-[14px] font-breadley mt-1 leading-relaxed tracking-[px] md:tracking-[1px] max-w-[220px] md:max-w-[350px] lg:max-w-[224px]">
            Semoga Anda berkenan untuk hadir dan menikmati rangkaian acara
            pada hari bahagia kami.
          </p>
        </motion.div>

        <div className="relative w-[480px] md:w-[200px] lg:w-[370px] h-[210px] md:h-[310px] lg:h-[340px] mt-0 flex justify-center items-center mb-4 md:mb-0">

          <motion.div
            variants={scaleFade}
            className="absolute w-[260px] h-[320px] md:w-[300px] md:h-[380px]"
          >
            <Image
              src={Frame}
              alt="frame"
              fill
              className="object-contain"
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>

          <motion.div
            variants={photoReveal}
            className="absolute top-[32px] md:top-[58px] lg:top-[78px] right-[138px] md:-right-[20px] lg:-right-[8px] w-[150px] h-[150px] md:w-[170px] md:h-[190px] overflow-hidden rounded-lg"
          >
            <Image
              src={Couple}
              alt="couple"
              fill
              className="object-cover"
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>

        </div>

      </motion.div>

    </section>
  )
}

export default TerimakasihSection