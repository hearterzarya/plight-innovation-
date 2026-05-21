import Link from "next/link";
import { ArrowRight, Mail, Handshake, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { PcbCircuitBackground } from "@/components/effects/PcbCircuitBackground";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

interface CTASectionProps {
  id?: string;
  compact?: boolean;
}

export function CTASection({ id = "contact", compact = false }: CTASectionProps) {
  return (
    <Section id={id} className="section-padding">
      <Container>
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-bg-graphite via-bg-midnight to-bg-graphite p-8 text-center sm:p-12 lg:p-16">
            <PcbCircuitBackground corner="both" intensity="subtle" vignette={false} className="rounded-3xl" />
            <div className="absolute inset-0 z-[1] grid-bg opacity-30" aria-hidden />
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-600/10 blur-3xl" aria-hidden />

            <div className="relative z-10">
              <h2 className="type-h2 text-white">
                {compact
                  ? "Ready to Deploy Edge Intelligence at Scale?"
                  : "Ready to Deploy Edge Intelligence at Scale?"}
              </h2>
              <p className="type-lead mx-auto mt-6 max-w-[720px]">
                Whether you require custom neural vision, resilient IoT telemetry, or rapid
                hardware integration—PLIGHT partners with enterprises to bring Embedded AI
                systems from concept to commercial scale.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    <Mail className="h-4 w-4" aria-hidden />
                    Discuss Your Project
                  </Button>
                </Link>
                <Link href="mailto:partners@plightinnovation.com">
                  <Button variant="secondary" size="lg">
                    <Handshake className="h-4 w-4" aria-hidden />
                    Partner With PLIGHT
                  </Button>
                </Link>
                {!compact && (
                  <Link href="mailto:demo@plightinnovation.com">
                    <Button variant="amber" size="lg">
                      <Play className="h-4 w-4" aria-hidden />
                      Request Product Demo
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </Section>
  );
}
