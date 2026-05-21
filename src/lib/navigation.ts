export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Edge AI Solutions" },
  { href: "/technology", label: "Hardware & Prototyping" },
  { href: "/impact", label: "Production Deployments" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavHref = (typeof mainNav)[number]["href"];
