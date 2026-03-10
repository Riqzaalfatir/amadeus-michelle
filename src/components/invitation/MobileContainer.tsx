"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import HeroKanan from "@/assets/HeroKanan.png";

const MobileContainer = () => {
  // Variants untuk animasi teks
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.7,
        duration: 2,
        ease: [0.22, 1, 0.36, 1], // cubic-bezier untuk TS
      },
    }),
  };

  // Variants untuk animasi gambar
  const imageVariant: Variants = {
    hidden: { opacity: 0, scale: 1.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  // Variants untuk stripe bawah
  const stripeVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 1.5 },
    },
  };

   // Variants untuk stripe atas
  const stripeTopVariant: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 },
    },
  };

  return (
    <div className="w-full min-h-screen flex justify-center bg-[#F6EEE1]">

      <div className="w-full flex flex-col items-center
      max-w-[420px] md:max-w-[520px] lg:max-w-[620px]">

        {/* Stripe Atas */}
           <motion.div
          className="stripe w-full"
          initial="hidden"
          animate="visible"
          variants={stripeTopVariant}
        />

        {/* Konten Tengah */}
        <div className="flex flex-col items-center justify-center py-14 flex-1">

          <div className="text-center">
            <motion.h1
              className="font-nephilm text-[48px] tracking-wide text-[#2E497C]"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              AMADEUS
            </motion.h1>

            <motion.p
              className="text-[#E0A786] font-breadley text-[31px]"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              and
            </motion.p>

            <motion.h1
              className="font-nephilm text-[48px] tracking-wide text-[#2E497C]"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              MICHELLE
            </motion.h1>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariant}
            className="mt-4"
          >
            <Image
              src={HeroKanan}
              alt="Hero"
              width={300}
              height={300}
              className="object-contain w-[260px] md:w-[420px] lg:w-[340px]"
              priority
            />
          </motion.div>

          <motion.div
            className="mt-[12px] font-breadley text-[21px] tracking-[3px] text-[#c79a73]"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            24.01.26
          </motion.div>

        </div>

        {/* Stripe Bawah */}
        <motion.div
          className="stripe w-full flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={stripeVariant}
        >
          <span className="text-[#2E497C] px-4 py-1.5 text-[12px] md:text-[14px] tracking-[2px] font-breadley font-semibold">
            #AureliaFernandoWedding
          </span>
        </motion.div>

      </div>
    </div>
  );
};

export default MobileContainer;