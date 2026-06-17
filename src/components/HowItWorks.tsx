import { Icon } from "@/components/Icon";
import { steps } from "@/lib/landing-content";

const iconWrapTone: Record<string, string> = {
  primary: "bg-primary/5 group-hover:bg-primary",
  secondary: "bg-secondary/5 group-hover:bg-secondary",
};

const iconTone: Record<string, string> = {
  primary: "text-primary group-hover:text-white",
  secondary: "text-secondary group-hover:text-white",
};

export function HowItWorks() {
  return (
    <section className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg mb-4">
            Streamlined Success
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Your journey from notification to appointment letter, simplified.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group p-stack-lg bg-white rounded-3xl border border-outline-variant transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 ${iconWrapTone[step.tone]} rounded-2xl flex items-center justify-center mb-8 transition-colors`}
              >
                <Icon
                  name={step.icon}
                  className={`${iconTone[step.tone]} text-[32px] transition-colors`}
                />
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-4">
                {step.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
