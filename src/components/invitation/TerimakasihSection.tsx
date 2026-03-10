import Image from "next/image"
import Ornament from "@/assets/Ornament-03.png"
import Frame from "@/assets/Ornament-Bingkai.png"
import Couple from "@/assets/FotoCouple2.png"

const TerimakasihSection = () => {
    return (
        <section className="relative w-full bg-[#F6EEE1] py-[80px]">

            {/* ornament atas */}
            <Image
                src={Ornament}
                alt="ornament"
                width={140}
                height={140}
                className="absolute -top-[50px] left-[20px] z-10"
            />

            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

                {/* TEXT */}
                <div className="max-w-[420px]">
                    <h2 className="text-[#2E497C] text-[28px] font-nephilm  uppercase">
                        Terima Kasih
                    </h2>

                    <p className="text-[#C75376] text-[14px] font-breadley mt-4 leading-relaxed">
                        Semoga Anda berkenan untuk hadir dan menikmati rangkaian acara
                        pada hari bahagia kami.
                    </p>
                </div>



                {/* FOTO + BINGKAI */}
                <div className="relative">

  {/* FOTO */}
  <div className="absolute w-[60.5px] h-[80.3px] rotate-12 overflow-hidden">
    <Image
      src={Couple}
      alt="couple"
      fill
      className="object-cover"
    />
  </div>

  {/* FRAME */}
  <Image
    src={Frame}
    alt="frame"
    className="w-[180px]"
  />

</div>

            </div>


        </section>
    )
}

export default TerimakasihSection