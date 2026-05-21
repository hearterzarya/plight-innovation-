import { Container } from "@/components/layout/Container";
import { PcbCircuitBackground } from "@/components/effects/PcbCircuitBackground";
import { PlightBackground } from "@/components/effects/PlightBackground";
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
      <div className="relative overflow-hidden border-b border-white/5">
        <PlightBackground variant="page" />
        <PcbCircuitBackground corner="right" intensity="subtle" vignette={false} className="z-[1]" />
        <Container className="relative z-10 section-padding pb-8">
          <PageHeader label={label} title={title} subtitle={subtitle} />
        </Container>
      </div>
      {children}
    </div>
  );
}
