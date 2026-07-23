import { motion } from "framer-motion"

import { GrainOverlay } from "@/components/GrainOverlay"

const partners = [
  {
    name: "GrabFood",
    logo: "/logos/grabfood.png",
  },
  {
    name: "foodpanda",
    logo: "/logos/foodpanda.png",
  },
] as const

export function OnlineOrdering() {
  return (
    <section id="ordering" className="bg-terracotta">
      <GrainOverlay intensity="strong">
        <div className="relative z-[2] mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <h2 className="font-heading text-2xl font-semibold uppercase tracking-[0.06em] text-cream sm:text-3xl">
              Online Ordering
            </h2>
            <hr className="ink-rule mx-auto my-4 w-28" />
            <p className="mx-auto max-w-md font-body text-sm font-normal text-cream/85 sm:text-base">
              Delivery partners are on the way — GrabFood and foodpanda coming soon.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="relative inline-flex min-w-[220px] cursor-not-allowed flex-col items-center justify-center overflow-hidden rounded-md border border-cream/15 bg-espresso/40"
                  aria-label={`${partner.name} — coming soon`}
                >
                  <div className="flex w-full flex-1 items-center justify-center px-5 pb-2 pt-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-10 w-auto -translate-y-1 opacity-55 saturate-50 brightness-90 sm:h-12"
                      width={240}
                      height={56}
                      decoding="async"
                    />
                  </div>
                  <span className="w-full bg-espresso/85 py-1.5 font-caption text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream/90">
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </GrainOverlay>
    </section>
  )
}
