import { motion } from "framer-motion"
import { Guitar } from "lucide-react"

import { GrainOverlay } from "@/components/GrainOverlay"
import { SectionHeading } from "@/components/SectionHeading"

export function About() {
  return (
    <section id="about" className="overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="bg-cream px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="A Room for Voices"
            description="Born from Thursday nights and recurring faces — Acustica is less a venue and more a neighborhood ritual."
            className="mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="max-w-xl font-body text-base font-normal leading-relaxed text-espresso-soft"
          >
            Up on the second floor of Didache Building along España Blvd. in Sampaloc,
            we keep the lights warm and the stage open. Regulars like John Ojacastro
            return week after week — and so do first-timers with a song and a little courage.
            Between sets, coffee cools slowly and conversations stretch. That&apos;s the point:
            a third place where the community writes the soundtrack.
          </motion.p>
          <p className="mt-6 font-accent text-2xl italic text-terracotta">
            Come for the coffee. Stay for the chorus.
          </p>
        </div>

        <GrainOverlay className="relative min-h-[320px] bg-espresso sm:min-h-[420px]">
          <div className="relative z-[2] flex h-full min-h-[320px] items-center justify-center p-8 sm:min-h-[420px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-cream/15 shadow-lift"
            >
              <div
                className="duotone-warm flex h-full flex-col items-center justify-end bg-[radial-gradient(circle_at_50%_25%,#d9b25f_0%,#6e1f1f_45%,#2e2118_100%)] p-6 text-center"
                role="img"
                aria-label="Warm portrait of a performer with guitar"
              >
                <Guitar className="mb-3 size-12 text-cream/70" aria-hidden />
                <p className="font-caption font-normal text-xs uppercase tracking-[0.2em] text-cream/75">
                  Portrait Placeholder
                </p>
                <p className="mt-1 font-accent text-lg italic text-mustard-light">
                  Community on stage
                </p>
              </div>
            </motion.div>
          </div>
        </GrainOverlay>
      </div>
    </section>
  )
}
