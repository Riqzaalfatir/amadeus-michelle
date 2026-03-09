import Image from "next/image";
import HeroKanan from "@/assets/HeroKanan.png"


const MobileContainer = () => {
  return (
    <div className="w-full min-h-screen flex justify-center">

      <div className="relative w-full  min-h-screen bg-[#F6EEE1] flex flex-col items-center">

        <div className="stripe absolute top-0 left-0 right-0" />

        <div className="pt-[100px] pb-[80px] flex flex-col items-center ">

          <div className="text-center">
            <h1 className="font-nelphim text-[48px] tracking-wide text-[#2E497C]">
              AMADEUS
            </h1>

            <p className="text-[#E0A786] font-breadley text-[31px]">and</p>

            <h1 className="font-nelphim text-[48px] tracking-wide text-[#2E497C]">
              MICHELLE
            </h1>
          </div>


          <Image
            src={HeroKanan}
            alt="Hero"
            width={300}
            height={300}
            className="object-contain"
          />

          <div className="mt-[22px] font-breadley text-[21px] leading-[100%] tracking-[3px] text-center text-[#c79a73]">
            24.01.26
          </div>

        </div>

        <div className="stripe absolute bottom-0 left-0 right-0 flex items-center justify-center font-breadley">
          <span className=" text-[#2E497C] px-4 py-1 text-[12px] tracking-[2px]">
            #AureliaFernandoWedding
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileContainer;