'use client';

import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  const handleScheduleCall = () => {
    console.log('Schedule call clicked');
  };

  return (
   <div className="flex items-center justify-center min-h-[60vh] pt-11 px-6 sm:px-10 md:px-20">
     <div className="text-center flex flex-col items-center justify-center max-w-7xl w-full mt-20">

        {/* Gradient Heading */}
        <div className="overflow-visible leading-[1.1] ">
          <h1 className="text-[94px] font-bold bg-gradient-to-t from-[#8444DF] via-[#643DDA] to-[#AB8FFF] bg-clip-text text-transparent font-dm-sans">
            Awaken . Align . Amplify
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-[32px] font-medium leading-[1] text-[#3A189E] font-dm-sans  mt-6">
          Transform Your Leadership from the Inside Out
        </p>

        {/* Supporting Text */}
        <p className="text-[18px] font-normal leading-snug text-[#3A189E] font-dm-sans max-w-3xl mt-4">
          Navigate pressures, ignite purpose, and build high-trust teams—guided by Neerja Bhatia’s Living Intelligence approach.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleScheduleCall}
          className="mt-9 bg-[#6433F6]  text-[#FFFFFF] font-semibold px-6 py-4  rounded-full text-base flex items-center gap-2 shadow-sm hover:shadow-md transition-all"
        >
          Schedule A Call
          <ArrowUpRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;




// dont remove until finalized

// 'use client';


// import { ArrowUpRight } from "lucide-react";

// const HeroSection = () => {
//   const handleScheduleCall = () => {
//     console.log('Schedule call clicked');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-[90vh] px-6 sm:px-10 md:px-20">
//       <div className="text-center flex flex-col items-center justify-center max-w-7xl w-full">

//         {/* Heading */}
//         <div className="overflow-visible leading-[1.1]">
//           <h1 className="text-[75px] font-bold bg-gradient-to-t from-[#8444DF] via-[#643DDA] to-[#AB8FFF] bg-clip-text text-transparent font-dm-sans">
//             Awaken . Align . Amplify
//           </h1>
//         </div>

//         {/* Subheading */}
//         <p className="text-[28px] font-medium leading-[1] text-[#3A189E] font-dm-sans max-w-2xl mt-6">
//           Transform Your Leadership from the Inside Out
//         </p>

//         {/* Supporting Text */}
//         <p className="text-[16px] font-normal leading-snug text-[#5A34B3] font-dm-sans max-w-3xl mt-4">
//           Navigate pressures, ignite purpose, and build high-trust teams—guided by Neerja Bhatia’s Living Intelligence approach.
//         </p>

//         {/* CTA Button */}
//         <Button
//           onClick={handleScheduleCall}
//           variant="primary"
//           size="small"
//           className="mt-8 bg-[#6433F6] hover:bg-[#532adb] text-white font-normal px-6 py-2 rounded-full flex items-center gap-2"
//         >
//           Schedule A Call
//           <ArrowUpRight className="w-4 h-4" />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
