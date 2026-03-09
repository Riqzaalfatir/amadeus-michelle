"use client"
import { useState } from "react"

const Pesan = [
    {
        nama: "John Doe",
        pesan: "Happy wedding Amadeus & Michelle! selamat menempuh hidup baru, God Bless your wedding!"
    },
    {
        nama: "Felix Setiawan",
        pesan: "Happy wedding Amadeus & Michelle! selamat menempuh hidup baru, God Bless your wedding!"
    },
    {
        nama: "Andrew Garfield",
        pesan: "Happy wedding Amadeus & Michelle! selamat menempuh hidup baru, God Bless your wedding!"
    },
    {
        nama: "Robert Downey",
        pesan: "Happy wedding Amadeus & Michelle! selamat menempuh hidup baru, God Bless your wedding!"
    },
    {
        nama: "Chris Evans",
        pesan: "Happy wedding Amadeus & Michelle! selamat menempuh hidup baru, God Bless your wedding!"
    }
]

const PesanSection = () => {

    const [media, setMedia] = useState<File | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setMedia(e.target.files[0])
        }
    }

    return (
        <section className='w-full bg-[repeating-linear-gradient(90deg,#E3CDB6_0px,#E3CDB6_3px,#F0E1D0_3px,#F0E1D0_12px)] py-[50px]'>
            <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">

                <h2 className='text-[#2E497C] text-[24px] font-nelphim uppercase'>
                    Pesan Pribadi
                </h2>

                <h4 className='text-[#C75376] text-[16px] font-breadley pt-[8px]'>
                    Tinggalkan pesan dan harapan untuk kami
                </h4>

                {/* Nama */}
                <input
                    type="text"
                    className='p-3 w-[341px] bg-white/60 rounded-md mt-[43px]'
                />

                {/* Pesan */}
                <textarea
                    className='p-3 h-[240px] w-[341px] bg-white/60 rounded-md mt-[15px]'
                />

                <p className='text-[#C75376] text-[16px] font-breadley mt-[28px]'>
                    Tambah foto atau video?
                </p>

                {/* Upload Media */}
                <label className="mt-[12px] w-[341px] h-[37px] bg-white/60 rounded-md flex items-center justify-start  cursor-pointer">

                    <div className="text-[#C75376] text-2xl leading-none pl-4">
                        +
                    </div>

                    <input
                        type="file"
                        accept="image/*,video/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />

                </label>

                <button className="bg-[#2E497C] py-2 px-10 text-white rounded-md text-[14px] font-breadley mt-[25px]">Kirim Pesan</button>

                <div className="w-[341px] bg-[#E9D5C0] rounded-lg mt-[40px] pt-[33px] pb-[50px] flex flex-col gap-8">

                    {Pesan.map((item, index) => (
                        <div key={index} className="text-center">

                            <h3 className="text-[#2E497C] text-[14px] font-nelphim uppercase">
                                {item.nama}
                            </h3>

                            <p className="text-[#C75376] text-[14px] font-breadley mt-2 max-w-[280px] mx-auto">
                                {item.pesan}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default PesanSection