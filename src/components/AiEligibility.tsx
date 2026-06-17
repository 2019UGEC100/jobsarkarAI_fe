import {
  aiStats,
  candidateAvatar,
  eligibilityCriteria,
} from "@/lib/landing-content";

export function AiEligibility() {
  return (
    <section className="py-section-gap overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-inverse-surface text-on-primary p-12 md:p-24 rounded-[48px] relative overflow-hidden flex flex-col md:flex-row items-center gap-20">
          {/* Copy + stats */}
          <div className="flex-1 relative z-10">
            <span className="bg-primary-fixed-dim text-on-primary-fixed font-label-md text-label-md px-4 py-2 rounded-full mb-8 inline-block">
              CANDIDATE INSIGHTS
            </span>
            <h2 className="font-display-lg text-display-lg text-white mb-8">
              AI-Powered Eligibility Analysis
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Stop reading complex PDF notifications. Our engine parses 5,000+
              government notifications in real-time, matching your age, caste,
              education, and physical criteria instantly.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              {aiStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[40px] font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-label-md text-outline-variant">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <button className="bg-white text-inverse-surface px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
              Explore AI Match Score
            </button>
          </div>

          {/* Match card */}
          <div className="flex-1 relative z-10 w-full">
            <div className="bg-surface-container-lowest/10 backdrop-blur-md p-8 rounded-[32px] border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover"
                    alt="Rahul Sharma, aspiring civil servant"
                    src={candidateAvatar}
                  />
                </div>
                <div>
                  <p className="font-bold text-white">Rahul Sharma</p>
                  <p className="text-label-sm text-outline-variant">
                    Aspiring Civil Servant
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {eligibilityCriteria.map((criterion) => (
                  <div
                    key={criterion.label}
                    className="bg-white/5 p-4 rounded-xl border border-white/5"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-label-sm">{criterion.label}</span>
                      <span className="text-secondary font-bold">
                        {criterion.status}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full w-full" />
                    </div>
                  </div>
                ))}
                <div className="bg-primary p-4 rounded-xl mt-6 text-center">
                  <p className="font-bold">Overall Match: 98%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
