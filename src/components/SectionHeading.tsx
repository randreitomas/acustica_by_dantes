import { motion } from "framer-motion"
import { Music2, Star } from "lucide-react"

import { LogoRules } from "@/components/Logo"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  tone?: "light" | "dark"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark"

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
            "mb-3 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.22em]",
            isDark ? "text-mustard-light" : "text-terracotta"
          )}
        >
          <Star className="size-3 fill-current" aria-hidden />
          {eyebrow}
          <Music2 className="size-3" aria-hidden />
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl",
          isDark ? "text-cream" : "text-espresso"
        )}
      >
        {title}
      </h2>
      <LogoRules
        tone={isDark ? "mustard" : "terracotta"}
        className={cn("mt-4", align === "center" ? "mx-auto" : "mx-0")}
      />
      {description ? (
        <p
          className={cn(
            "mt-3 font-body text-base leading-relaxed",
            isDark ? "text-cream/80" : "text-espresso-soft"
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
