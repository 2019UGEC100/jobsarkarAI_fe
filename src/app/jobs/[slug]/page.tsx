import { MockPage } from "@/components/MockPage";

type JobDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const title = params.slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return (
    <MockPage
      title={title}
      description="This mock job detail page will later connect to the backend job API."
    />
  );
}

