import { motion } from "framer-motion"
import { Star } from "lucide-react"

import { GrainOverlay } from "@/components/GrainOverlay"
import { SectionHeading } from "@/components/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Mary Elaine Molina",
    initials: "MM",
    quote:
      "The food is great. The service is great as well. Friendly and courteous staff. I really enjoyed their tapa. I highly recommend this place.",
    rating: 5,
  },
  {
    name: "Christian Als",
    initials: "CA",
    quote:
      "Solid lahat, accommodating mga crew and super solid ng banda! Babalik-balikan mo talaga 'to! Solid! Ganda ng mga crew UWU!!!",
    rating: 5,
  },
  {
    name: "Julius Pernia",
    initials: "JP",
    quote:
      "Great food, most especially their Acustica Signature Tapa.",
    rating: 5,
  },
] as const

function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < count ? "fill-gold text-gold" : "text-cream/25"}`}
          aria-hidden
        />
      ))}
    </div>
  )
}

// BRAND REFRESH: was bg-maroon (unrelated one-off hue) — now a terracotta
// tint, unifying with the Online Ordering section under one accent family
export function Reviews() {
  return (
    <section id="reviews" className="bg-terracotta-dark">
      <GrainOverlay intensity="strong">
        <div className="relative z-[2] mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionHeading
            tone="dark"
            eyebrow="Word of Mouth"
            title="What Regulars Say"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="h-full border-cream/15 bg-cream/95 text-center shadow-lift">
                  <CardContent className="flex h-full flex-col items-center gap-4 pt-6">
                    <div className="flex size-12 items-center justify-center rounded-full border border-gold/60 bg-cream-stain/50 font-caption text-xs font-normal uppercase tracking-wider text-espresso">
                      {review.initials}
                    </div>
                    <Stars count={review.rating} />
                    <blockquote className="font-accent text-xl italic leading-relaxed text-espresso-soft">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                    <p className="mt-auto font-caption text-xs font-normal uppercase tracking-[0.16em] text-terracotta">
                      {review.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </GrainOverlay>
    </section>
  )
}
