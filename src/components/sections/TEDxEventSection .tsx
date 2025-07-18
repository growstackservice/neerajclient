"use client";

import React from 'react';
import { ArrowUpRight } from "lucide-react";

const TEDxEventSection = () => {
  const handleReserveSeat = () => {
    // Add your reservation logic here
     window.open('https://lu.ma/onkmedmq?tk=GDKp4y', '_blank');
  };

  return (
    <div className="bg-white text-black font-dm-sans mt-0 pt-0 ml-0 lg:ml-10">
     <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20 pt-0">
          <section className="lg:w-1/2 max-w-xl">
            <span className="inline-block text-[10px] sm:text-[12px] font-semibold text-[#6433F6] bg-white rounded-full px-3 sm:px-5 py-1 mb-3 sm:mb-4 shadow-[0_0_5px_rgba(92,77,255,0.3)] tracking-wider">
              EVENT
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-2">
              TEDxApex 2025
            </h1>
            <h2 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] bg-gradient-to-b from-[#2A0A89] via-[#2A0A89] to-[#CDBCFF] bg-clip-text text-transparent font-medium mb-4 sm:mb-6">
              Journey to Remembering
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-tight mb-4">
              This November, I'll take the{' '}
              <a className="text-[#6433F6] hover:underline font-semibold" href="# font-dm-sans text-[30px]">
                TEDxApex
              </a>{' '}
              stage to share something close to my heart —{' '}
              <em>Journey to Remembering</em>.
              <br />
              It's not about becoming someone new, but{' '}
              <a className="text-[#6433F6] hover:underline font-semibold" href="#">
                returning to who we were
              </a>{' '}
              before the world told us who to be.
              <br />
              This talk is an invitation to listen inward, shed the noise, and reconnect with your truest self —{' '}
              <a className="text-[#6433F6] hover:underline font-semibold" href="#">
                the field of living intelligence within.
              </a>
            </p>
            <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 text-[14px] sm:text-[16px] md:text-[18px]">
              <li className="flex items-center gap-2 sm:gap-3">
              <span className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-md bg-[#E6E0FF]">
                <img src="/images/calender.png" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" alt="calendar icon" />
              </span>
              <span className="text-[14px] sm:text-[16px] text-gray-800">November 6, 2025</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <span className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-md bg-[#E6E0FF]">
                <img src="/images/location.png" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" alt="location icon" />
              </span>
              <span className="text-[14px] sm:text-[16px] text-gray-800">Apex, North Carolina</span>
            </li>
          </ul>
            <div className="flex flex-wrap items-center gap-x-2 font-DM_Sans">
              <p className="bg-gradient-to-b from-[#401AB3] via-[#401AB3] to-[#CDBCFF] bg-clip-text text-transparent font-semibold mb-0 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]">
                Tickets are now live
              </p>
              <p className="mb-0 text-[16px] sm:text-[18px] md:text-[20px]">
                — I'd be honored to have you there.
              </p>
            </div>
            <button 
              onClick={handleReserveSeat}
              className="inline-flex items-center gap-2 bg-[#6433F6] text-[#FFFFFF] text-sm sm:text-base font-semibold rounded-full px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#4b3f9b] transition mt-4 sm:mt-6" 
              type="button"
            >
              Reserve Your Seat
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 gap-1" />
            </button>
          </section>
          <section className="lg:w-1/2 mt-8 sm:mt-10 lg:mt-0">
            <img 
              alt="Large red TEDx letters on a stage with a dark black background and purple light reflection on the floor" 
              className="rounded-xl w-full object-cover" 
              height="350" 
              loading="lazy" 
              src="/images/tedximage.png" 
              width="550"
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default TEDxEventSection;