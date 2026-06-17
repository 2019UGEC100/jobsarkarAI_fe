import { Icon } from "@/components/Icon";
import { footerColumns } from "@/lib/landing-content";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-1">
          <a
            className="font-headline-sm text-headline-sm font-black text-primary mb-6 block"
            href="#"
          >
            JobSarkar.ai
          </a>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            © 2024 JobSarkar.ai. <br />
            Job sahi, Milegi yahi! Trusted by 10k+ successful students.
          </p>
          <div className="flex gap-4">
            <Icon
              name="public"
              className="text-outline cursor-pointer hover:text-primary transition-colors"
            />
            <Icon
              name="share"
              className="text-outline cursor-pointer hover:text-primary transition-colors"
            />
            <Icon
              name="mail"
              className="text-outline cursor-pointer hover:text-primary transition-colors"
            />
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4 className="font-label-md text-label-md font-bold mb-6 text-on-surface">
              {column.title}
            </h4>
            <ul className="space-y-4">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/30 text-center">
        <p className="font-label-sm text-label-sm text-outline">
          123 Gov-Connect Plaza, Sector 4, New Delhi - 110001
        </p>
      </div>
    </footer>
  );
}
