import type { Metadata } from "next";

const base = {
  title: {
    default: "PLIGHT | Edge AI, Embedded Systems & Production-Ready AI Hardware",
    template: "%s | PLIGHT",
  },
  description:
    "PLIGHT designs and deploys industrial-grade edge computing systems, embedded AI hardware, IoT telemetry nodes, and production-ready autonomous solutions for real-world environments.",
} satisfies Partial<Metadata>;

export function pageMetadata(title: string, description?: string): Metadata {
  return {
    title,
    description: description ?? base.description,
    openGraph: {
      title: `${title} | PLIGHT`,
      description: description ?? base.description,
      type: "website",
      images: [{ url: "/logo.png", alt: "PLIGHT" }],
    },
  };
}

export { base as siteMetadata };
