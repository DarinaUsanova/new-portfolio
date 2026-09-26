import { useReducedMotion } from 'motion/react'
import { useEffect, useRef } from 'react'

import { CaseStudyFigure } from '@/components/CaseStudyFigure'

export type CaseStudyPlaceholderProps = {
  label: string
  caption: string
  image?: string
  video?: string
}

export function CaseStudyPlaceholder({
  caption,
  image,
  label,
  video,
}: CaseStudyPlaceholderProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldReduceMotion) return

    video.pause()
    video.currentTime = 0
  }, [shouldReduceMotion])

  const handleEnded = () => {
    const currentVideo = videoRef.current
    if (!currentVideo || shouldReduceMotion) return

    currentVideo.currentTime = 0
    void currentVideo.play().catch(() => undefined)
  }

  if (image && !video) {
    return <CaseStudyFigure alt={label} caption={caption} src={image} />
  }

  return (
    <figure className="mx-auto flex w-full max-w-[800px] flex-col gap-1">
      {video ? (
        <div
          className={
            image
              ? 'case-placeholder bg-cover bg-center'
              : 'flex w-full items-center justify-center overflow-hidden rounded-[12px]'
          }
          style={
            image
              ? {
                  aspectRatio: '2400 / 1590',
                  backgroundImage: `url(${image})`,
                }
              : undefined
          }
        >
          <video
            aria-label={label}
            autoPlay={!shouldReduceMotion}
            className="block h-auto w-full max-w-[800px] rounded-[12px] object-contain"
            muted
            onEnded={handleEnded}
            playsInline
            poster={image}
            ref={videoRef}
            src={video}
          />
        </div>
      ) : image ? (
        <img
          alt={label}
          className="block h-auto w-full rounded-xl object-contain"
          decoding="async"
          src={image}
        />
      ) : (
        <div
          aria-label={`Image placeholder: ${label}`}
          className="case-placeholder"
          role="img"
        >
          <div className="case-placeholder__wireframe" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="case-placeholder__content">
            <span className="case-placeholder__eyebrow">
              Image placeholder
            </span>
            <span className="case-placeholder__label">{label}</span>
          </div>
        </div>
      )}
      <figcaption className="px-2 text-center text-xs leading-5 text-muted [text-wrap:pretty]">
        {caption}
      </figcaption>
    </figure>
  )
}
