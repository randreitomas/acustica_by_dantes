import { motion } from "framer-motion"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: "left" | "center"
  tone?: "light" | "dark"
  /* BRAND REFRESH — Task 3: "feature" gives a section's headline extra
     visual weight (e.g. Our Story) without changing the default scale
     used everywhere else on the site. */
  size?: "default" | "feature"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  size = "default",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark"
  const isFeature = size === "feature"

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 font-caption text-xs font-normal uppercase tracking-[0.28em]",
            isDark ? "text-gold-light" : "text-terracotta"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-heading font-semibold leading-tight tracking-tight",
          isFeature ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl",
          isDark ? "text-cream" : "text-espresso"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "font-body font-normal leading-relaxed",
            isFeature ? "mt-5 text-lg sm:text-xl" : "mt-4 text-base",
            isDark ? "text-cream/80" : "text-espresso-soft"
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
