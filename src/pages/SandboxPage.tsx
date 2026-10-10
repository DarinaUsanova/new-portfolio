import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

import flowImage from '@/assets/image-flow.png'
import menuImage from '@/assets/image-menu.png'
import promptBoxImage from '@/assets/prompt-box.png'
import aiAssistantImage from '@/assets/ai-assistant.png'
import statusesImage from '@/assets/statuses.png'
import {
  reducedRevealItemVariants,
  reducedRevealListVariants,
  revealItemVariants,
  revealListVariants,
} from '@/components/ContentReveal'
import { PreviewGhost } from '@/components/PreviewGhost'

const loadedPreviewImages = new Set<string>()

function PlaygroundImage({
  alt,
  caption,
  height,
  priority = false,
  src,
  width,
}: {
  alt: string
  caption: string
  height: number
  priority?: boolean
  src: string
  width: number
}) {
  const shouldReduceMotion = useReducedMotion()
  const [ready, setReady] = useState(() => loadedPreviewImages.has(src))

  return (
    <motion.figure
      className="flex w-full max-w-[600px] flex-col gap-3"
      variants={shouldReduceMotion ? reducedRevealItemVariants : revealItemVariants}
    >
      <div
        className="relative w-full overflow-hidden rounded-[12px] bg-surface"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <PreviewGhost ready={ready} />
        <img
          alt={alt}
          className="playground-preview-media block size-full object-contain"
          data-ready={ready}
          decoding="async"
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => {
            loadedPreviewImages.add(src)
            setReady(true)
          }}
          src={src}
          width={width}
        />
      </div>
      <figcaption className="text-center text-sm text-muted">{caption}</figcaption>
    </motion.figure>
  )
}

function NotificationPreview() {
  const shouldReduceMotion = useReducedMotion()
  const [ready, setReady] = useState(false)

  return (
    <motion.figure
      className="flex w-full max-w-[600px] flex-col gap-3"
      variants={shouldReduceMotion ? reducedRevealItemVariants : revealItemVariants}
    >
      <div className="relative h-[400px] w-full overflow-hidden rounded-[12px] border border-surface bg-surface">
        <PreviewGhost ready={ready} />
        <iframe
          className="playground-preview-media size-full border-0"
          data-ready={ready}
          loading="lazy"
          onLoad={() => setReady(true)}
          scrolling="no"
          src="https://animated-notification-stack.vercel.app/"
          title="Animated notification stack"
        />
      </div>
      <figcaption className="text-center text-sm text-muted">
        Animated notification stack
      </figcaption>
    </motion.figure>
  )
}

export function SandboxPage() {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Playground — Darina Usanova'

    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <motion.section
      aria-label="Animated notification stack playground"
      className="flex flex-col items-center gap-10"
      variants={shouldReduceMotion ? reducedRevealListVariants : revealListVariants}
    >
      <PlaygroundImage
        alt="Status indicator designs"
        caption="Status indicator"
        height={1260}
        priority
        src={statusesImage}
        width={1800}
      />
      <PlaygroundImage
        alt="Hero prompt box"
        caption="Hero prompt box"
        height={800}
        src={promptBoxImage}
        width={1200}
      />
      <PlaygroundImage
        alt="AI Assistant"
        caption="AI Assistant"
        height={1200}
        src={aiAssistantImage}
        width={1800}
      />
      <NotificationPreview />
      <PlaygroundImage
        alt="Playground menu"
        caption="Action menu"
        height={1008}
        src={menuImage}
        width={1200}
      />
      <PlaygroundImage
        alt="Workflow flow"
        caption="Workflow automation"
        height={1080}
        src={flowImage}
        width={1200}
      />
    </motion.section>
  )
}
