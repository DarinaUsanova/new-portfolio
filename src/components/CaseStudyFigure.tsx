import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { createPortal } from 'react-dom'

export type CaseStudyFigureProps = {
  alt: string
  caption: string
  figureClassName?: string
  imageClassName?: string
  lightboxSrc?: string
  priority?: boolean
  src: string
  showCaption?: boolean
  triggerClassName?: string
}

type ImageRect = {
  left: number
  top: number
  width: number
  height: number
}

type FlipTransform = {
  scaleX: number
  scaleY: number
  translateX: number
  translateY: number
}

type SourceSnapshot = ImageRect & {
  borderRadius: string
  container: HTMLButtonElement
  containerHeight: number
  containerStyle: string
  image: HTMLImageElement
  imageClassName: string
  imageStyle: string
  nextSibling: Node | null
  parentNode: Node
}

function getRect(element: Element): ImageRect {
  const rect = element.getBoundingClientRect()

  return {
    height: rect.height,
    left: rect.left,
    top: rect.top,
    width: rect.width,
  }
}

function getFlipTransform(sourceRect: ImageRect, targetRect: ImageRect): FlipTransform {
  return {
    scaleX: sourceRect.width / targetRect.width,
    scaleY: sourceRect.height / targetRect.height,
    translateX:
      sourceRect.left + sourceRect.width / 2 - (targetRect.left + targetRect.width / 2),
    translateY:
      sourceRect.top + sourceRect.height / 2 - (targetRect.top + targetRect.height / 2),
  }
}

function getTargetRect(image: HTMLImageElement, sourceRect: ImageRect): ImageRect {
  const viewportWidth = document.documentElement.clientWidth || window.innerWidth
  const viewportHeight = window.innerHeight
  const isMobile = viewportWidth <= 639
  const aspectRatio =
    image.naturalWidth > 0 && image.naturalHeight > 0
      ? image.naturalWidth / image.naturalHeight
      : sourceRect.width / sourceRect.height || 1
  const safeAreaTop = isMobile ? 20 : 0
  const safeAreaBottom = isMobile ? 24 : 0
  const captionSpace = isMobile ? 88 : 64
  const desktopMaxWidth = Math.min(viewportWidth * 0.82, 1040)
  const maxWidth = isMobile
    ? Math.max(1, viewportWidth - 48)
    : Math.min(viewportWidth - 32, Math.max(desktopMaxWidth, sourceRect.width * 1.16))
  const maxHeight = isMobile
    ? Math.max(1, viewportHeight - safeAreaTop - safeAreaBottom - captionSpace)
    : Math.min(viewportHeight * 0.82, 960)

  let width = Math.min(maxWidth, maxHeight * aspectRatio)
  let height = width / aspectRatio

  if (height > maxHeight) {
    height = maxHeight
    width = height * aspectRatio
  }

  const availableMobileHeight = viewportHeight - safeAreaTop - safeAreaBottom - captionSpace
  const top = isMobile
    ? safeAreaTop + Math.max(0, (availableMobileHeight - height) / 2)
    : Math.max(0, (viewportHeight - height) / 2)

  return {
    height,
    left: Math.max(0, (viewportWidth - width) / 2),
    top,
    width,
  }
}

function getCurrentSourceRect(snapshot: SourceSnapshot): ImageRect {
  const sourceImageIsInTrigger = snapshot.image.parentNode === snapshot.parentNode
  const sourceElement = sourceImageIsInTrigger ? snapshot.image : snapshot.container
  const rect = getRect(sourceElement)

  return rect.width && rect.height ? rect : snapshot
}

function restoreInlineStyle(element: HTMLElement, style: string) {
  if (style) {
    element.setAttribute('style', style)
  } else {
    element.removeAttribute('style')
  }
}

function ImageLightbox({
  alt,
  caption,
  isClosing,
  lightboxSrc,
  onClosed,
  onVisualReady,
  onRequestClose,
  source,
  src,
}: CaseStudyFigureProps & {
  isClosing: boolean
  onClosed: () => void
  onRequestClose: () => void
  onVisualReady: () => void
  source: SourceSnapshot
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const viewerImageRef = useRef<HTMLImageElement>(null)
  const activeImageRef = useRef<HTMLImageElement | null>(null)
  const captionId = useId()
  const [isPrepared, setIsPrepared] = useState(false)
  const [isBackdropVisible, setIsBackdropVisible] = useState(false)
  const [isSettled, setIsSettled] = useState(false)
  const [targetRect, setTargetRect] = useState<ImageRect>(() =>
    getTargetRect(source.image, source),
  )
  const [returnRect, setReturnRect] = useState<ImageRect>(source)
  const isClosingRef = useRef(isClosing)
  const preparedRef = useRef(false)
  const closedNotifiedRef = useRef(false)

  isClosingRef.current = isClosing

  const notifyClosed = useCallback(() => {
    if (closedNotifiedRef.current) return

    closedNotifiedRef.current = true
    onClosed()
  }, [onClosed])

  useLayoutEffect(() => {
    const dialog = dialogRef.current
    const media = mediaRef.current
    if (!dialog || !media) return

    const appRoot = document.getElementById('root')
    const html = document.documentElement
    const body = document.body
    const previousHtmlOverflow = html.style.overflow
    const previousBodyOverflow = body.style.overflow
    const previousHtmlPaddingRight = html.style.paddingRight
    const previousBodyPaddingRight = body.style.paddingRight
    const previousRootInert = appRoot?.inert ?? false
    const previousFocus = document.activeElement
    const scrollbarWidth = window.innerWidth - html.clientWidth
    const bodyPaddingRight = Number.parseFloat(getComputedStyle(body).paddingRight) || 0
    let disposed = false
    let openFrameOne: number | undefined
    let openFrameTwo: number | undefined

    const getActiveImage = () => viewerImageRef.current ?? media.querySelector('img')

    const prepareImage = async () => {
      const image = getActiveImage()
      if (!image || preparedRef.current || disposed) return

      const imageHasLoaded = image.complete && (image.naturalWidth > 0 || image.naturalHeight > 0)
      if (!image.complete) return

      if (imageHasLoaded && 'decode' in image) {
        try {
          await image.decode()
        } catch {
          // The browser can reject decode for a cached image even though it can be displayed.
        }
      }

      if (disposed || preparedRef.current) return

      activeImageRef.current = image
      setTargetRect(getTargetRect(image, source))
      preparedRef.current = true
      setIsPrepared(true)
      onVisualReady()

      openFrameOne = window.requestAnimationFrame(() => {
        openFrameOne = undefined
        if (disposed || isClosingRef.current) return

        setIsBackdropVisible(true)
        openFrameTwo = window.requestAnimationFrame(() => {
          openFrameTwo = undefined
          if (disposed || isClosingRef.current) return

          setIsSettled(true)
        })
      })
    }

    const handleImageLoad = () => {
      void prepareImage()
    }
    const handleImageError = () => {
      void prepareImage()
    }
    const handleResize = () => {
      const image = activeImageRef.current
      if (!image || !preparedRef.current || isClosingRef.current) return

      setTargetRect(getTargetRect(image, source))
    }

    const image = getActiveImage()
    image?.addEventListener('load', handleImageLoad)
    image?.addEventListener('error', handleImageError)
    window.addEventListener('resize', handleResize)

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.paddingRight = `${bodyPaddingRight + scrollbarWidth}px`
    if (appRoot) appRoot.inert = true

    if (!dialog.open) dialog.showModal()
    dialog.focus({ preventScroll: true })
    if (image?.complete) void prepareImage()

    return () => {
      disposed = true
      if (openFrameOne !== undefined) window.cancelAnimationFrame(openFrameOne)
      if (openFrameTwo !== undefined) window.cancelAnimationFrame(openFrameTwo)
      image?.removeEventListener('load', handleImageLoad)
      image?.removeEventListener('error', handleImageError)
      window.removeEventListener('resize', handleResize)

      restoreInlineStyle(source.container, source.containerStyle)
      if (dialog.open) dialog.close()

      html.style.overflow = previousHtmlOverflow
      body.style.overflow = previousBodyOverflow
      html.style.paddingRight = previousHtmlPaddingRight
      body.style.paddingRight = previousBodyPaddingRight
      if (appRoot) appRoot.inert = previousRootInert

      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true })
      }
    }
  }, [onVisualReady, source])

  useLayoutEffect(() => {
    if (!isClosing) return

    setReturnRect(getCurrentSourceRect(source))
  }, [isClosing, source])

  useEffect(() => {
    if (!isClosing) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const closeTimer = window.setTimeout(
      notifyClosed,
      isPrepared ? (prefersReducedMotion ? 180 : 460) : 220,
    )

    return () => window.clearTimeout(closeTimer)
  }, [isClosing, isPrepared, notifyClosed])

  const openTransform = getFlipTransform(source, targetRect)
  const returnTransform = getFlipTransform(returnRect, targetRect)
  const stageStyle = {
    '--lightbox-open-scale-x': String(openTransform.scaleX),
    '--lightbox-open-scale-y': String(openTransform.scaleY),
    '--lightbox-open-x': `${openTransform.translateX}px`,
    '--lightbox-open-y': `${openTransform.translateY}px`,
    '--lightbox-return-scale-x': String(returnTransform.scaleX),
    '--lightbox-return-scale-y': String(returnTransform.scaleY),
    '--lightbox-return-x': `${returnTransform.translateX}px`,
    '--lightbox-return-y': `${returnTransform.translateY}px`,
    '--lightbox-source-radius': source.borderRadius,
    height: `${targetRect.height}px`,
    left: `${targetRect.left}px`,
    top: `${targetRect.top}px`,
    width: `${targetRect.width}px`,
  } as CSSProperties
  const captionStyle = {
    left: `${targetRect.left + targetRect.width / 2}px`,
    top: `${targetRect.top + targetRect.height + 12}px`,
  } as CSSProperties
  const viewerClassName = [
    'case-lightbox',
    isPrepared && 'case-lightbox--prepared',
    isBackdropVisible && 'case-lightbox--backdrop-visible',
    isSettled && 'case-lightbox--open',
    isClosing && 'case-lightbox--closing',
  ]
    .filter(Boolean)
    .join(' ')

  return createPortal(
    <dialog
      aria-describedby={captionId}
      aria-label={`Enlarged image: ${alt}`}
      aria-modal="true"
      className={viewerClassName}
      onCancel={(event) => {
        event.preventDefault()
        onRequestClose()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault()
          onRequestClose()
          return
        }

        if (event.key === 'Tab') {
          event.preventDefault()
          closeButtonRef.current?.focus({ preventScroll: true })
        }
      }}
      ref={dialogRef}
      role="dialog"
      tabIndex={-1}
    >
      <div aria-hidden="true" className="case-lightbox-backdrop" />
      <button
        aria-label="Close image"
        className="case-lightbox-dismiss"
        onClick={onRequestClose}
        ref={closeButtonRef}
        type="button"
      />
      <div
        aria-label={alt}
        className="case-lightbox-stage"
        onClick={onRequestClose}
        style={stageStyle}
      >
        <div className="case-lightbox-media" ref={mediaRef}>
          <img
            alt={alt}
            className="case-lightbox-image"
            decoding="async"
            ref={viewerImageRef}
            src={lightboxSrc ?? src}
          />
        </div>
      </div>
      <p
        className="case-lightbox-caption"
        id={captionId}
        onClick={(event) => event.stopPropagation()}
        style={captionStyle}
      >
        {caption}
      </p>
    </dialog>,
    document.body,
  )
}

export function CaseStudyFigure({
  alt,
  caption,
  figureClassName,
  imageClassName,
  lightboxSrc,
  priority = false,
  src,
  showCaption = true,
  triggerClassName,
}: CaseStudyFigureProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isMobileViewport, setIsMobileViewport] = useState(() =>
    window.matchMedia('(max-width: 639px)').matches,
  )
  const [isSourceHidden, setIsSourceHidden] = useState(false)
  const [sourceSnapshot, setSourceSnapshot] = useState<SourceSnapshot | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const sourceImageRef = useRef<HTMLImageElement>(null)
  const hideSource = useCallback(() => setIsSourceHidden(true), [])

  const requestClose = useCallback(() => {
    if (!isMounted || isClosing) return

    setIsClosing(true)
  }, [isClosing, isMounted])

  const finishClose = useCallback(() => {
    setIsMounted(false)
    setIsClosing(false)
    setIsSourceHidden(false)
    setSourceSnapshot(null)
  }, [])

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)')
    const updateViewport = () => setIsMobileViewport(mediaQuery.matches)

    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)

    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [])

  useEffect(() => {
    if (isMobileViewport && isMounted) finishClose()
  }, [finishClose, isMobileViewport, isMounted])

  const handleOpen = useCallback(() => {
    const trigger = triggerRef.current
    const sourceImage = sourceImageRef.current
    if (!trigger || !sourceImage) return

    const imageRect = getRect(sourceImage)
    const triggerRect = getRect(trigger)
    if (!imageRect.width || !imageRect.height) return

    const computedImageStyle = getComputedStyle(sourceImage)
    const snapshot: SourceSnapshot = {
      ...imageRect,
      borderRadius: computedImageStyle.borderRadius || '12px',
      container: trigger,
      containerHeight: triggerRect.height,
      containerStyle: trigger.getAttribute('style') ?? '',
      image: sourceImage,
      imageClassName: sourceImage.className,
      imageStyle: sourceImage.getAttribute('style') ?? '',
      nextSibling: sourceImage.nextSibling,
      parentNode: sourceImage.parentNode ?? trigger,
    }

    if (lightboxSrc && lightboxSrc !== src) {
      const preload = new Image()
      preload.decoding = 'async'
      preload.src = lightboxSrc
      if ('decode' in preload) void preload.decode().catch(() => undefined)
    }

    trigger.focus({ preventScroll: true })
    setIsSourceHidden(false)
    setIsClosing(false)
    setSourceSnapshot(snapshot)
    setIsMounted(true)
  }, [lightboxSrc, src])

  const image = (
    <img
      alt={alt}
      className={`block h-auto w-full max-w-[800px] rounded-xl object-contain${imageClassName ? ` ${imageClassName}` : ''}`}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      loading={priority ? 'eager' : 'lazy'}
      ref={sourceImageRef}
      src={src}
    />
  )

  return (
    <>
      <figure
        className={
          figureClassName ?? 'mx-auto flex w-full max-w-[800px] flex-col gap-1'
        }
      >
        {isMobileViewport ? (
          image
        ) : (
          <button
            aria-haspopup="dialog"
            aria-label={`Enlarge image: ${alt}`}
            aria-hidden={isSourceHidden || undefined}
            className={`case-lightbox-trigger block w-full cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink${triggerClassName ? ` ${triggerClassName}` : ''}${isSourceHidden ? ' case-lightbox-trigger--hidden' : ''}`}
            onClick={handleOpen}
            ref={triggerRef}
            style={sourceSnapshot ? { height: `${sourceSnapshot.containerHeight}px` } : undefined}
            type="button"
          >
            {image}
          </button>
        )}
        {showCaption ? (
          <figcaption className="px-2 text-center text-xs leading-5 text-muted [text-wrap:pretty]">
            {caption}
          </figcaption>
        ) : null}
      </figure>
      {isMounted && sourceSnapshot && (
        <ImageLightbox
          alt={alt}
          caption={caption}
          isClosing={isClosing}
          lightboxSrc={lightboxSrc}
          onClosed={finishClose}
          onRequestClose={requestClose}
          onVisualReady={hideSource}
          source={sourceSnapshot}
          src={src}
        />
      )}
    </>
  )
}
