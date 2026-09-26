import { useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { useViewportVideo } from '@/hooks/useViewportVideo'

type ProjectCardProps = {
  title: string
  description: string
  company: string
  role: string
  year: string
  cover: string
  href?: string
  priority?: boolean
  video?: string
}

function Dot() {
  return <span aria-hidden="true" className="size-0.5 rounded-full bg-muted" />
}

function LoopingVideo({
  label,
  poster,
  priority,
  src,
}: {
  label: string
  poster: string
  priority: boolean
  src: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useViewportVideo({
    replayDelay: 1000,
    shouldReduceMotion,
    videoRef,
  })

  return (
    <video
      aria-label={label}
      className="project-cover-video block h-auto w-full max-w-[480px] rounded-[4px] object-contain [box-shadow:0_6.4px_25.2px_0_rgba(35,44,96,0.09)]"
      height={1080}
      muted
      playsInline
      poster={poster}
      preload={priority ? 'metadata' : 'none'}
      ref={videoRef}
      src={src}
      width={1796}
    />
  )
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
  video,
}: ProjectCardProps) {
  const content = (
    <>
      <div
        className={`project-cover relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-xl bg-[#f1f1f1] ${
          video ? 'bg-cover bg-center' : ''
        }`}
        style={video ? { backgroundImage: `url(${cover})` } : undefined}
      >
        {video ? (
          <LoopingVideo
            label={`${title} project cover animation`}
            poster={cover}
            priority={priority}
            src={video}
          />
        ) : (
          <img
            alt={`${title} project cover`}
            className="project-cover-image size-full object-cover"
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            height={1200}
            loading={priority ? 'eager' : 'lazy'}
            src={cover}
            width={1800}
          />
        )}
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
