import Image from "next/image"
import Ornament from "@/assets/Ornament-03.png"
import Frame from "@/assets/Ornament-Bingkai.png"
import Couple from "@/assets/FotoCouple2.png"

const TerimakasihSection = () => {
  return (
    <section className="relative w-full bg-[#F6EEE1] overflow-hidden">

      {/* ORNAMENT */}
      <Image
        src={Ornament}
        alt="ornament"
        width={140}
        height={140}
        className="absolute -top-[50px] left-[20px] w-[110px] md:w-[140px] z-10"
      />

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start md:justify-between">

        {/* TEXT */}
        <div className="w-full md:w-[510px] -mr-0 md:-mr-[180px] z-20 pt-[70px]">
          <h2 className="text-[#2E497C] text-[28px] font-nephilm uppercase tracking-[1px]">
            Terima Kasih
          </h2>

          <p className="text-[#C75376] text-[14px] font-breadley mt-4 leading-relaxed tracking-[1px] max-w-[224px]">
            Semoga Anda berkenan untuk hadir dan menikmati rangkaian acara
            pada hari bahagia kami.
          </p>
        </div>

        {/* FOTO & FRAME */}
        <div className="relative w-full md:w-[370px] h-[340px] mt-8 md:mt-0 flex justify-center items-center">

          {/* FRAME */}
          <div className="absolute w-[220px] h-[300px] md:w-[300px] md:h-[380px]">
            <Image
              src={Frame}
              alt="frame"
              fill
              className="object-contain"
            />
          </div>

          {/* FOTO */}
          <div className="absolute top-[80px] md:top-[98px] right-[0px] md:-right-[7px] w-[150px] h-[150px] md:w-[190px] md:h-[190px] overflow-hidden rounded-lg">
            <Image
              src={Couple}
              alt="couple"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  )
}

export default TerimakasihSection