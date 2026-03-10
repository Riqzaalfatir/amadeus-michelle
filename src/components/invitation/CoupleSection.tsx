"use client";

import Image from "next/image";
import AFLogo from "@/assets/AF.png";
import { motion, Variants } from "framer-motion";

/* Animation */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.8, // elemen muncul slow satu per satu
      delayChildren: 0.6,   // animasi mulai lebih lambat
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8, // lebih lambat
      ease: [0.22, 1, 0.36, 1], // dreamy cubic-bezier
    },
  },
};

const CoupleSection = () => {
  return (
    <section className="w-full min-h-screen flex justify-center bg-[#E9D5C0]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[439px] px-6 flex flex-col items-center text-center"
      >
        {/* Logo */}
        <motion.div variants={fadeUp}>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={AFLogo}
              alt="Aurelia Fernando Logo"
              width={80}
              height={80}
              className="object-contain pt-[82px]"
            />
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.p
          variants={fadeUp}
          className="text-[#C75376] text-[16px] pt-[15px] max-w-[260px] font-breadley tracking-[1px] "
        >
          Because you have shared in our lives
          by your friendship and love
        </motion.p>

        {/* Couple Names */}
        <motion.div variants={fadeUp} className="pt-[102px]">
          <h1 className="font-nephilm  text-[42px] tracking-wide text-[#2E497C]">
            AMADEUS
          </h1>

          <p className="text-[#C85374] font-breadley text-[28px] py-[15px]">
            and
          </p>

          <h1 className="font-nephilm  text-[42px] tracking-wide text-[#2E497C]">
            MICHELLE
          </h1>
        </motion.div>

        {/* Parents Intro */}
        <motion.p
          variants={fadeUp}
          className="text-[#C75376] text-[16px] font-breadley pt-[100px]"
        >
          together with their parents
        </motion.p>

        {/* Parents */}
        <motion.div
          variants={fadeUp}
          className="text-[#C75376] text-[16px] uppercase font-breadley leading-relaxed pt-[27px] font-semibold tracking-[1px]"
        >
          <p>MR. JOHANNES ADI PURNAMA PUTRA ST. MT</p>
          <p>& MRS. FANNY KURNIAWATI</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="text-[#C75376] text-[16px] uppercase font-breadley leading-relaxed pt-[38px] font-semibold tracking-[1px]"
        >
          <p>MR. JOHANNES ADI PURNAMA PUTRA ST. MT</p>
          <p>& MRS. FANNY KURNIAWATI</p>
        </motion.div>

        {/* Invitation */}
        <motion.p
          variants={fadeUp}
          className="text-[#C75376] text-[16px] max-w-[300px] leading-relaxed font-breadley py-[72px] tracking-[1px]"
        >
          Request the pleasure of your company <br />
          to celebrate the marriage of their children
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CoupleSection;