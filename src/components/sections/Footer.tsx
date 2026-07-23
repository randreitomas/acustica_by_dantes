import { GrainOverlay } from "@/components/GrainOverlay"
import { Logo } from "@/components/Logo"

const footerLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Story" },
  { href: "#gallery", label: "The Feed" },
  { href: "#reviews", label: "Word of Mouth" },
  { href: "#contact", label: "Contact" },
  { href: "#ordering", label: "Order Online" },
] as const

export function Footer() {
  return (
    <footer className="bg-espresso">
      <GrainOverlay>
        <div className="relative z-[2] mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <a href="#home" aria-label="Acustica by Dantes — Home">
              <Logo size="lg" />
            </a>

            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Footer">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-xs font-medium uppercase tracking-[0.16em] text-cream/70 transition-colors hover:text-mustard"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <hr className="ink-rule my-8" />

          <p className="text-center font-caption text-xs font-normal tracking-wide text-cream/55">
            © {new Date().getFullYear()} Acustica by Dantes. All rights reserved.
          </p>
        </div>
      </GrainOverlay>
    </footer>
  )
}
