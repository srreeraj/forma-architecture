import Link from "next/link";
import type { FooterLink } from "@/types";

const footerLinks: FooterLink[] = [
  { label: "Selected Work", href: "#projects" },
  { label: "Contact", href: "#final" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10">
        {/* Brand */}
        <div className="space-y-3">
          <p className="font-serif text-2xl tracking-tight text-foreground">
            FORMA
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Architecture shaped by ideas.
          </p>
          <a
            href="mailto:hello@forma.example"
            className="inline-block text-sm text-muted transition-colors hover:text-foreground"
          >
            hello@forma.example
          </a>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} FORMA Architecture Studio
          </p>
          <p className="text-xs text-muted">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}