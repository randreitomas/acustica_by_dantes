import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Logo } from "@/components/Logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Story" },
  { href: "#gallery", label: "The Feed" },
  { href: "#reviews", label: "Word of Mouth" },
  { href: "#contact", label: "Contact" },
  { href: "#ordering", label: "Order Online" },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] border-b border-espresso/20",
        "bg-[#f2e8d4]/95 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8">
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

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-espresso/20 text-espresso lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-espresso/15 bg-[#f2e8d4] lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 font-body text-sm font-medium uppercase tracking-[0.16em] text-espresso hover:bg-cream-stain/40"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
