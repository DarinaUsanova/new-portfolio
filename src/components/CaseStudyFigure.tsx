import { useCallback, useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export type CaseStudyFigureProps = {
  alt: string
  caption: string
  lightboxSrc?: string
  priority?: boolean
  src: string
}

function ImageLightbox({
  alt,
  caption,
  isClosing,
  lightboxSrc,
  onClosed,
  onRequestClose,
  src,
}: CaseStudyFigureProps & {
  isClosing: boolean
  onClosed: () => void
  onRequestClose: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const captionId = useId()
  const [isActive, setIsActive] = useState(false)

  useLayoutEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const root = document.documentElement
    const previousOverflow = root.style.overflow
    const previousPaddingRight = root.style.paddingRight
    const scrollbarWidth = window.innerWidth - root.clientWidth
    const paddingRight = Number.parseFloat(getComputedStyle(root).paddingRight)
    const previousFocus = document.activeElement

    root.style.overflow = 'hidden'
    root.style.paddingRight = `${paddingRight + scrollbarWidth}px`
    dialog.showModal()
    dialog.focus({ preventScroll: true })
    const animationFrame = window.requestAnimationFrame(() => setIsActive(true))

    return () => {
      window.cancelAnimationFrame(animationFrame)
      dialog.close()
      root.style.overflow = previousOverflow
      root.style.paddingRight = previousPaddingRight
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true })
      }
    }
  }, [])

  return createPortal(
    <dialog
      aria-describedby={captionId}
      aria-label="Enlarged image"
      className={`case-lightbox${isActive ? ' case-lightbox--open' : ''}${isClosing ? ' case-lightbox--closing' : ''}`}
      onCancel={(event) => {
        event.preventDefault()
        onRequestClose()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Tab') {
          event.preventDefault()
          closeButtonRef.current?.focus()
        }
      }}
      ref={dialogRef}
    >
      <div
        aria-hidden="true"
        className="case-lightbox-backdrop"
        onTransitionEnd={(event) => {
          if (isClosing && event.target === event.currentTarget && event.propertyName === 'opacity') {
            onClosed()
          }
        }}
      />
      <button
        aria-label="Close image"
        className="case-lightbox-dismiss"
        onClick={onRequestClose}
        ref={closeButtonRef}
        type="button"
      />
      <figure className="case-lightbox-figure">
        <img alt={alt} className="case-lightbox-image" decoding="async" src={lightboxSrc ?? src} />
        <figcaption className="case-lightbox-caption" id={captionId}>
          {caption}
        </figcaption>
      </figure>
    </dialog>,
    document.body,
  )
}

export function CaseStudyFigure({
  alt,
  caption,
  lightboxSrc,
  priority = false,
  src,
}: CaseStudyFigureProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const requestClose = useCallback(() => setIsClosing(true), [])
  const finishClose = useCallback(() => {
    setIsOpen(false)
    setIsClosing(false)
  }, [])

  return (
    <>
      <figure className="mx-auto flex w-full max-w-[800px] flex-col gap-1">
        <button
          aria-haspopup="dialog"
          aria-label={`Enlarge image: ${alt}`}
          className="block w-full cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          onClick={() => {
            triggerRef.current?.focus({ preventScroll: true })
            setIsClosing(false)
            setIsOpen(true)
          }}
          ref={triggerRef}
          type="button"
        >
          <img
            alt={alt}
            className="block aspect-[5/3] w-full max-w-[800px] rounded-xl object-cover"
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            loading={priority ? 'eager' : 'lazy'}
            src={src}
          />
        </button>
        <figcaption className="px-2 text-center text-xs leading-5 text-muted [text-wrap:pretty]">
          {caption}
        </figcaption>
      </figure>
      {isOpen && (
        <ImageLightbox
          alt={alt}
          caption={caption}
          isClosing={isClosing}
          lightboxSrc={lightboxSrc}
          onClosed={finishClose}
          onRequestClose={requestClose}
          src={src}
        />
      )}
    </>
  )
}
