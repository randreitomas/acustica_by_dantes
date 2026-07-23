import { motion } from "framer-motion"

import { GrainOverlay } from "@/components/GrainOverlay"
import { SectionHeading } from "@/components/SectionHeading"

import aboutPortrait from "@/assets/about-portrait.png"

export function About() {
  return (
    <section id="about" className="overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="paper-surface px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
          <div className="relative z-[2]">
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
            <hr className="ink-rule my-6 w-32" />
            <p className="font-accent text-2xl italic text-terracotta">
              Come for the coffee. Stay for the chorus.
            </p>
          </div>
        </div>

        <GrainOverlay
          intensity="strong"
          className="relative min-h-[320px] bg-espresso sm:min-h-[420px]"
        >
          <div className="relative z-[2] flex h-full min-h-[320px] items-center justify-center p-8 sm:min-h-[420px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="aged-photo aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm border border-cream/20 shadow-lift"
            >
              <img
                src={aboutPortrait}
                alt="Performers sharing a laugh on stage at Acustica — vocalist with mic and guitarist mid-song"
                className="duotone-warm relative z-[1] h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </GrainOverlay>
      </div>
    </section>
  )
}
