import type { Metadata } from "next";

const base = {
  title: {
    default: "PLIGHT Innovation | AI-Powered Wildlife Safety",
    template: "%s | PLIGHT Innovation",
  },
  description:
    "PLIGHT Innovation builds AI wildlife monitoring systems, intelligent deterrent devices, and smart rural protection. 100+ villages in Bijnor, field-tested at Jim Corbett National Park.",
} satisfies Partial<Metadata>;

export function pageMetadata(title: string, description?: string): Metadata {
  return {
    title,
    description: description ?? base.description,
    openGraph: {
      title: `${title} | PLIGHT Innovation`,
      description: description ?? base.description,
      type: "website",
      images: [{ url: "/logo.png", alt: "PLIGHT Innovation" }],
    },
  };
}

export { base as siteMetadata };
