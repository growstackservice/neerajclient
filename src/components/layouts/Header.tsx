
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
    <header className="flex justify-between items-center px-6 sm:px-10 md:px-16 py-6 relative z-10 mt-6">
      <h1 className="font-semibold text-black text-3xl  transition-colors text-[25px] font-dm-sans">
        Neerja Bhatia
      </h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleContactClick}
          className="bg-[#6433F6] text-[#FFFFFF] font-bold text-[16px] px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all"
        >
          Contact us
        </button>

        <button
          onClick={handleLinkedInClick}
          className="w-10 h-10 flex justify-center items-center rounded  text-[#532adb] text-lg  bg-[#f2f1fb] "
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
      </div>
    </header>
  );
};

export default Header;



