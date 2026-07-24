import { cn } from "@/lib/utils"

export type ProjectCardData = {
  id: string
  title: string
  image: string
  imageAlt?: string
}

type ProjectCardProps = {
  project: ProjectCardData
  isActive?: boolean
  className?: string
}

/**
 * Menu board slide at native 1080×1350 (4:5) — full board visible, no overlays.
 * BRAND REFRESH — Task 7: the lettering is baked into the board photo, audited
 * and kept as-is; see the comment in `sections/Menu.tsx` for the rationale.
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        // BRAND REFRESH: softened alongside the mobile strip's shadow —
        // 0.28 opacity / 36px blur read as a heavy modern glossy shadow,
        // not the subtle lift the vintage aesthetic calls for.
        "relative h-full w-full overflow-hidden rounded-sm shadow-[0_8px_20px_rgba(42,30,22,0.18)]",
        className
      )}
    >
      <img
        src={project.image}
        alt={project.imageAlt ?? project.title}
        width={1080}
        height={1350}
        className="pointer-events-none h-full w-full select-none object-cover object-center"
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    </article>
  )
}
