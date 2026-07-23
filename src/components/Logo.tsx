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
