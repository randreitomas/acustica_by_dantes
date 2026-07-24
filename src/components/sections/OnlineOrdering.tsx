import { motion } from "framer-motion"
import { Clock } from "lucide-react"

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

/* BRAND REFRESH — Task 6: kept both partner tiles per request (still
   disabled pending client confirmation — not ready to wire up real links
   yet) but restyled the disabled state so it reads as an intentional
   "reserved for later" placeholder instead of a broken button:
   - dashed border instead of a solid button-shaped card
   - a small rotated corner stamp + clock icon instead of a full-width
     label bar that looked like a truncated/disabled CTA footer
   Section padding and heading size were also trimmed down so this
   section doesn't compete for attention with fully working CTAs
   elsewhere on the page (Task 6, option b). */
export function OnlineOrdering() {
  return (
    // BRAND REFRESH: unified with Reviews under the terracotta family (was the
    // odd-one-out "orange" section; now shares the same locked accent color)
    <section id="ordering" className="bg-terracotta">
      <GrainOverlay intensity="strong">
        <div className="relative z-[2] mx-auto max-w-3xl px-5 py-10 text-center sm:px-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <h2 className="font-heading text-xl font-semibold tracking-tight text-cream sm:text-2xl">
              Online Ordering
            </h2>
            <hr className="ink-rule mx-auto my-3 w-24" />
            <p className="mx-auto max-w-md font-body text-sm font-normal text-cream/85">
              {/* BRAND REFRESH: break after the dash intro so the line
                  doesn't reflow into an orphaned "soon." on its own line */}
              Delivery partners are on the way —
              <br />
              GrabFood and foodpanda coming soon.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="relative inline-flex min-w-[200px] cursor-not-allowed flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-cream/25 bg-espresso/30 px-5 py-5"
                  aria-label={`${partner.name} — coming soon, pending confirmation`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-9 w-auto opacity-50 saturate-50 brightness-90 sm:h-10"
                    width={240}
                    height={56}
                    decoding="async"
                  />
                  <span
                    className="pointer-events-none absolute -right-2 -top-2 inline-flex -rotate-6 items-center gap-1 rounded-sm border border-gold/50 bg-espresso px-2 py-1 font-caption text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-gold-light shadow-soft"
                    aria-hidden
                  >
                    <Clock className="size-2.5" />
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
