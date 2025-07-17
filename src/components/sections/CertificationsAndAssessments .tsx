import React from 'react';

const CertificationsAndAssessments = () => {
  const certifications = [
    "Laser Coaching Practitioner",
    "Facilitator Of Transformation",
    "Professional Coach (CPC)",
    "ICF Coach ACC",
    "Culture Transformation Consultant (CTT)",
    "Transformation Through Values",
    "Transpersonal Psychology Coach",
    "Vital Smarts Certification – Crucial Conversations/Accountability",
    "Franklin Covey-Certified Trainer For Speed Of Trust And Unconscious Bias"
  ];

  const assessments = [
    "EQ I-2.0",
    "CSI (Change Style Indicator)",
    "DiSC",
    "Myer Briggs Certified (MBTI)",
    "Energy Leadership Index – (ELI-MP)",
    "Behaviors Analyst (CPBA)",
    "Values Analyst (CPVA)",
    "Tri-Metrix And DNA Analyst (CP Tri-Metrix HD)",
    "TILT365 Assessment",
    "Barrett Values Assessment",
    "Leadership Circle"
  ];

  return (
    <div className="bg-white flex justify-center pt-12 sm:pt-16 pb-6">
      <div className="max-w-7xl w-full px-4 sm:px-6">
        <section className="mb-12 sm:mb-16">
          <h2
            className="text-[#6433F6] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center mb-4 sm:mb-6">
            Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="relative inline-block rounded-full p-[0.80px] shadow-md bg-gradient-to-r from-[#9876FF] via-[#6A47D2] to-[#4219bb]"
              >
                <span className="block rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-black bg-white">
                  {cert}
                </span>
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-[#6433F6] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center mb-4 sm:mb-6" >
            Assessments
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {assessments.map((assessment, index) => (
              <span
                key={index}
                className="relative inline-block rounded-full p-[0.80px] shadow-md bg-gradient-to-r from-[#9876FF] via-[#6A47D2] to-[#4219bb]"
              >
                <span className="block rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-black bg-white ">
                  {assessment}
                </span>
              </span>
            ))}
          </div>

        </section>
      </div>
    </div>
  );
};

export default CertificationsAndAssessments;