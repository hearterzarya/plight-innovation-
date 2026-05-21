import Link from "next/link";
import { MapPin, Mail, Share2, Globe, Rss } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

const footerLinks = {
  Solutions: [
    { label: "Edge AI Solutions", href: "/solutions" },
    { label: "Hardware & Prototyping", href: "/technology" },
    { label: "Production Deployments", href: "/impact" },
    { label: "Resources", href: "/resources" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Field Validation", href: "/field-trials" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-deep">
      <div className="container-custom mx-auto py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <Logo />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-cool">
              Engineering the future of autonomous edge computing and embedded AI infrastructure.
            </p>
            <div className="mt-4 flex items-start gap-2 text-sm text-text-cool">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden />
              <span>Najibabad, Bijnor, Uttar Pradesh, India</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-white">
                {title}
              </h2>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-cool transition-colors hover:text-cyan-400 focus-visible:rounded focus-visible:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white">
              Connect
            </h2>
            <div className="mt-4 space-y-3">
              <a
                href="mailto:contact@plightinnovation.com"
                className="flex items-center gap-2 text-sm text-text-cool transition-colors hover:text-cyan-400 focus-visible:rounded focus-visible:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <Mail className="h-4 w-4" aria-hidden />
                contact@plightinnovation.com
              </a>
              <div className="flex gap-3 pt-2">
                {[Share2, Globe, Rss].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-text-cool transition-all hover:border-cyan-400/30 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                    aria-label={`Social link ${i + 1}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-text-cool">
            © 2026 Plight Innovation Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-text-cool">
            From neural vision to resilient telemetry — deployable industrial hardware
          </p>
        </div>
      </div>
    </footer>
  );
}
