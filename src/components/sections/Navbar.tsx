import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reservations", label: "Reservations" },
  { href: "#contact", label: "Contact" },
  { href: "#reviews", label: "Reviews" },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-cream">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.75rem] sm:px-8">
        <a
          href="#home"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
          aria-label="Acustica by Dantes — Home"
        >
          <Logo size="sm" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-body text-xs font-medium uppercase tracking-[0.18em] text-espresso-soft transition-colors hover:text-espresso"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-mustard transition-all duration-250 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#reservations">Reserve</a>
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-espresso/15 text-espresso lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-espresso/10 bg-cream lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 font-body text-sm font-medium uppercase tracking-[0.16em] text-espresso hover:bg-cream-dark"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full sm:hidden">
            <a href="#reservations" onClick={() => setOpen(false)}>
              Reserve
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
