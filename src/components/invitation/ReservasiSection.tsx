import Image from "next/image"
import Ornament from "@/assets/Ornament-02.png"

const ReservasiSection = () => {
    return (
        <section className="w-full bg-[#F6EEE1] pt-[80px] pb-[50px]">
            <div className="max-w-7xl mx-auto px-4 text-center">

                {/* Title dengan ornament */}
                <div className="relative flex justify-center items-center">
                    <Image
                        src={Ornament}
                        alt="ornament"
                        width={400}
                        height={210}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[190px] object-contain"
                    />

                    <h2 className="relative text-[#C85375] uppercase text-[14px] font-nephilm tracking-[1px] leading-none ">
                        RESERVATION
                    </h2>
                </div>

                {/* Guest Name */}
                <h3 className="text-[#2E497C] text-[18px] font-nephilm  uppercase pt-[50px] tracking-[1px] leading-none">
                    Guest Name & Fam
                </h3>

                {/* Description */}
                <p className="text-[#C75376] text-[16px] font-breadley pt-[11px] tracking-[1px]">
                    Mohon konfirmasi kehadiran Bapak/Ibu di acara
                    pernikahan kami sebelum kamis 15 Januari 2026
                </p>

                {/* RSVP Buttons */}
                <div className="flex justify-center gap-6 mt-[40px]">
                    <button className="bg-white text-[#E0A786] px-8 py-2 rounded-lg text-[14px] font-breadley tracking-[1px] shadow-sm
    transition-all duration-300 ease-out
    hover:bg-[#E0A786] hover:text-white hover:shadow-lg hover:scale-105
    active:scale-95">
                        Hadir
                    </button>

                    <button className="bg-white text-[#E0A786] px-8 py-2 rounded-lg text-[14px] font-breadley tracking-[1px] shadow-sm
    transition-all duration-300 ease-out
    hover:bg-[#E0A786] hover:text-white hover:shadow-lg hover:scale-105
    active:scale-95">
                        Tidak Hadir
                    </button>
                </div>

                {/* Help */}
                <p className="text-[#C75376] text-[16px] font-breadley uppercase pt-[35px] leading-none">
                    PERLU BANTUAN?
                </p>

                <button className="bg-white text-[#E0A786] px-8 py-2 rounded-lg text-[14px] font-breadley mt-[15px] tracking-[1px] shadow-sm
transition-all duration-300 ease-out
hover:bg-[#E0A786] hover:text-white hover:shadow-lg hover:scale-105
active:scale-95">
                    Hubungi Tim Provite
                </button>
            </div>
        </section>
    )
}

export default ReservasiSection