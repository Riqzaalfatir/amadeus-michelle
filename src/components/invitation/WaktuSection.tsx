import Image from "next/image";

const SaveTheDateSection = () => {
  return (
    <section className="w-full flex justify-center bg-[#F6EEE1]">

      {/* mobile container */}
      <div className="w-full max-w-[439px] flex flex-col items-center">

        {/* title */}
        <h2 className="text-[#E0A786] text-[18px] uppercase  py-[27px] font-nelphim">
          SABTU, 24 JANUARI 2026
        </h2>

        {/* gallery preview */}
        <div className="flex gap-4 mb-[38px]">
          <div className="w-[70px] h-[90px] border-2 border-white rounded-lg bg-gray-200" />
          <div className="w-[70px] h-[90px] border-2 border-white rounded-lg bg-gray-200" />
          <div className="w-[70px] h-[90px] border-2 border-white rounded-lg bg-gray-200" />
          <div className="w-[70px] h-[90px] border-2 border-white rounded-lg bg-gray-200" />
        </div>

      </div>
    </section>
  );
};

export default SaveTheDateSection;