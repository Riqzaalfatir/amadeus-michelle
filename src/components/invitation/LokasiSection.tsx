import Image from "next/image"
import Ornament from "@/assets/Ornament-01.png"

const LokasiSection = () => {
    return (
        <section className="w-full bg-[#E9D5C0] py-[45px]">
            <div className="max-w-4xl mx-auto px-4 text-center">

                {/* Nama tempat */}
                <h2 className="text-[#2E497C] text-[18px] uppercase font-nephilm ">
                    SUDIRMAN GRAND BALLROOM
                </h2>

                {/* Alamat */}
                <p className="text-[#C75376] pt-2 text-[16px] font-breadley">
                    Jln. Jendral Sudirman No. 620 Bandung
                </p>

                {/* Button arah lokasi */}
                <div className="relative inline-block px-10 py-6">
                    <Image
                        src={Ornament}
                        alt="ornament"
                        width={360}
                        height={110}
                        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 object-contain"
                    />
                    <button className="relative text-[#C85375] text-[14px] uppercase font-nephilm ">
                        ARAHKAN KE LOKASI
                    </button>
                </div>

                {/* Waktu acara */}
                <div className="flex justify-center items-center gap-10 md:gap-16 pt-[20px]">

                    {/* Pemberkatan */}
                    <div className="text-center">
                        <p className="text-[#C85375] text-[14px] font-breadley">
                            PEMBERKATAN
                        </p>
                        <p className="text-[#2E497C] text-[21px] font-nephilm ">
                            15.00 <span className="text-[8px]">WIB</span>
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-[1px] h-12 bg-[#C75375]"></div>

                    {/* Resepsi */}
                    <div className="text-center">
                        <p className="text-[#C85375] text-[14px] font-breadley">
                            RESEPSI
                        </p>
                        <p className="text-[#2E497C] text-[21px] font-nephilm ">
                            18.00 <span className="text-[8px]">WIB</span>
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default LokasiSection