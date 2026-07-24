import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { GrainOverlay } from "@/components/GrainOverlay"
import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import hero01 from "@/assets/hero/01-bar-crew.png"
import hero03 from "@/assets/hero/03-guitarist.png"
import hero04 from "@/assets/hero/04-celebration.png"
import hero05 from "@/assets/hero/05-friends.png"

/* BRAND REFRESH — Task 2: hero image rebuild.
   Leads with the live-performance/guitar shot (warm practical lighting,
   solo performer mid-song) instead of the old lead image of a group
   staring at a table lit by cold overhead light. Two shots that read as
   "crowd on phones" (table-group, dinner) and one cool/blue night shot
   (window-lounge) were dropped from the rotation entirely — the remaining
   four are all warm, lively, and on-brand. Files are left on disk in case
   they're wanted elsewhere later. */
const slides = [
  {
    src: hero03,
    alt: "A guitarist performing live at Acustica, mic and guitar under warm light",
  },
  {
    src: hero01,
    alt: "The Acustica crew laughing behind the bar",
  },
  {
    src: hero04,
    alt: "Guests celebrating together at Acustica",
  },
  {
    src: hero05,
    alt: "Friends smiling together at Acustica",
  },
] as const

const SLIDE_MS = 5200

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [index, setIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const textureY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduceMotion.matches) return

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, SLIDE_MS)

    return () => window.clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-espresso"
      aria-roledescription="carousel"
      aria-label="Acustica moments"
    >
      <GrainOverlay
        intensity="strong"
        className="relative min-h-[calc(100svh-4rem)] overflow-hidden sm:min-h-[calc(100svh-4.25rem)]"
      >
        <motion.div
          style={{ y: textureY }}
          className="pointer-events-none absolute inset-[-12%]"
          aria-hidden
        >
          <AnimatePresence mode="sync" initial={false}>
            <motion.img
              key={slides[index].src}
              src={slides[index].src}
              alt=""
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
              className="duotone-warm absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </motion.div>

        {/* BRAND REFRESH — Task 2: the old wash pushed opacity up to 0.9,
            which is what made the hero read as flat/dark instead of warm.
            Lightened across the board so the photo's own warmth carries the
            section; the radial + vertical layers below still concentrate
            the darkening behind the centered text for legibility.
            Bottom stop softened further (0.74 → 0.58) — stacked with the
            dedicated bottom vignette below, it was compounding into a
            near-solid black slab right where the slide dots sit, which
            read as a stray shadow bar cutting into the section beneath. */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(160deg,rgba(42,30,22,0.42)_0%,rgba(28,18,12,0.5)_42%,rgba(42,30,22,0.58)_100%)]"
          aria-hidden
        />
        {/* Warm terracotta bloom + text-legibility vignette, no stray maroon hue.
            The bottom-focused layer is now tighter (26% spread, lower peak
            opacity) so it stays a subtle contrast boost right behind the
            dots instead of washing out a third of the photo to black. */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_45%,rgba(122,61,30,0.4),transparent_62%),radial-gradient(ellipse_at_center,transparent_34%,rgba(14,8,4,0.38)_100%),linear-gradient(0deg,rgba(20,12,8,0.2),transparent_26%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1.1' fill='%23efe4cc' fill-opacity='0.35'/%3E%3C/svg%3E\")",
            backgroundSize: "4px 4px",
          }}
          aria-hidden
        />

        <div className="relative z-[2] mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col items-center justify-center px-5 py-16 sm:min-h-[calc(100svh-4.25rem)] sm:px-8 sm:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="mx-auto w-full max-w-3xl text-center"
          >
            <div className="mb-6 flex justify-center">
              <Logo size="lg" tone="light" />
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-cream [text-shadow:0_2px_18px_rgba(20,10,6,0.45)] sm:text-5xl md:text-6xl lg:text-[4.1rem]">
              <span className="block whitespace-nowrap">Timplang May Puso,</span>
              <span className="block whitespace-nowrap">Himig na May Dama.</span>
            </h1>

            <hr className="mx-auto my-5 h-px w-40 border-0 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

            <p className="font-caption text-xs font-normal uppercase tracking-[0.28em] text-cream/70 sm:text-sm">
              Open Mic · Coffee · Community
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#menu">Explore the Menu</a>
              </Button>
            </div>
          </motion.div>

          <div
            className="absolute bottom-6 left-1/2 z-[3] flex -translate-x-1/2 gap-2 sm:bottom-8"
            role="tablist"
            aria-label="Slideshow slides"
          >
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show photo ${i + 1}: ${slide.alt}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-sm transition-all duration-300",
                  i === index
                    ? "w-7 bg-cream"
                    : "w-1.5 bg-cream/35 hover:bg-cream/55"
                )}
              />
            ))}
          </div>
        </div>

        {/* Screen-reader live region for current slide */}
        <p className="sr-only" aria-live="polite">
          {slides[index].alt}
        </p>
      </GrainOverlay>
    </section>
  )
}
