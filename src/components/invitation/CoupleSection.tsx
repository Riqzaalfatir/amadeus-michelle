import Image from "next/image";
import AFLogo from "@/assets/AF.png";

const CoupleSection = () => {
  return (
    <section className="w-full min-h-screen flex justify-center bg-[#E9D5C0]">

      {/* mobile container */}
      <div className="w-full max-w-[439px] px-6 flex flex-col items-center text-center">

        {/* AF Logo */}
        <Image
          src={AFLogo}
          alt="Aurelia Fernando Logo"
          width={80}
          height={80}
          className="object-contain pt-[82px]"
        />

        {/* quote */}
        <p className="text-[#C75376] text-[16px] pt-[15px] max-w-[260px] leading-relaxed font-breadley">
          Because you have shared in our lives
          by your friendshp and love
        </p>


        {/* couple name */}
         <div className="text-center pt-[102px]">
            <h1 className="font-nelphim text-[42px] tracking-wide text-[#2E497C]">
              AMADEUS
            </h1>

            <p className="text-[#C85374] font-breadley text-[28px] py-[15px]">and</p>

            <h1 className="font-nelphim text-[42px] tracking-wide text-[#2E497C]">
              MICHELLE
            </h1>
          </div>

        {/* parents intro */}
        <p className="text-[#C75376] text-[16px] font-breadley pt-[103px]">
          together with their parents
        </p>

        {/* parents */}
        <div className="text-[#C75376] text-[16px] leading-relaxed font-breadley uppercase pt-[27px] font-semibold">
          <p>MR. JOHANNES ADI PURNAMA PUTRA ST. MT</p>
          <p>&</p>
          <p>MRS. FANNY KURNIAWATI</p>
        </div>

        <div className="text-[#C75376] text-[16px] leading-relaxed font-breadley uppercase pt-[38px] font-semibold">
          <p>MR. JOHANNES ADI PURNAMA PUTRA ST. MT</p>
          <p>&</p>
          <p>MRS. FANNY KURNIAWATI</p>
        </div>


        {/* invitation text */}
        <p className="text-[#C75376] text-[16px] max-w-[280px] leading-relaxed font-breadley py-[72px]">
          Request the pleasure of your company
          to celebrate the marriage of their children
        </p>

      </div>
    </section>
  );
};

export default CoupleSection;