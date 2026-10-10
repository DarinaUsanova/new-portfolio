import { motion, useReducedMotion } from 'motion/react'

import {
  reducedRevealListVariants,
  revealListVariants,
} from '@/components/ContentReveal'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/site'

export function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      aria-label="Selected projects"
      className="flex min-w-0 flex-col gap-10"
      id="projects"
      variants={shouldReduceMotion ? reducedRevealListVariants : revealListVariants}
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.title} priority={index === 0} {...project} />
      ))}
    </motion.section>
  )
}
