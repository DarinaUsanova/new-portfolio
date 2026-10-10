import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  reducedRevealItemVariants,
  revealItemVariants,
} from '@/components/ContentReveal'
import { PreviewGhost } from '@/components/PreviewGhost'
import { useViewportVideo } from '@/hooks/useViewportVideo'

type ProjectCardProps = {
  title: string
  description: string
  company: string
  role: string
  year: string
  cover: string
  coverSrcSet?: string
  href?: string
  priority?: boolean
  video?: string
}

const loadedCoverSources = new Set<string>()

function Dot() {
  return <span aria-hidden="true" className="size-0.5 rounded-full bg-muted" />
}

function LoopingVideo({
  label,
  poster,
  priority,
  src,
  onPosterLoad,
}: {
  label: string
  poster: string
  priority: boolean
  src: string
  onPosterLoad: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      setIsVideoReady(true)
    }
  }, [])

  useViewportVideo({
    replayDelay: 1000,
    shouldReduceMotion,
    videoRef,
  })

  return (
    <div className="project-cover-video-frame relative aspect-[1796/1080] w-4/5 max-w-[480px] overflow-hidden rounded-[4px]">
      <img
        alt=""
        className="absolute inset-0 size-full object-contain"
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        height={1080}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={onPosterLoad}
        src={poster}
        width={1796}
      />
      <video
        aria-label={label}
        className="project-cover-video absolute inset-0 size-full object-contain"
        data-ready={isVideoReady}
        height={1080}
        muted
        onLoadedData={() => setIsVideoReady(true)}
        onPlaying={() => setIsVideoReady(true)}
        playsInline
        poster={poster}
        preload={priority ? 'metadata' : 'none'}
        ref={videoRef}
        src={src}
        width={1796}
      />
    </div>
  )
}

export function ProjectCard({
  title,
  description,
  company,
  role,
  year,
  cover,
  coverSrcSet,
  href,
  priority = false,
  video,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const [isCoverReady, setIsCoverReady] = useState(() =>
    loadedCoverSources.has(cover),
  )
  const markCoverReady = () => {
    loadedCoverSources.add(cover)
    setIsCoverReady(true)
  }

  const content = (
    <>
      <div
        className="project-cover relative flex h-auto aspect-[3/2] w-full items-center justify-center overflow-hidden rounded-xl bg-[#fafafa] sm:h-[400px] sm:aspect-auto"
      >
        <PreviewGhost ready={isCoverReady} />
        {video ? (
          <LoopingVideo
            label={`${title} project cover animation`}
            onPosterLoad={markCoverReady}
            poster={cover}
            priority={priority}
            src={video}
          />
        ) : (
          <img
            alt={`${title} project cover`}
            className="project-cover-image size-full object-contain sm:object-cover"
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            height={1200}
            loading={priority ? 'eager' : 'lazy'}
            data-ready={isCoverReady}
            onLoad={markCoverReady}
            sizes={coverSrcSet ? '(min-width: 640px) 600px, calc(100vw - 40px)' : undefined}
            src={cover}
            srcSet={coverSrcSet}
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
    <motion.article variants={shouldReduceMotion ? reducedRevealItemVariants : revealItemVariants}>
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
    </motion.article>
  )
}
