import { useReducedMotion } from 'motion/react'
import { useRef } from 'react'

import { CaseStudyFigure } from '@/components/CaseStudyFigure'
import { useViewportVideo } from '@/hooks/useViewportVideo'

export type CaseStudyPlaceholderProps = {
  label: string
  caption: string
  height?: number
  image?: string
  priority?: boolean
  video?: string
  width?: number
}

export function CaseStudyPlaceholder({
  caption,
  image,
  label,
  priority = false,
  video,
  width = 2400,
  height = 1590,
}: CaseStudyPlaceholderProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useViewportVideo({
    shouldReduceMotion,
    videoRef,
  })

  if (image && !video) {
    return (
      <CaseStudyFigure
        alt={label}
        caption={caption}
        height={height}
        priority={priority}
        src={image}
        width={width}
      />
    )
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
          style={{
            aspectRatio: `${width} / ${height}`,
            ...(image ? { backgroundImage: `url(${image})` } : {}),
          }}
        >
          <video
            aria-label={label}
            className="block size-full max-w-[800px] rounded-[12px] object-contain"
            height={height}
            muted
            playsInline
            poster={image}
            preload="none"
            ref={videoRef}
            src={video}
            width={width}
          />
        </div>
      ) : image ? (
        <img
          alt={label}
          className="block h-auto w-full rounded-xl object-contain"
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          src={image}
          width={width}
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
