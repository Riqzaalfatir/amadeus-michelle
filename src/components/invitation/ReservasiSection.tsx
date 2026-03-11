"use client";

import Image from "next/image"
import Ornament from "@/assets/Ornament-02.png"
import { motion, Variants } from "framer-motion"

/* Variants Animasi */
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

const ReservasiSection = () => {
    return (
        <section className="w-full bg-[#F6EEE1] pt-[80px] pb-[50px]">
            <motion.div
              className="max-w-7xl mx-auto px-4 text-center"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >

                {/* Title dengan ornament */}
                <motion.div className="relative flex justify-center items-center" variants={scaleFade}>
                    <Image
                        src={Ornament}
                        alt="ornament"
                        width={400}
                        height={210}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[190px] object-contain"
                    />

                    <h2 className="relative text-[#C85375] uppercase text-[14px] md:text-[16px] lg:text-[14px] font-nephilm tracking-[2px]" >
                        RESERVATION
                    </h2>
                </motion.div>

                {/* Guest Name */}
                <motion.h3
                  className="text-[#2E497C] text-[18px] md:text-[23px] lg:text-[18px] font-nephilm uppercase pt-[50px] tracking-[1.5px]"
                  variants={fadeUp}
                >
                    Guest Name & Fam
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-[#C75376] text-[15px] md:text-[20px] lg:text-[16px] max-w-md mx-auto font-breadley pt-[11px] tracking-[1px]"
                  variants={fadeUp}
                >
                    Mohon konfirmasi kehadiran Bapak/Ibu di acara
                    pernikahan kami sebelum kamis 15 Januari 2026
                </motion.p>

                {/* RSVP Buttons */}
                <motion.div className="flex justify-center gap-6 mt-[40px]" variants={fadeUp}>
                    <button className="bg-white text-[#E0A786] px-8 py-2 rounded-lg text-[14px] md:text-[18px] lg:text-[14px] font-breadley tracking-[1px] shadow-sm
    transition-all duration-300 ease-out
    hover:bg-[#E0A786] hover:text-white hover:shadow-lg hover:scale-105
    active:scale-95">
                        Hadir
                    </button>

                    <button className="bg-white text-[#E0A786] px-8 py-2 rounded-lg text-[14px] md:text-[18px] lg:text-[14px] font-breadley tracking-[1px] shadow-sm
    transition-all duration-300 ease-out
    hover:bg-[#E0A786] hover:text-white hover:shadow-lg hover:scale-105
    active:scale-95">
                        Tidak Hadir
                    </button>
                </motion.div>

                {/* Help */}
                <motion.p
                  className="text-[#C75376] text-[16px] md:text-[22px] lg:text-[16px] font-breadley uppercase pt-[35px] leading-none tracking-[1px]"
                  variants={fadeUp}
                >
                    PERLU BANTUAN?
                </motion.p>

                <motion.button
                  className="bg-white text-[#E0A786] px-8 py-2 rounded-lg text-[14px] md:text-[18px] lg:text-[14px] font-breadley mt-[15px] tracking-[1px] shadow-sm
transition-all duration-300 ease-out
hover:bg-[#E0A786] hover:text-white hover:shadow-lg hover:scale-105
active:scale-95"
                  variants={fadeUp}
                >
                    Hubungi Tim Provite
                </motion.button>

            </motion.div>
        </section>
    )
}

export default ReservasiSection