const PromiseSection = () => {
  const cards = [
    {
      title: 'Awaken',
      subtitle: 'Innate Wisdom:',
      description: 'Uncover your blind spots and reconnect with your innate wisdom and self-regulation.',
      image: '/images/awaken-icon.jpg',
      imageAlt: 'Concentric circles purple gradient abstract art representing Awaken Innate Wisdom'
    },
    {
      title: 'Align',
      subtitle: 'Values & Actions:',
      description: 'Harmonize your inner compass with your external actions, cultivating peace, purpose, and balance.',
      image: '/images/align-icon.jpg',
      imageAlt: 'Interlocking chain links purple gradient abstract art representing Align Values & Actions'
    },
    {
      title: 'Amplify',
      subtitle: 'Authentic Impact:',
      description: 'Harness your true strengths to inspire trust, drive results, and leave a lasting legacy.',
      image: '/images/amplify-icon.jpg',
      imageAlt: 'Curved wave lines purple gradient abstract art representing Amplify Authentic Impact'
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <span className="text-[#6433F6] text-xs sm:text-sm font-semibold uppercase tracking-widest bg-white px-4 sm:px-5 py-1 sm:py-2 rounded-full inline-block mb-4 sm:mb-6 shadow-md border border-gray-200">
          The Promise
        </span>

        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6 text-gray-900 tracking-normal px-2 sm:px-0">
          Lead from Your Core.{' '}
          <span className="bg-gradient-to-b from-[#2A0A89] via-[#2A0A89] to-[#CDBCFF] bg-clip-text text-transparent">
            Inner Field of Living Intelligence.
          </span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-[#202020] font-normal px-4 sm:px-0 max-w-3xl mx-auto">
          Through bespoke{' '}
          <span className="font-semibold">one-on-one</span> and team coaching, Neerja helps you
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 font-dm-sans">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#fbf9fb] shadow-[0_12px_20px_rgba(0,0,0,0.10)] transition duration-300 ease-in-out hover:shadow-[0_16px_64px_rgba(0,0,0,0.2)] transform hover:-translate-y-1"
          >
            
            {/* Image */}
            <div className="rounded-xl sm:rounded-2xl p-0 w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-[radial-gradient(ellipse_at_top_left,_#FFFFFF_10%,_#EDE7FF_80%)] shadow-sm flex items-center justify-center mb-4 sm:mb-6">
              <img
                src={card.image} 
                alt={card.imageAlt}
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              />
            </div>

            {/* Text Content */}
            <div className="text-left font-dm-sans">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#1B1B1B] mb-2 sm:mb-3 leading-tight tracking-tight">
                <span className="bg-gradient-to-b from-[#2A0A89] via-[#2A0A89] to-[#CDBCFF] text-transparent bg-clip-text font-semibold">
                  {card.title}
                </span>{' '}
                {card.subtitle}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#333333] leading-relaxed tracking-tight">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromiseSection;

