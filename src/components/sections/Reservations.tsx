import { motion } from "framer-motion"

import { GrainOverlay } from "@/components/GrainOverlay"
import { Logo, LogoRules } from "@/components/Logo"
import { Button } from "@/components/ui/button"

export function Reservations() {
  return (
    <section id="reservations" className="bg-maroon">
      <GrainOverlay>
        <div className="relative z-[2] mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-6 flex justify-center">
              <Logo size="sm" />
            </div>
            <p className="mb-4 font-body font-semibold text-xs uppercase tracking-[0.24em] text-mustard-light">
              Tables & Stage
            </p>
            <h2 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-cream sm:text-5xl">
              Take a Seat
              <br />
              or Take the Stage
            </h2>
            <LogoRules tone="mustard" className="mx-auto mt-5" />
            <p className="mx-auto mt-4 max-w-lg font-body text-base text-cream/80">
              Reserve a table for open mic night, or put your name on the list —
              we&apos;ll leave the mic warm for you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="min-w-[180px]">
                <a href="#contact">Book a Table</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="min-w-[180px] border-cream/20 bg-cream/10 text-cream hover:bg-cream/20"
              >
                <a href="#contact">Sign Up to Perform</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </GrainOverlay>
    </section>
  )
}
