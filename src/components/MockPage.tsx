import Link from "next/link";

type MockPageProps = {
  title: string;
  description: string;
};

export function MockPage({ title, description }: MockPageProps) {
  return (
    <main className="min-h-screen bg-surface px-margin-mobile py-16 md:px-margin-desktop">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="font-label-md text-label-md font-bold text-primary">
          JobSarkar.ai
        </Link>
        <div className="mt-10 rounded-xl bg-white p-8 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
          <p className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-outline">
            Mock route
          </p>
          <h1 className="mt-3 font-headline-lg text-headline-lg text-on-surface">
            {title}
          </h1>
          <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
            {description}
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-lg bg-primary px-5 py-3 font-label-md text-label-md font-bold text-on-primary"
          >
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}

