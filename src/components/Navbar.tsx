import Link from "next/link";

import { navLinks } from "@/lib/landing-content";

export function Navbar() {
  return (
    <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 w-full max-w-container-max mx-auto">
        <div className="flex items-center gap-stack-lg">
          <Link
            className="font-headline-md text-headline-md font-bold text-primary"
            href="/"
          >
            JobSarkar.ai
          </Link>
          <div className="hidden md:flex items-center gap-stack-md ml-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={
                  link.active
                    ? "text-primary font-bold border-b-2 border-primary py-2 font-label-md text-label-md"
                    : "text-on-surface-variant hover:text-primary transition-colors py-2 font-label-md text-label-md"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-stack-md">
          <Link
            href="/login"
            className="px-6 py-2 rounded-lg border border-outline text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high/50 transition-all active:scale-95"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:opacity-90 transition-all active:scale-95"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
