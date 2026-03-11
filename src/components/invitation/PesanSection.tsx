"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const Pesan = [
    { nama: "John Doe", pesan: "Happy wedding Amadeus & Michelle! selamat menempuh hidup baru, God Bless your wedding!" },
    { nama: "Felix Setiawan", pesan: "Happy wedding Amadeus & Michelle! selamat menempuh hidup baru, God Bless your wedding!" },
    { nama: "Andrew Garfield", pesan: "Happy wedding Amadeus & Michelle! selamat menempuh hidup baru, God Bless your wedding!" },
    { nama: "Robert Downey", pesan: "Happy wedding Amadeus & Michelle! selamat menempuh hidup baru, God Bless your wedding!" },
    { nama: "Chris Evans", pesan: "Happy wedding Amadeus & Michelle! selamat menempuh hidup baru, God Bless your wedding!" }
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5, // delay tiap elemen
      delayChildren: 0.5,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
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

const PesanSection = () => {
    const [media, setMedia] = useState<File | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) setMedia(e.target.files[0])
    }

    return (
        <section className='w-full bg-[repeating-linear-gradient(90deg,#E3CDB6_0px,#E3CDB6_3px,#F0E1D0_3px,#F0E1D0_12px)] py-[50px]'>
            <motion.div
              className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >

                <motion.h2 className='text-[#2E497C] text-[24px] md:text-[34px] lg:text-[24px] font-nephilm uppercase tracking-[1px]' variants={fadeUp}>
                    Pesan Pribadi
                </motion.h2>

                <motion.h4 className='text-[#C75376] text-[16px] md:text-[24px] lg:text-[16px]  font-breadley tracking-[1px]' variants={fadeUp}>
                    Tinggalkan pesan dan harapan untuk kami
                </motion.h4>

                {/* Nama */}
                <motion.input
                    type="text"
                    className='p-3 w-[321px] md:w-[440px] lg:w-[321px] bg-white/60 rounded-md mt-[43px]'
                    variants={fadeUp}
                />

                {/* Pesan */}
                <motion.textarea
                    className='p-3 h-[240px] w-[321px] md:w-[440px] lg:w-[321px] bg-white/60 rounded-md mt-[15px]'
                    variants={fadeUp}
                />

                <motion.p className='text-[#C75376] text-[16px] md:text-[20px] lg:text-[16px] font-breadley mt-[28px] tracking-[1px] leading-none' variants={fadeUp}>
                    Tambah foto atau video?
                </motion.p>

                {/* Upload Media */}
                <motion.label className="mt-[12px] w-[321px] md:w-[440px] lg:w-[321px] h-[37px] bg-white/60 rounded-md flex items-center justify-start cursor-pointer" variants={fadeUp}>
                    <div className="text-[#C75376] text-2xl leading-none pl-4">+</div>
                    <input type="file" accept="image/*,video/*" onChange={handleFileChange} className="hidden" />
                </motion.label>

                <motion.button className="bg-[#2E497C] py-2 px-10 text-white rounded-md text-[14px] md:text-[18px] lg:text-[14px] font-breadley mt-[25px] tracking-[1px]" variants={scaleFade}>
                    Kirim Pesan
                </motion.button>

                <motion.div className="w-[321px] md:w-[440px] lg:w-[321px] bg-[#E9D5C0] rounded-lg mt-[70px] pt-[33px] pb-[50px] flex flex-col gap-8" variants={fadeUp}>
                    {Pesan.map((item, index) => (
                        <motion.div key={index} className="text-center" variants={fadeUp}>
                            <h3 className="text-[#2E497C] text-[14px] md:text-[18px] lg:text-[14px] font-nephilm uppercase tracking-[1px]">
                                {item.nama}
                            </h3>
                            <p className="text-[#C75376] text-[14px] md:text-[18px] lg:text-[14px] font-breadley mt-2 max-w-[400px] mx-auto tracking-[1px]">
                                {item.pesan}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </motion.div>
        </section>
    )
}

export default PesanSection;