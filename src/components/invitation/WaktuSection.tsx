"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

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

  const target = new Date(2026, 2, 16, 0, 0, 0).getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Hari", value: time.days },
    { label: "Jam", value: time.hours },
    { label: "Menit", value: time.minutes },
    { label: "Detik", value: time.seconds },
  ];

  return (
    <section className="w-full flex justify-center bg-[#F6EEE1]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="w-full max-w-[439px] flex flex-col items-center"
      >

        <motion.h2
          variants={fadeUp}
          className="text-[#E0A786] text-[18px] md:text-[26px] lg:text-[18px] uppercase py-[27px] font-nephilm pt-[28px] tracking-[1px]"
        >
          Senin, 16 Maret 2026
        </motion.h2>

        <motion.div
          variants={container}
          className="flex gap-4 mb-[40px]"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={photoReveal}
              whileHover={{
                y: -6,
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="p-1 rounded-xl bg-white shadow-sm"
            >
              <div className="w-[70px] h-[90px] md:w-[100px] md:h-[130px] lg:w-[70px] lg:h-[90px] border-2 border-[#E9D5C0] rounded-lg bg-white flex flex-col items-center justify-center">

                <span className="text-[#C75376] text-[22px] md:text-[28px] font-nephilm tabular-nums">
                  {item.value}
                </span>

                <span className="text-[#C75376] text-[10px] uppercase tracking-[2px] mt-1">
                  {item.label}
                </span>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default SaveTheDateSection;