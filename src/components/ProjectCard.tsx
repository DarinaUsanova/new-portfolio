import { useEffect, useRef } from 'react'
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
  video?: string
}

function Dot() {
  return <span aria-hidden="true" className="size-0.5 rounded-full bg-muted" />
}

function LoopingVideo({
  label,
  poster,
  src,
}: {
  label: string
  poster: string
  src: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const replayTimeoutRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    return () => {
      if (replayTimeoutRef.current !== undefined) {
        window.clearTimeout(replayTimeoutRef.current)
      }
    }
  }, [])

  const handleEnded = () => {
    replayTimeoutRef.current = window.setTimeout(() => {
      const video = videoRef.current
      if (!video) return

      video.currentTime = 0
      void video.play().catch(() => undefined)
    }, 1000)
  }

  return (
    <video
      aria-label={label}
      autoPlay
      className="project-cover-video block h-auto w-full max-w-[480px] rounded-[4px] object-contain [box-shadow:0_6.4px_25.2px_0_rgba(35,44,96,0.09)]"
      onEnded={handleEnded}
      muted
      playsInline
      poster={poster}
      ref={videoRef}
      src={src}
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
            src={video}
          />
        ) : (
          <img
            alt={`${title} project cover`}
            className="project-cover-image size-full object-cover"
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            loading={priority ? 'eager' : 'lazy'}
            src={cover}
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
