import { cn } from "@/lib/utils"

type LogoProps = {
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeMap = {
  sm: "h-9 sm:h-10",
  md: "h-12 sm:h-14",
  lg: "h-16 sm:h-[4.5rem]",
} as const

export function Logo({ size = "md", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center justify-center", className)}>
      <img
        src="/logo.png"
        alt="Acustica by Dantes"
        className={cn(
          "w-auto object-contain object-left",
          sizeMap[size]
        )}
        width={480}
        height={160}
        decoding="async"
      />
    </span>
  )
}

/** Parallel speed lines from the wordmark — for section accents */
export function LogoRules({
  className,
  tone = "terracotta",
}: {
  className?: string
  tone?: "terracotta" | "mustard" | "cream" | "espresso"
}) {
  const color =
    tone === "mustard"
      ? "bg-mustard"
      : tone === "cream"
        ? "bg-cream/70"
        : tone === "espresso"
          ? "bg-espresso/40"
          : "bg-terracotta"

  return (
    <div
      className={cn("flex w-28 flex-col gap-[3px]", className)}
      aria-hidden
    >
      <span className={cn("h-px w-full", color)} />
      <span className={cn("h-px w-[88%]", color)} />
      <span className={cn("h-px w-[72%]", color)} />
      <span className={cn("h-px w-[56%]", color)} />
    </div>
  )
}
