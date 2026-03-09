import Image from "next/image";
import FooterImage from "@/assets/Footer.png";

const FooterSection = () => {
  return (
    <section className="w-full bg-[#E0A786] py-[15px] flex items-center justify-center">
      <Image
        src={FooterImage}
        alt="Provite Powered by TwinkleBook"
        className="object-contain"
      />
    </section>
  );
};

export default FooterSection;