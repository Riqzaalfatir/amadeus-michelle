"use client";

import Image from "next/image";
import Ornament from "@/assets/Ornament-01.png";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.6, // delay tiap elemen agar slow
      delayChildren: 0.5,   // mulai animasi sedikit terlambat
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5, // slow & smooth
      ease: [0.22, 1, 0.36, 1], // dreamy cubic-bezier
    },
  },
};

const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const LokasiSection = () => {
  return (
    <section className="w-full bg-[#E9D5C0] py-[45px]">
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >

        {/* Nama tempat */}
        <motion.h2
          className="text-[#2E497C] text-[18px] md:text-[26px] lg:text-[18px] uppercase font-nephilm tracking-[1.5px] leading-none"
          variants={fadeUp}
        >
          SUDIRMAN GRAND BALLROOM
        </motion.h2>

        {/* Alamat */}
        <motion.p
          className="text-[#C75376] pt-2 text-[16px] md:text-[20px] lg:text-[16px] font-breadley tracking-[0.5px] leading-none"
          variants={fadeUp}
        >
          Jln. Jendral Sudirman No. 620 Bandung
        </motion.p>

        {/* Button arah lokasi */}
        <motion.div
          className="relative inline-block px-10 py-6 md:px-14 md:py-8 lg:px-10 lg:py-6"
          variants={scaleFade}
        >
          <Image
            src={Ornament}
            alt="ornament"
            width={320}
            height={90}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 object-contain"
          />
          <button className="relative text-[#C85375] text-[14px] md:text-[20px] lg:text-[14px] uppercase font-nephilm tracking-[1px] ">
            ARAHKAN KE LOKASI
          </button>
        </motion.div>

        {/* Waktu acara */}
        <motion.div
          className="flex justify-center items-center gap-10 md:gap-16 pt-[20px]"
          variants={fadeUp}
        >

          {/* Pemberkatan */}
          <div className="text-center">
            <p className="text-[#C85375] text-[14px] md:text-[18px] lg:text-[14px] font-breadley tracking-[1px]">
              PEMBERKATAN
            </p>
            <p className="text-[#2E497C] text-[21px] md:text-[28px] lg:text-[21px] font-nephilm ">
              15.00 <span className="text-[8px]">WIB</span>
            </p>
          </div>

          {/* Divider */}
          <div className="w-[1.5px] h-12 bg-[#C75375]"></div>

          {/* Resepsi */}
          <div className="text-center">
            <p className="text-[#C85375] text-[14px] md:text-[18px] lg:text-[14px]  font-breadley tracking-[1px]">
              RESEPSI
            </p>
            <p className="text-[#2E497C] text-[21px] md:text-[28px] lg:text-[21px] font-nephilm ">
              18.00 <span className="text-[8px]">WIB</span>
            </p>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default LokasiSection;