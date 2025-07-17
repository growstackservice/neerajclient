
import React from 'react';

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 bg-white">
      <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-8 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
        {/* Right Image Section (on mobile: top, on tablet+: right) */}
        <div className="flex-1 min-w-0 max-w-lg flex items-center justify-center order-1 sm:order-2 mb-6 sm:mb-0">
          <img
            src="/images/neerja-portrait.jpg"
            alt="Portrait of Neerja Bhatia wearing black top and glasses with necklace, smiling"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto object-contain object-center"
          />
        </div>
        {/* Left Content Section */}
        <div className="flex-1 min-w-0 max-w-lg flex flex-col justify-between h-full order-2 sm:order-1">
          <div>
            {/* About Badge */}
            <div className="inline-block">
              <span className="text-[#6433F6] text-[10px] sm:text-[12px] font-semibold bg-[#FFFFFF] px-3 sm:px-5 py-1 rounded-full tracking-wider uppercase inline-block shadow-md border border-gray-100">
                ABOUT
              </span>
            </div>

            {/* Name and Title */}
            <h1 className="text-[28px] sm:text-[36px] md:text-5xl font-bold text-black mt-4 sm:mt-6 mb-3 sm:mb-4 leading-tight">
              Neerja Bhatia
            </h1>

            <div className="mb-8 sm:mb-12 lg:mb-16 tracking-tight">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal bg-gradient-to-b from-[#2A0A89] via-[#2A0A89] to-[#CDBCFF] text-transparent bg-clip-text font-dm-sans">
                Conscious Leadership Coach | Facilitator | Author |
              </p>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal bg-gradient-to-b from-[#2A0A89] via-[#2A0A89] to-[#CDBCFF] text-transparent bg-clip-text font-dm-sans">
                Creator of the Living Intelligence Framework
              </p>
            </div>
          </div>

          {/* Bio Paragraphs - Positioned at bottom */}
          <div className="space-y-3 sm:space-y-4 text-[#000000] text-[12px] sm:text-sm leading-[1.3] sm:leading-[1.2] font-dm-sans mt-6 sm:mt-10 tracking-tight font-normal">
            <p>
              Neerja Bhatia is a compassionate guide and visionary thinker with over 20 years of inspiring
              profound, transformative growth. Her frameworks and methodologies are heartfelt practical tools
              rooted in Consciousness Studies, Eastern Wisdom, and Authentic Leadership that awakens the
              true self hidden beneath layers of noise and expectation.
            </p>

            <p>
              In a world filled with noise and relentless pressure, Neerja reminds us that clarity isn't something to
              be hunted or found outside—it's something we carry within, waiting to be remembered. Her work
              invites leaders and change-makers to listen inward, trust their innate wisdom, and return to the
              stillness where authentic guidance resides.
            </p>

            <p>
              Through coaching, facilitation, and her writing, Neerja encourages a gentle shift: from striving and
              controlling to trusting and remembering—the inner journey that leads to true clarity, courageous
              leadership, and heartfelt authenticity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

