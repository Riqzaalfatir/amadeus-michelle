import Image from "next/image"
import Ornament from "@/assets/Ornament-03.png"
import Frame from "@/assets/Ornament-Bingkai.png"
import Couple from "@/assets/FotoCouple2.png"

const TerimakasihSection = () => {
    return (
        <section className="relative w-full bg-[#F6EEE1]">

            {/* ornament atas */}
            <Image
                src={Ornament}
                alt="ornament"
                width={140}
                height={140}
                className="absolute -top-[50px] left-[20px] z-10"
            />

            <div className="max-w-7xl mx-auto px-4 flex items-start justify-between">

                {/* TEXT */}
                <div className="w-[510px] -mr-[180px] z-20 pt-[70px]">
                    <h2 className="text-[#2E497C] text-[28px] font-nephilm  uppercase tracking-[1px]">
                        Terima Kasih
                    </h2>

                    <p className="text-[#C75376] text-[14px] font-breadley mt-4 leading-relaxed tracking-[1px] max-w-[224px]">
                        Semoga Anda berkenan untuk hadir dan menikmati rangkaian acara
                        pada hari bahagia kami.
                    </p>
                </div>

                <div className="relative w-[370px] h-[340px] flex justify-center items-cente">

                    {/* FRAME */}
                    <div className="absolute w-[300px] h-[380px]">
                        <Image
                            src={Frame}
                            alt="frame"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* FOTO */}
                    <div className="absolute top-[98px] -right-[7px] w-[190px] h-[190px] overflow-hidden rounded-lg">
                        <Image
                            src={Couple}
                            alt="couple"
                            fill
                            className="object-contain"
                        />
                    </div>

                </div>

            </div>


        </section>
    )
}

export default TerimakasihSection