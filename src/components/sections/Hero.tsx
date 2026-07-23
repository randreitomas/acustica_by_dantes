import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import { GrainOverlay } from "@/components/GrainOverlay"
import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const textureY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-mustard"
    >
      <GrainOverlay className="relative min-h-[88svh] overflow-hidden">
        <motion.div
          style={{ y: textureY }}
          className="pointer-events-none absolute inset-[-20%] bg-[radial-gradient(circle_at_20%_20%,#d9b25f_0%,transparent_45%),radial-gradient(circle_at_80%_70%,#b5602e_0%,transparent_40%),linear-gradient(160deg,#c69a3d_0%,#b5602e_100%)]"
          aria-hidden
        />

        <div className="relative z-[2] mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 flex justify-center lg:justify-start">
              <Logo size="lg" />
            </div>

            <p className="mb-4 font-caption text-xs font-normal uppercase tracking-[0.24em] text-espresso/80">
              Open Mic · Coffee · Community
            </p>

            <h1 className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-espresso sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Warm Lights.
              <br />
              Shared Songs.
            </h1>

            <p className="mx-auto mt-5 max-w-md font-body text-base font-normal leading-relaxed text-espresso-soft sm:text-lg lg:mx-0">
              Acustica is an intimate open-mic venue and coffeehouse on España —
              where local voices take the stage and the neighborhood stays awhile.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild size="lg">
                <a href="#menu">Explore the Menu</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#reservations">Reserve a Seat</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg border border-espresso/15 shadow-lift sm:aspect-square">
              <div
                className="duotone-warm h-full w-full bg-[linear-gradient(160deg,rgba(46,33,24,0.35),rgba(110,31,31,0.25)),radial-gradient(circle_at_40%_30%,#ede1c9_0%,#3a2a1e_55%,#2e2118_100%)]"
                role="img"
                aria-label="Performer on stage under warm amber light"
              >
                <div className="flex h-full flex-col items-center justify-end gap-2 p-6 text-center">
                  <p className="font-caption text-xs font-normal uppercase tracking-[0.2em] text-cream/80">
                    Live Stage Ambiance
                  </p>
                  <p className="font-accent text-lg italic text-mustard-light">
                    Photo placeholder
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 rounded-full border border-mustard/40 bg-espresso px-4 py-2 font-caption text-[0.65rem] font-normal uppercase tracking-[0.18em] text-cream shadow-soft">
              Thu · Sat Open Mic
            </div>
          </motion.div>
        </div>
      </GrainOverlay>
    </section>
  )
}
