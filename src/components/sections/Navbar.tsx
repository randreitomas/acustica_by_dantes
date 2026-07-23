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
] as const

const orderLink = { href: "#ordering", label: "Order Online" } as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-vintage fixed inset-x-0 top-0 z-[100]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:h-[4.25rem] sm:px-8">
        <a
          href="#home"
          className="flex shrink-0 items-center transition-opacity hover:opacity-85"
          onClick={() => setOpen(false)}
          aria-label="Acustica by Dantes — Home"
        >
          <Logo size="sm" />
        </a>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {navLinks.map((link, index) => (
              <li key={link.href} className="flex items-center">
                {index > 0 ? (
                  <span
                    className="mx-1.5 h-3 w-px bg-espresso/15"
                    aria-hidden
                  />
                ) : null}
                <a
                  href={link.href}
                  className="group relative rounded-sm px-2.5 py-2 font-body text-[0.7rem] font-medium uppercase tracking-[0.16em] text-espresso-soft transition-colors hover:text-terracotta"
                >
                  {link.label}
                  <span className="pointer-events-none absolute inset-x-2.5 -bottom-0.5 h-[1.5px] origin-left scale-x-0 bg-mustard transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={orderLink.href}
            className="btn-print ml-5 inline-flex h-9 items-center rounded-sm border border-espresso/15 bg-mustard px-4 font-body text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-espresso transition-colors hover:bg-terracotta hover:text-cream"
          >
            {orderLink.label}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-sm border border-espresso/20 bg-cream/50 text-espresso transition-colors hover:border-mustard/60 hover:bg-mustard/20 lg:hidden"
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
          "border-t border-espresso/15 bg-[#efe3c8]/98 lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col px-5 py-3"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-espresso/10 px-2 py-3.5 font-body text-sm font-medium uppercase tracking-[0.14em] text-espresso transition-colors hover:text-terracotta"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={orderLink.href}
            className="btn-print mt-3 mb-1 inline-flex h-11 items-center justify-center rounded-sm border border-espresso/15 bg-mustard font-body text-xs font-semibold uppercase tracking-[0.14em] text-espresso transition-colors hover:bg-terracotta hover:text-cream"
            onClick={() => setOpen(false)}
          >
            {orderLink.label}
          </a>
        </nav>
      </div>
    </header>
  )
}
