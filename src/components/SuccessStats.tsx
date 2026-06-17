import { Icon } from "@/components/Icon";
import { successAvatars } from "@/lib/landing-content";

export function SuccessStats() {
  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-white p-12 md:p-20 rounded-[40px] shadow-sm border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <Icon
                  key={index}
                  name="star"
                  className="text-tertiary-container"
                  filled
                />
              ))}
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-4">
              10k+ Successful students already enrolled.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Join the fastest growing community of government job aspirants in
              India.
            </p>
          </div>
          <div className="flex -space-x-4">
            {successAvatars.map((src, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={index}
                className="w-20 h-20 rounded-full border-4 border-white object-cover"
                alt={`Successful candidate ${index + 1}`}
                src={src}
              />
            ))}
            <div className="w-20 h-20 rounded-full border-4 border-white bg-primary flex items-center justify-center text-white font-bold text-headline-sm">
              +10k
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
