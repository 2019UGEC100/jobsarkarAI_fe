import type { Metadata } from "next";

import { AiEligibility } from "@/components/AiEligibility";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { SuccessStats } from "@/components/SuccessStats";
import { buildMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "JobSarkar.ai - Find Government Jobs You Are Eligible For",
  description:
    "Search Indian government jobs, check eligibility, and simplify official notifications with JobSarkar.ai.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd(), websiteJsonLd()]),
        }}
      />
      <main>
        <Hero />
        <HowItWorks />
        <AiEligibility />
        <SuccessStats />
      </main>
      <Footer />
    </>
  );
}
