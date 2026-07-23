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

/** Menu board slide at native 1080×1350 (4:5) — full board visible, no overlays. */
export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "relative h-full w-full overflow-hidden rounded-sm shadow-[0_14px_36px_rgba(42,30,22,0.28)]",
        className
      )}
    >
      <img
        src={project.image}
        alt={project.imageAlt ?? project.title}
        width={1080}
        height={1350}
        className="pointer-events-none h-full w-full select-none object-contain object-center"
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    </article>
  )
}
