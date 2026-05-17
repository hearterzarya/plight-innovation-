import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";

interface PageShellProps {
  label?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageShell({ label, title, subtitle, children }: PageShellProps) {
  return (
    <div className="pt-16">
      <Container className="section-padding pb-8">
        <PageHeader label={label} title={title} subtitle={subtitle} />
      </Container>
      {children}
    </div>
  );
}
