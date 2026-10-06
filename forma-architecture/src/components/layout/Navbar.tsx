import Link from "next/link";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Story", href: "#idea" },
  { label: "Work", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#final" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          FORMA
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button (placeholder for later stages) */}
        <button
          type="button"
          className="text-xs uppercase tracking-wider text-muted md:hidden"
          aria-label="Open menu"
        >
          Menu
        </button>
      </nav>
    </header>
  );
}