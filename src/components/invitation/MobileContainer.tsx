import Image from "next/image";
import HeroKanan from "@/assets/HeroKanan.png";

const MobileContainer = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-[#F6EEE1]">

      <div className="w-full h-screen flex flex-col items-center
      max-w-[420px] md:max-w-[520px] lg:max-w-[620px]">

        {/* Stripe Atas */}
        <div className="stripe w-full" />

        {/* Konten Tengah */}
        <div className="flex-1 flex flex-col items-center justify-center">

          <div className="text-center">
            <h1 className="font-nephilm text-[48px] tracking-wide text-[#2E497C]">
              AMADEUS
            </h1>

            <p className="text-[#E0A786] font-breadley text-[31px]">
              and
            </p>

            <h1 className="font-nephilm text-[48px] tracking-wide text-[#2E497C]">
              MICHELLE
            </h1>
          </div>

          <Image
            src={HeroKanan}
            alt="Hero"
            width={300}
            height={300}
            className="object-contain w-[260px] md:w-[420px] lg:w-[340px]"
            priority
          />

          <div className="mt-[12px] font-breadley text-[21px] tracking-[3px] text-[#c79a73]">
            24.01.26
          </div>

        </div>

        {/* Stripe Bawah */}
        <div className="stripe w-full flex items-center justify-center">
          <span className="text-[#2E497C] px-4 py-1.5 text-[12px] tracking-[2px] font-breadley">
            #AureliaFernandoWedding
          </span>
        </div>

      </div>
    </div>
  );
};

export default MobileContainer;