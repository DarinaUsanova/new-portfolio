import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'motion/react'
import { useEffect, useRef, useState } from 'react'

type CarouselSlide = {
  label: string
  caption: string
  image?: string
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      aria-hidden="true"
      className="size-4 text-ink"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d={direction === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function PlaceholderVisual({
  label,
}: {
  label: string
}) {
  return (
    <div
      aria-label={`Image placeholder: ${label}`}
      className="case-placeholder h-full cursor-grab select-none touch-pan-y active:cursor-grabbing"
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
        <span className="case-placeholder__eyebrow">Image placeholder</span>
        <span className="case-placeholder__label">{label}</span>
      </div>
    </div>
  )
}

function CarouselVisual({
  image,
  label,
}: {
  image?: string
  label: string
}) {
  if (image) {
    return (
      <img
        alt={label}
        className="block h-full w-full select-none object-cover"
        draggable={false}
        src={image}
      />
    )
  }

  return <PlaceholderVisual label={label} />
}

export function CaseStudyCarouselPlaceholder({
  slides,
}: {
  slides: readonly CarouselSlide[]
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<-1 | 1>(1)
  const shouldReduceMotion = useReducedMotion()
  const viewportRef = useRef<HTMLDivElement>(null)
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const updateViewportWidth = () => {
      setViewportWidth(viewport.clientWidth)
    }

    updateViewportWidth()

    const resizeObserver = new ResizeObserver(updateViewportWidth)
    resizeObserver.observe(viewport)

    return () => resizeObserver.disconnect()
  }, [])

  if (slides.length === 0) return null

  const activeSlide = slides[activeIndex]

  const move = (direction: -1 | 1) => {
    setActiveIndex((currentIndex) => {
      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        slides.length - 1,
      )

      if (nextIndex !== currentIndex) {
        setSlideDirection(direction)
      }

      return nextIndex
    })
  }

  const goTo = (nextIndex: number) => {
    setActiveIndex((currentIndex) => {
      if (nextIndex === currentIndex) return currentIndex

      setSlideDirection(nextIndex > currentIndex ? 1 : -1)
      return nextIndex
    })
  }

  const slideTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: 'spring' as const, duration: 0.5, bounce: 0 }
  const captionTransition = shouldReduceMotion
    ? { duration: 0.14, ease: 'easeOut' as const }
    : { duration: 0.18, ease: [0.23, 1, 0.32, 1] as const }
  const captionVariants = {
    enter: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : slideDirection * 8,
    },
    center: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : slideDirection * -8,
    },
  }

  return (
    <figure className="mx-auto flex w-full max-w-[800px] flex-col gap-3">
      <div
        className="relative aspect-[2400/1518] w-full overflow-hidden rounded-xl"
        ref={viewportRef}
      >
        <motion.div
          animate={{ x: -activeIndex * viewportWidth }}
          className="flex h-full w-full"
          drag={shouldReduceMotion ? false : 'x'}
          dragConstraints={{
            left: -(Math.max(slides.length - 1, 0) * viewportWidth),
            right: 0,
          }}
          dragElastic={shouldReduceMotion ? 0 : 0.15}
          dragTransition={{ bounceDamping: 24, bounceStiffness: 240 }}
          onDragEnd={(_, info) => {
            const distance = info.offset.x
            const velocity = info.velocity.x
            const threshold = Math.min(120, viewportWidth * 0.18)
            const hasPassedThreshold =
              (threshold > 0 && Math.abs(distance) >= threshold) ||
              Math.abs(velocity) >= 110

            if (!hasPassedThreshold) return

            const direction = distance !== 0 ? distance : velocity
            move(direction < 0 ? 1 : -1)
          }}
          transition={slideTransition}
        >
          {slides.map((slide, index) => (
            <div
              aria-hidden={index !== activeIndex}
              className="h-full w-full shrink-0 cursor-grab touch-pan-y active:cursor-grabbing"
              key={slide.label}
            >
              <CarouselVisual image={slide.image} label={slide.label} />
            </div>
          ))}
        </motion.div>

        {activeIndex > 0 ? (
          <button
            aria-label="Previous image"
            className="absolute left-2 top-1/2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[16px] bg-white shadow-[0_4px_18px_rgba(21,21,21,0.12)] transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            onClick={() => move(-1)}
            type="button"
          >
            <ChevronIcon direction="left" />
          </button>
        ) : null}
        {activeIndex < slides.length - 1 ? (
          <button
            aria-label="Next image"
            className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[16px] bg-white shadow-[0_4px_18px_rgba(21,21,21,0.12)] transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            onClick={() => move(1)}
            type="button"
          >
            <ChevronIcon direction="right" />
          </button>
        ) : null}
      </div>

      <AnimatePresence initial={false} mode="wait">
        <motion.figcaption
          animate="center"
          aria-live="polite"
          className="px-2 text-center text-xs leading-5 text-muted [text-wrap:pretty]"
          exit="exit"
          initial="enter"
          key={activeIndex}
          transition={captionTransition}
          variants={captionVariants}
        >
          {activeSlide.caption}
        </motion.figcaption>
      </AnimatePresence>

      <div
        aria-label="Choose image"
        className="flex items-center justify-center gap-2"
        role="tablist"
      >
        {slides.map((slide, index) => (
          <button
            aria-label={`Show image ${index + 1}: ${slide.label}`}
            aria-selected={activeIndex === index}
            className={`size-[6px] rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
              activeIndex === index ? 'bg-ink' : 'bg-muted'
            }`}
            key={slide.label}
            onClick={() => goTo(index)}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </figure>
  )
}
