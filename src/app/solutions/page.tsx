import { pageMetadata } from "@/lib/site-metadata";
import { PageShell } from "@/components/layout/PageShell";
import { Solution } from "@/components/sections/Solution";
import { Products } from "@/components/sections/Products";

export const metadata = pageMetadata(
  "Solutions",
  "Wildlife repellent devices, AI monitoring systems, and smart rural protection — product and solution details from PLIGHT Innovation."
);

export default function SolutionsPage() {
  return (
    <PageShell
      label="Solutions"
      title="Intelligent Protection for Rural India"
      subtitle="From proven village deterrents to next-generation AI surveillance — field-ready systems for real-world deployment."
    >
      <Solution />
      <Products />
    </PageShell>
  );
}
