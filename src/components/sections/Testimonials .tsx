"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isClient, setIsClient] = useState(false);

  console.log('Testimonials rendering, currentTestimonial:', currentTestimonial);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const testimonials = [
    {
      name: "David Chia",
      title: "Head of Enterprise Support, Amazon Web Services",
      content:
        "Neerja is one of the top 3 best Learning and Development Coach I've worked with in my career. She has a sharp sense of discernment, empathy, combined with a sweet personality that brings people together wherever she goes. She helped put together a few customized leadership workshops for my team when I was working at Red Hat and every one of her workshop was excellent and well-received. She connects the dots very quickly to understand the dynamics of your team and recommends solutions that will meet the needs of your team. I highly recommend Neerja to anyone seeking her expertise, you won't be disappointed.",
    },
    {
      name: "Sarah Johnson",
      title: "VP of Human Resources, Microsoft",
      content:
        "Working with Neerja has been transformative for our leadership team. She brings a unique blend of deep industry insight, emotional intelligence, and a tailored approach to leadership development. Neerja spent time understanding our organizational challenges and then designed highly personalized programs that resonated with every team member. Her sessions are engaging, practical, and grounded in real-world experience, making it easy for participants to apply what they learn immediately. We saw a tangible uplift in team dynamics, communication, and strategic alignment post her engagement. I strongly recommend her to any organization aiming to build strong, conscious leaders.",
    },
    {
      name: "Michael Chen",
      title: "Director of Operations, Google",
      content:
        "Neerja's coaching approach is both strategic and deeply personal. From our first session, it was clear she had a rare ability to connect with people at a core level, helping them unlock their leadership potential. She worked closely with our senior leaders to uncover barriers to performance and designed interventions that were insightful and actionable. Her expertise in organizational behavior and her intuitive grasp of group dynamics helped us address long-standing issues and enhance cross-functional collaboration. Our leadership team walked away with renewed clarity, purpose, and confidence. I would wholeheartedly recommend Neerja for any leadership transformation journey.",
    },
  ];

  const nextTestimonial = () => {
    console.log('Next testimonial clicked, current:', currentTestimonial);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    console.log('Previous testimonial clicked, current:', currentTestimonial);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    console.log('Go to testimonial clicked, index:', index);
    setCurrentTestimonial(index);
  };

  const getPrevIndex = () => (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = () => (currentTestimonial + 1) % testimonials.length;

  const prev = testimonials[getPrevIndex()];
  const current = testimonials[currentTestimonial];
  const next = testimonials[getNextIndex()];

  const getCardHeight = () => {
    if (!isClient) return 250;
    
    const contentLength = current.content.length;
    const nameLength = current.name.length;
    const titleLength = current.title.length;

    // Responsive base heights
    const baseHeight = window.innerWidth < 640 ? 200 : window.innerWidth < 1024 ? 220 : 250;
    const contentHeight = Math.ceil(contentLength / (window.innerWidth < 640 ? 60 : 100)) * (window.innerWidth < 640 ? 14 : 16);
    const headerHeight = Math.ceil((nameLength + titleLength) / (window.innerWidth < 640 ? 30 : 50)) * (window.innerWidth < 640 ? 8 : 10);

    return Math.max(baseHeight + contentHeight + headerHeight, window.innerWidth < 640 ? 250 : 300);
  };

  const cardHeight = getCardHeight();

  const renderCard = (testimonial: typeof testimonials[0], opacity: string, onClick?: () => void, isMainCard = false) => (
    <div
      className={`relative rounded-2xl p-4 sm:p-6 w-full max-w-4xl flex flex-col justify-center shadow-lg flex-shrink-0 transition-all duration-500 ${opacity} cursor-pointer ${
        isMainCard ? 'z-20' : 'z-10'
      }`}
      style={{
        background: "radial-gradient(ellipse at center, #F9F7FF 0%, #E8E4FF 100%)",
        height: isMainCard ? `${cardHeight}px` : 'auto',
        minHeight: isMainCard ? `${cardHeight}px` : '200px',
      }}
      onClick={onClick}
    >
      <div className="max-w-3xl mx-auto flex flex-col justify-center h-full mb-3">
        <h4 className="font-semibold text-base sm:text-lg text-black mb-1" style={{ fontFamily: "DM Sans" }}>
          {testimonial.name}
        </h4>
        <p className="italic text-xs sm:text-sm text-[#000000] mb-4 sm:mb-8" style={{ fontFamily: "DM Sans" }}>
          {testimonial.title}
        </p>
        <div className="relative text-black text-sm sm:text-base leading-relaxed flex-1" style={{ fontFamily: "DM Sans" }}>
          <div className="absolute -left-2 sm:-left-4 -top-2 w-4 h-4 sm:w-6 sm:h-6">
            <img src="/images/Quote-up.png" className="w-full h-full object-contain" alt="Quote" />
          </div>
          <p className="pl-6 sm:pl-8 pr-6 sm:pr-8 text-[#000000] leading-6">{testimonial.content}</p>
          <div className="absolute -right-2 sm:-right-4 -bottom-2 w-4 h-4 sm:w-6 sm:h-6">
            <img src="/images/Quote-down.png" className="w-full h-full object-contain" alt="Quote" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative max-w-[1400px] mx-auto px-4 pt-0 pb-8">
      <div className="relative w-full mb-4 sm:mb-8">
        <img
          src="/images/Container.png"
          alt="Container banner"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "400px" }}
        />
      </div>

      <div className="relative -mt-16 sm:-mt-24 lg:-mt-32 z-10 pt-6">
        {/* Test button to verify button functionality */}
    
        <div className="flex justify-center mb-4">
          <span className="text-[#6433F6] text-[10px] sm:text-[12px] font-semibold uppercase tracking-wider bg-white px-3 sm:px-5 py-1 rounded-full shadow-md border border-gray-100">
            TESTIMONIALS
          </span>
        </div>

        <h2 className="text-center text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight mb-2 tracking-tight px-4">
          Trusted by leaders
        </h2>
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-light mb-8 sm:mb-12 bg-gradient-to-b via-[#2A0A89] from-[#2A0A89] to-[#CDBCFF] bg-clip-text text-transparent tracking-tight px-4">
          from various industries
        </h3>
      </div>

      {/* Mobile Layout - Single Card */}
      <div className="block lg:hidden relative w-full max-w-4xl mx-auto mt-6">
        <div
          className="relative rounded-2xl p-4 sm:p-6 w-full flex flex-col justify-center shadow-lg transition-all duration-500"
          style={{
            background: "radial-gradient(ellipse at center, #F9F7FF 0%, #E8E4FF 100%)",
            minHeight: "280px",
          }}
        >
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="absolute -left-1 sm:-left-2 md:-left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-gray-300 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-gray-700 hover:text-indigo-700 hover:border-indigo-700 transition shadow-xl z-30 cursor-pointer"
            type="button"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="max-w-3xl mx-auto flex flex-col justify-center h-full mb-3">
            <h4 className="font-semibold text-base sm:text-lg text-black mb-1" style={{ fontFamily: "DM Sans" }}>
              {current.name}
            </h4>
            <p className="italic text-xs sm:text-sm text-[#000000] mb-4 sm:mb-8" style={{ fontFamily: "DM Sans" }}>
              {current.title}
            </p>
            <div className="relative text-black text-sm sm:text-base leading-relaxed flex-1" style={{ fontFamily: "DM Sans" }}>
              <div className="absolute -left-2 sm:-left-4 -top-2 w-4 h-4 sm:w-6 sm:h-6">
                <img src="/images/Quote-up.png" className="w-full h-full object-contain" alt="Quote" />
              </div>
              <p className="pl-6 sm:pl-8 pr-6 sm:pr-8 text-[#000000] leading-6">{current.content}</p>
              <div className="absolute -right-2 sm:-right-4 -bottom-2 w-4 h-4 sm:w-6 sm:h-6">
                <img src="/images/Quote-down.png" className="w-full h-full object-contain" alt="Quote" />
              </div>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="absolute -right-1 sm:-right-2 md:-right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-gray-300 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-gray-700 hover:text-indigo-700 hover:border-indigo-700 transition shadow-xl z-30 cursor-pointer"
            type="button"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Desktop Layout - Three Cards */}
      <div className="hidden lg:flex items-center justify-center w-full max-w-7xl mx-auto mt-6 gap-4 xl:gap-6">
        {/* Left Card (Previous) */}
        {renderCard(prev, "opacity-50", prevTestimonial)}

        {/* Main Card (Current) */}
        <div
          className="relative rounded-2xl p-6 w-full max-w-4xl flex flex-col justify-center shadow-lg flex-shrink-0 transition-all duration-500"
          style={{
            background: "radial-gradient(ellipse at center, #F9F7FF 0%, #E8E4FF 100%)",
            height: `${cardHeight}px`,
          }}
        >
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-gray-300 rounded-full w-14 h-14 flex items-center justify-center text-gray-700 hover:text-indigo-700 hover:border-indigo-700 transition shadow-xl z-30 cursor-pointer"
            type="button"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="max-w-3xl mx-auto flex flex-col justify-center h-full mb-3">
            <h4 className="font-semibold text-lg text-black mb-1" style={{ fontFamily: "DM Sans" }}>
              {current.name}
            </h4>
            <p className="italic text-sm text-[#000000] mb-8" style={{ fontFamily: "DM Sans" }}>
              {current.title}
            </p>
            <div className="relative text-black text-base leading-relaxed flex-1" style={{ fontFamily: "DM Sans" }}>
              <div className="absolute -left-4 -top-2 w-6 h-6">
                <img src="/images/Quote-up.png" className="w-full h-full object-contain" alt="Quote" />
              </div>
              <p className="pl-8 pr-8 text-[#000000] leading-6">{current.content}</p>
              <div className="absolute -right-4 -bottom-2 w-6 h-6">
                <img src="/images/Quote-down.png" className="w-full h-full object-contain" alt="Quote" />
              </div>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-gray-300 rounded-full w-14 h-14 flex items-center justify-center text-gray-700 hover:text-indigo-700 hover:border-indigo-700 transition shadow-xl z-30 cursor-pointer"
            type="button"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Right Card (Next) */}
        {renderCard(next, "opacity-50", nextTestimonial)}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`${index === currentTestimonial
              ? "w-8 sm:w-12 lg:w-16 h-2 rounded-full bg-[#6433F6]"
              : "w-2 h-2 rounded-full bg-purple-300"
              } inline-block transition-all duration-300`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
