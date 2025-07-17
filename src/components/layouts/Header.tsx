
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const handleContactClick = () => {
    // Add contact logic here
    console.log('Contact clicked');
  };

  const handleLinkedInClick = () => {
    // Add LinkedIn navigation logic here
    window.open('https://linkedin.com', '_blank');
  };

  return (
    <header className="flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-4 sm:py-6 relative z-10 mt-2 sm:mt-4 lg:mt-6">
      <h1 className="font-semibold text-black text-[20px] sm:text-[22px] md:text-[25px] lg:text-3xl transition-colors font-dm-sans">
        Neerja Bhatia
      </h1>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          onClick={handleContactClick}
          className="bg-[#6433F6] text-[#FFFFFF] font-bold text-[12px] sm:text-[14px] md:text-[16px] px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full shadow-sm hover:shadow-md transition-all"
        >
          Contact us
        </button>

        <button
          onClick={handleLinkedInClick}
          className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center rounded text-[#532adb] text-sm sm:text-lg bg-[#f2f1fb]"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
      </div>
    </header>
  );
};

export default Header;



