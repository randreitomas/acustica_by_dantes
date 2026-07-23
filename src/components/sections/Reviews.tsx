import { motion } from "framer-motion"
import { Star } from "lucide-react"

import { SectionHeading } from "@/components/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Mia R.",
    initials: "MR",
    quote:
      "Thursday open mic feels like a living room with better coffee. Always leave humming something new.",
    rating: 5,
  },
  {
    name: "Carlo D.",
    initials: "CD",
    quote:
      "First time on stage and the crowd was kind. Acustica makes performing feel possible.",
    rating: 5,
  },
  {
    name: "Jen & Paolo",
    initials: "JP",
    quote:
      "Our go-to third place. Warm lights, honest cups, and a community that actually shows up.",
    rating: 4,
  },
] as const

function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < count ? "fill-mustard text-mustard" : "text-espresso/20"}`}
          aria-hidden
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Word of Mouth"
          title="What Regulars Say"
          description="A handful of notes from the neighborhood — the kind you hear between sets."
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
              <Card className="h-full grain-overlay text-center">
                <CardContent className="relative z-[2] flex h-full flex-col items-center gap-4 pt-6">
                  <div className="flex size-12 items-center justify-center rounded-full border-2 border-mustard/50 bg-cream-dark font-body text-xs font-semibold uppercase tracking-wider text-espresso">
                    {review.initials}
                  </div>
                  <Stars count={review.rating} />
                  <blockquote className="font-accent text-xl italic leading-relaxed text-espresso-soft">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <p className="mt-auto font-body text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
                    {review.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
