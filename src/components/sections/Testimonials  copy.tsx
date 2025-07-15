"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index : number) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="relative max-w-[1400px] mx-auto px-4 pt-0 pb-8">
      {/* Container image positioned at the top */}
      <div className="relative w-full mb-8">
        <img
          src="/images/Container.png"
          alt="Container banner"
          className="w-full h-auto object-cover"
          style={{ maxHeight: '400px' }}
        />
      </div>

      {/* Content overlay positioned over the bottom part of the image */}
      <div className="relative -mt-32 z-10 pt-6">
        {/* Label */}
        <div className="flex justify-center mb-4">
          <span className="text-[#6433F6] text-[12px] font-semibold uppercase tracking-[0.2em] bg-white px-6 py-2 rounded-full shadow-md border border-gray-100">
            TESTIMONIALS
          </span>
        </div>

        {/* Heading */}
          <h2 className="text-center text-black font-bold text-[50px] leading-tight mb-2">
            Trusted by leaders
          </h2>
          <h3 className="text-center text-[50px] font-light mb-12 bg-gradient-to-b via-[#2A0A89] from-[#2A0A89]  to-[#CDBCFF] bg-clip-text text-transparent">
            from various industries
          </h3>
    </div>

     <div>
      {/* Testimonial carousel container */}
      <div className="flex items-center w-full max-w-5xl mx-auto mt-10 space-x-4">
        
        {/* Left side purple gradient block */}
        <div
          className="hidden sm:block flex-shrink-0 w-24 h-48 rounded-xl "
          style={{ background: 'linear-gradient(90deg, #F9F7FF 100%, #D9D6FF 10%)' }}
        />

        {/* Main testimonial container */} 
        <div
          className="flex flex-col relative rounded-xl p-8 flex-grow max-w-4xl min-h-3xl"
          style={{ background: 'radial-gradient(circle at center, #F9F7FF 100%, #D9D6FF 10%)' }}
        >
          {/* Left arrow */}
          <button
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center text-gray-700 hover:text-indigo-700 hover:border-indigo-700 transition"
        >
          <ChevronLeft size={14} />
        </button>

          {/* Testimonial content */}
          <div className="max-w-3xl mx-auto font-dm-sans">
            <p className="font-semibold text-sm text-[#000000] mb-1.5">
              {current.name}
            </p>
            <p className="italic text-xs text-[#000000] mb-9">
              {current.title}
            </p>

            <div className="relative text-[#000000] text-sm leading-relaxed mt-3">
              <div className="text-[#6433F6] text-sm absolute -left-2 -top-2" aria-hidden="true">
                 <img src="/images/Quote-up.png" className='w-5'/>
              </div>
              <p className="pl-6">
                {current.content}
              </p>
              <div className="text-[#6433F6] text-sm absolute -right-3 bottom-0" aria-hidden="true">
                <img src="/images/Quote-down.png" className='w-5'/>
              </div>
            </div>
          </div>

          {/* Right arrow */}
         <button
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center text-[#000000] hover:text-indigo-700 hover:border-indigo-700 transition"
        >
          <ChevronRight size={16} />
        </button>
        </div>

        {/* Right side purple gradient block */}
        <div
          className="hidden sm:block flex-shrink-0 w-24 h-48 rounded-xl"
          style={{ background: 'linear-gradient(90deg, #F9F7FF 100%, #D9D6FF 0%)' }}
        />
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`${
              index === currentTestimonial
                ? 'w-16 h-2 rounded-full bg-[#6433F6]'
                : 'w-2 h-2 rounded-full bg-purple-300'
            } inline-block transition-all duration-300`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
     </div>
    </section>
  );
};

export default Testimonials;