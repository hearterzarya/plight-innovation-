import { pageMetadata } from "@/lib/site-metadata";
import { PageShell } from "@/components/layout/PageShell";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { CTASection } from "@/components/shared/CTASection";

export const metadata = pageMetadata(
  "Contact",
  "Contact PLIGHT for enterprise partnerships, edge AI projects, and production deployment inquiries."
);

export default function ContactPage() {
  return (
    <PageShell
      label="Contact"
      title="Partner With PLIGHT"
      subtitle="Reach our team for government deployments, CSR partnerships, product demos, and technology collaboration."
    >
      <ContactInfo />
      <CTASection />
    </PageShell>
  );
}
