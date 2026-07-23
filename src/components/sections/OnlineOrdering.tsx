import { motion } from "framer-motion"

import { GrainOverlay } from "@/components/GrainOverlay"
import { Logo, LogoRules } from "@/components/Logo"
import { Button } from "@/components/ui/button"

export function OnlineOrdering() {
  return (
    <section id="ordering" className="bg-terracotta">
      <GrainOverlay>
        <div className="relative z-[2] mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-5 flex justify-center">
              <Logo size="sm" />
            </div>
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-cream sm:text-3xl">
              Online Ordering
            </h2>
            <LogoRules tone="cream" className="mx-auto mt-4" />
            <p className="mx-auto mt-3 max-w-md font-body text-sm text-cream/85 sm:text-base">
              Craving a cup from afar? Delivery partners are on the way —
              GrabFood and Foodpanda links coming soon.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                disabled
                className="min-w-[160px] cursor-not-allowed opacity-90"
              >
                GrabFood · Soon
              </Button>
              <Button
                size="lg"
                variant="secondary"
                disabled
                className="min-w-[160px] cursor-not-allowed opacity-90"
              >
                Foodpanda · Soon
              </Button>
            </div>
          </motion.div>
        </div>
      </GrainOverlay>
    </section>
  )
}
