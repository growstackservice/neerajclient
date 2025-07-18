'use client';

import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  const handleScheduleCall = () => {
    console.log('Schedule call clicked');
     window.open('https://calendly.com/neerja-1/discovery-session', '_blank');

  };

  return (
    <div className="flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] pt-4 sm:pt-8 lg:pt-11 px-3 sm:px-6 md:px-10 lg:px-20">
      <div className="text-center flex flex-col items-center justify-center max-w-7xl w-full mt-4 sm:mt-8 lg:mt-12">

        {/* Gradient Heading */}
        <div className="overflow-visible leading-[1.1] px-1 sm:px-2 lg:px-0">
          <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[75px] xl:text-[84px] 2xl:text-[94px] font-bold bg-gradient-to-t from-[#8444DF] via-[#643DDA] to-[#AB8FFF] bg-clip-text text-transparent font-dm-sans tracking-tight">
            Awaken . Align . Amplify
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-medium leading-[1.2] sm:leading-[1.1] lg:leading-[1] text-[#3A189E] font-dm-sans mt-3 sm:mt-4 lg:mt-6 px-2 sm:px-4 lg:px-0 max-w-3xl lg:max-w-4xl">
          Transform Your Leadership from the Inside Out
        </p>

        {/* Supporting Text */}
        <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-normal leading-relaxed sm:leading-snug text-[#3A189E] font-dm-sans max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mt-2 sm:mt-3 lg:mt-4 px-3 sm:px-4 lg:px-0">
          Navigate pressures, ignite purpose, and build high-trust teams—guided by Neerja Bhatia's Living Intelligence approach.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleScheduleCall}
          className="mt-4 sm:mt-6 lg:mt-8 xl:mt-9 bg-[#6433F6] hover:bg-[#532adb] text-[#FFFFFF] font-semibold px-4 sm:px-6 py-2.5 sm:py-3 lg:py-4 rounded-full text-sm sm:text-base flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          Schedule A Call
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
