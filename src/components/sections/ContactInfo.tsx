import { MapPin, Mail, Handshake, Play } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    icon: Mail,
    title: "General Inquiries",
    email: "contact@plightinnovation.com",
    description: "Questions about PLIGHT products, deployments, and rural safety technology.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    email: "partners@plightinnovation.com",
    description: "Government, NGO, CSR, and technology collaboration opportunities.",
  },
  {
    icon: Play,
    title: "Product Demos",
    email: "demo@plightinnovation.com",
    description: "Schedule a live demonstration of AI monitoring and deterrent systems.",
  },
];

export function ContactInfo() {
  return (
    <Section className="section-padding">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {contacts.map((item) => (
            <GlassCard key={item.email} className="flex h-full flex-col p-6 sm:p-7">
              <item.icon className="h-8 w-8 text-cyan-400" aria-hidden />
              <h2 className="type-h4 mt-4 text-white">{item.title}</h2>
              <p className="type-body-sm mt-2 flex-1 text-text-cool">{item.description}</p>
              <a
                href={`mailto:${item.email}`}
                className="mt-4 text-sm font-medium text-cyan-400 hover:underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                {item.email}
              </a>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="mt-10 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:p-8">
          <MapPin className="h-8 w-8 shrink-0 text-green-400" aria-hidden />
          <div className="flex-1">
            <h2 className="type-h4 text-white">Headquarters</h2>
            <p className="type-body-sm mt-1 text-text-cool">
              PLIGHT Innovation Private Limited · Najibabad, Bijnor, Uttar Pradesh, India
            </p>
          </div>
          <Link href="mailto:contact@plightinnovation.com">
            <Button size="lg">Send an Email</Button>
          </Link>
        </GlassCard>
      </Container>
    </Section>
  );
}
