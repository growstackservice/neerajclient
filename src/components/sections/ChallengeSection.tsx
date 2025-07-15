const ChallengeSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-16 pb-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-9 md:space-y-1 md:space-x-13">
        {/* Left Side */}
            <div className="max-w-2xl">
              <span className="text-[#6433F6] text-[12px] font-semibold uppercase tracking-widest bg-white px-5 py-1 rounded-full inline-block mb-8 shadow-md border border-gray-200">
                The Challenge
              </span>

              <h2 className="font-bold text-5xl sm:text-5xl leading-normal text-black tracking-normal">
                Why Traditional <span className="text-[#6433F6] leading-normal">Leadership</span> Falls Short?
              </h2>
          </div>
        {/* Right Side */}
        <div className="max-w-lg relative top-10">
          <p className="text-base text-[#111827]  font-medium leading-relaxed font-dm-sans">
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


