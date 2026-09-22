import { Link } from 'react-router-dom'

type ProjectCardProps = {
  title: string
  description: string
  company: string
  role: string
  year: string
  cover: string
  href?: string
  priority?: boolean
}

function Dot() {
  return <span aria-hidden="true" className="size-0.5 rounded-full bg-muted" />
}

export function ProjectCard({
  title,
  description,
  company,
  role,
  year,
  cover,
  href,
  priority = false,
}: ProjectCardProps) {
  const content = (
    <>
      <div className="project-cover h-[400px] w-full overflow-hidden rounded-xl bg-[#f1f1f1]">
        <img
          alt={`${title} project cover`}
          className="project-cover-image size-full object-cover"
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          loading={priority ? 'eager' : 'lazy'}
          src={cover}
        />
      </div>

      <div className="mt-5 text-sm leading-5">
        <h2 className="font-medium">{title}</h2>
        <p className="mt-2 max-w-[600px]">{description}</p>
        <div className="mt-2 flex flex-wrap items-center gap-1.5 text-muted">
          <span>{company}</span>
          <Dot />
          <span>{role}</span>
          <Dot />
          <span>{year}</span>
        </div>
      </div>
    </>
  )

  return (
    <article>
      {href ? (
        <Link
          aria-label={`Open ${title}`}
          className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          to={href}
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  )
}
