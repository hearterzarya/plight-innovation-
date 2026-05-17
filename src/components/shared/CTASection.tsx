import Link from "next/link";
import { ArrowRight, Mail, Handshake, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/shared/AnimateIn";
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
            <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-600/10 blur-3xl" aria-hidden />

            <div className="relative">
              <h2 className="type-h2 text-white">
                {compact
                  ? "Ready to Build Safer Communities?"
                  : "Partner With Us to Build Safer Communities"}
              </h2>
              <p className="type-lead mx-auto mt-6 max-w-[720px]">
                Whether you are a government department, rural development body, forest
                department, NGO, CSR partner, or technology collaborator — PLIGHT
                Innovation is ready to build scalable safety solutions for real-world impact.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    <Mail className="h-4 w-4" aria-hidden />
                    Contact Us
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
