import { Logo } from "@/components/Logo"

const footerLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reservations", label: "Reserve" },
  { href: "#contact", label: "Contact" },
] as const

export function Footer() {
  return (
    <footer className="bg-espresso">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#home" aria-label="Acustica by Dantes — Home">
            <Logo size="lg" />
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Footer">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-cream/70 transition-colors hover:text-mustard"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="my-8 h-px w-full bg-mustard/40" role="presentation" />

        <p className="text-center font-body text-xs tracking-wide text-cream/55">
          © {new Date().getFullYear()} Acustica by Dantes. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
