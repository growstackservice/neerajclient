const ChallengeSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pt-12 sm:pt-16 pb-16 sm:pb-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 sm:space-y-9 md:space-y-1 md:space-x-13">
        {/* Left Side */}
            <div className="max-w-2xl">
              <span className="text-[#6433F6] text-[10px] sm:text-[12px] font-semibold uppercase tracking-widest bg-white px-3 sm:px-5 py-1 rounded-full inline-block mb-6 sm:mb-8 shadow-md border border-gray-200">
                The Challenge
              </span>

              <h2 className="font-bold text-[28px] sm:text-[36px] md:text-5xl leading-[1.2] sm:leading-normal text-black tracking-normal">
                Why Traditional <span className="text-[#6433F6] leading-normal">Leadership</span> Falls Short?
              </h2>
          </div>
        {/* Right Side */}
        <div className="max-w-lg relative top-0 md:top-10">
          <p className="text-[14px] sm:text-base text-[#111827] font-medium leading-relaxed font-dm-sans">
            Leaders today face ambiguous markets, remote teams and emotional burnout. 
            Without a clear inner compass, decisions become reactive, teams lose cohesion, 
            and engagement dips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;


