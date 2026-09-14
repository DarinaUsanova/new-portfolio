import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/site'

export function ProjectsSection() {
  return (
    <section
      aria-label="Selected projects"
      className="flex min-w-0 flex-col gap-10"
      id="projects"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.title} priority={index === 0} {...project} />
      ))}
    </section>
  )
}
