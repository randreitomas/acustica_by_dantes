import { motion } from "framer-motion"

import { GrainOverlay } from "@/components/GrainOverlay"
import { SectionHeading } from "@/components/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

/* BRAND REFRESH — Task 5a: generic silhouette placeholder (cream-stain
   circle + a faded espresso figure) standing in for a real customer photo.
   Swap each review's `photo` field for an actual portrait — e.g.
   `photo: reviewPhotoMary` imported from src/assets — whenever they're
   available; the <img> markup below doesn't need to change. */
const AVATAR_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='32' fill='%23d4bf98'/%3E%3Ccircle cx='32' cy='25' r='13' fill='%233d2c20' fill-opacity='0.5'/%3E%3Cpath d='M10 60c0-15.5 11.6-24 22-24s22 8.5 22 24' fill='%233d2c20' fill-opacity='0.5'/%3E%3C/svg%3E"

const reviews = [
  {
    name: "Mary Elaine Molina",
    photo: AVATAR_PLACEHOLDER,
    quote:
      "The food is great. The service is great as well. Friendly and courteous staff. I really enjoyed their tapa. I highly recommend this place.",
    rating: 5,
  },
  {
    name: "Christian Als",
    photo: AVATAR_PLACEHOLDER,
    quote:
      "Solid lahat, accommodating mga crew and super solid ng banda! Babalik-balikan mo talaga 'to! Solid! Ganda ng mga crew UWU!!!",
    rating: 5,
  },
  {
    name: "Julius Pernia",
    photo: AVATAR_PLACEHOLDER,
    quote:
      "Great food, most especially their Acustica Signature Tapa.",
    rating: 5,
  },
] as const

/* BRAND REFRESH — Task 5a: swapped the default lucide Star icon set for a
   hand-stamped row of serif glyphs — alternating tilt per star reads like
   an ink stamp rather than a generic UI rating widget. */
function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex items-center justify-center gap-1.5"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className={cn(
            "font-accent text-2xl italic leading-none",
            i % 2 === 0 ? "-rotate-6" : "rotate-3",
            i < count ? "text-gold" : "text-espresso/15"
          )}
        >
          ★
        </span>
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
                    <img
                      src={review.photo}
                      alt=""
                      aria-hidden
                      className="size-16 rounded-full border-2 border-gold/60 bg-cream-stain/50 object-cover shadow-soft"
                      loading="lazy"
                      decoding="async"
                    />
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
