import Image from "next/image";
import HeroKanan from "@/assets/HeroKanan.png";

const MobileContainer = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-[#F6EEE1]">

      <div className="relative w-full min-h-screen flex flex-col items-center
      max-w-[420px] md:max-w-[520px] lg:max-w-[620px]">

        {/* Stripe Atas */}
        <div 
        data-aos="fade-down"
        data-aos-delay="50"
        className="stripe absolute top-0 left-0 right-0" />

        <div className="pt-[60px] md:pt-[100px] lg:pt-[80px] pb-[80px] md:pb-[100px] lg:pb-[120px] flex flex-col items-center">

          <div className="text-center">
            <h1 
            data-aos="fade-down"
            data-aos-delay="150"
            className="font-nephilm text-[48px] tracking-wide text-[#2E497C]">
              AMADEUS
            </h1>

            <p 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-[#E0A786] font-breadley text-[31px]">
              and
            </p>

            <h1 
            data-aos="fade-down"
            data-aos-delay="450"
            className="font-nephilm text-[48px] tracking-wide text-[#2E497C]">
              MICHELLE
            </h1>
          </div>

          <Image
            data-aos="zoom-in"
            data-aos-delay="600"
            src={HeroKanan}
            alt="Hero"
            width={300}
            height={300}
            className="object-contain w-[260px] md:w-[420px] lg:w-[340px]"
            priority
          />

          <div 
          data-aos="fade-right"
          data-aos-delay="750"
          className="relative z-10 mb-[5px] md:mb-[5px] font-breadley text-[21px] leading-[100%] tracking-[3px] text-center text-[#c79a73]">
            24.01.26
          </div>

        </div>

        {/* Stripe Bawah */}
        <div 
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-anchor-placement="top-bottom"
        className="stripe absolute bottom-0 left-0 right-0 flex items-center justify-center">
          <span className="text-[#2E497C] px-4 py-1.5 text-[12px] tracking-[2px] font-breadley">
            #AureliaFernandoWedding
          </span>
        </div>

      </div>
    </div>
  );
};

export default MobileContainer;