import { motion } from "framer-motion"

import { GrainOverlay } from "@/components/GrainOverlay"
import { SectionHeading } from "@/components/SectionHeading"

import aboutPortrait from "@/assets/about-portrait.png"

export function About() {
  return (
    <section id="about" className="overflow-hidden">
      {/* BRAND REFRESH — Task 3: was lg:grid-cols-2 with the photo boxed
          into a small, padded, max-w-sm card — read as a footnote next to
          the copy. The image now bleeds full-height/full-width in its own
          column, and the headline + pull quote scale up ("feature" size)
          so this section reads as a featured moment instead. */}
      <div className="grid lg:grid-cols-2">
        <div className="paper-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="relative z-[2] mx-auto max-w-xl lg:mx-0">
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="A Room for Voices"
              description="Born from Thursday nights and recurring faces — Acustica is less a venue and more a neighborhood ritual."
              size="feature"
              className="mb-8 max-w-none"
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="max-w-xl font-body text-base font-normal leading-relaxed text-espresso-soft sm:text-lg"
            >
              Up on the second floor of Didache Building along España Blvd. in Sampaloc,
              we keep the lights warm and the stage open. Regulars like John Ojacastro
              return week after week — and so do first-timers with a song and a little courage.
              Between sets, coffee cools slowly and conversations stretch. That&apos;s the point:
              a third place where the community writes the soundtrack.
            </motion.p>
            <hr className="ink-rule my-8 w-40" />
            <p className="font-accent text-3xl italic leading-snug text-terracotta sm:text-4xl">
              Come for the coffee.
              <br />
              Stay for the chorus.
            </p>
          </div>
        </div>

        <GrainOverlay
          intensity="strong"
          className="aged-photo relative min-h-[420px] overflow-hidden bg-espresso sm:min-h-[540px]"
        >
          <motion.img
            src={aboutPortrait}
            alt="Performers sharing a laugh on stage at Acustica — vocalist with mic and guitarist mid-song"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="duotone-warm absolute inset-0 z-[1] h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </GrainOverlay>
      </div>
    </section>
  )
}
