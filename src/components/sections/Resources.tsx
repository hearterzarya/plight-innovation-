"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Download, ChevronDown, Mail } from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const specifications = [
  { product: "AI Wildlife Monitoring System", spec: "360° camera, 100–150m range, AI species detection, 20s video alerts, mobile push" },
  { product: "Wildlife Repellent Device", spec: "Multi-color flashing lights, sound alerts, automatic activation, solar-ready enclosure" },
  { product: "Smart Rural Protection", spec: "IoT mesh networking, coordinated village alerts, field-ready manufacturing" },
  { product: "Detection & Alerts", spec: "Real-time timestamps, GPS location, confidence scoring, forest authority notifications" },
];

const faqs = [
  {
    q: "What wildlife species can the AI system detect?",
    a: "The system is trained for high-risk species including elephants, tigers, and leopards, with ongoing model refinement for additional categories and forest-fire events.",
  },
  {
    q: "What is the detection range?",
    a: "Production systems monitor approximately 100 to 150 meters in all directions. Earlier prototype milestones were validated at 40m and 60m during staged field testing.",
  },
  {
    q: "How are alerts delivered?",
    a: "Detections trigger instant mobile push notifications with species type, confidence level, timestamp, GPS location, and optional 20-second video evidence.",
  },
  {
    q: "Where has PLIGHT been deployed?",
    a: "Over 100 villages in the Bijnor region of Uttar Pradesh, with AI monitoring field trials at Jim Corbett National Park and active forest department collaboration.",
  },
  {
    q: "Is the deterrent wildlife-safe?",
    a: "Yes. PLIGHT systems use non-lethal light and sound deterrence designed to protect communities without harming animals.",
  },
  {
    q: "How can government partners request a demo?",
    a: "Contact our team at contact@plightinnovation.com or visit the Contact page to schedule a product demonstration or deployment discussion.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = q.replace(/\s+/g, "-").toLowerCase().slice(0, 40);

  return (
    <GlassCard className="overflow-hidden">
      <h3>
        <button
          type="button"
          id={`faq-${id}`}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 sm:p-6"
        >
          <span className="type-h4 text-white">{q}</span>
          <ChevronDown
            className={cn("h-5 w-5 shrink-0 text-cyan-400 transition-transform", open && "rotate-180")}
            aria-hidden
          />
        </button>
      </h3>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-${id}`}
        hidden={!open}
        className={cn("border-t border-white/5 px-5 pb-5 sm:px-6 sm:pb-6", !open && "hidden")}
      >
        <p className="type-body-sm pt-4 text-text-cool">{a}</p>
      </div>
    </GlassCard>
  );
}

export function Resources() {
  return (
    <>
      <Section id="specifications" className="section-padding">
        <Container>
          <AnimateIn>
            <SectionLabel>Specifications</SectionLabel>
            <SectionHeading
              title="Product & System Specifications"
              subtitle="Technical overview of PLIGHT wildlife safety systems for procurement and partnership review."
              align="center"
            />
          </AnimateIn>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">PLIGHT product specifications</caption>
              <thead>
                <tr className="border-b border-cyan-400/20">
                  <th scope="col" className="type-label p-4 text-cyan-400">
                    Product
                  </th>
                  <th scope="col" className="type-label p-4 text-cyan-400">
                    Key Specifications
                  </th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((row) => (
                  <tr key={row.product} className="border-b border-white/5">
                    <td className="p-4 font-medium text-white">{row.product}</td>
                    <td className="p-4 text-text-cool">{row.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section id="brochure" className="section-padding bg-bg-midnight/30">
        <Container>
          <AnimateIn>
            <GlassCard className="flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:p-10 sm:text-left">
              <FileText className="h-12 w-12 shrink-0 text-cyan-400" aria-hidden />
              <div className="flex-1">
                <h2 className="type-h3 text-white">Request Product Brochure</h2>
                <p className="type-body-sm mt-2 text-text-cool">
                  Government departments, NGOs, and CSR partners can request a detailed product
                  brochure with deployment case studies, specifications, and partnership options.
                </p>
              </div>
              <Link href="mailto:demo@plightinnovation.com?subject=PLIGHT%20Product%20Brochure%20Request">
                <Button size="lg" variant="amber">
                  <Download className="h-4 w-4" aria-hidden />
                  Request Brochure
                </Button>
              </Link>
            </GlassCard>
          </AnimateIn>
        </Container>
      </Section>

      <Section id="faqs" className="section-padding">
        <Container>
          <AnimateIn>
            <SectionLabel>FAQs</SectionLabel>
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Common questions from forest departments, rural development bodies, and technology partners."
              align="center"
            />
          </AnimateIn>
          <div className="mt-12 mx-auto max-w-3xl space-y-3">
            {faqs.map((faq) => (
              <AnimateIn key={faq.q}>
                <FaqItem q={faq.q} a={faq.a} />
              </AnimateIn>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                <Mail className="h-4 w-4" aria-hidden />
                Still have questions? Contact us
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
