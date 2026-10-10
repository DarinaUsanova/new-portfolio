import type { MouseEvent } from 'react'

export function scrollToCaseSection(event: MouseEvent<HTMLAnchorElement>, sectionId: string) {
  // Keep native navigation for keyboard activation and modified clicks.
  if (
    event.detail === 0 ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) return

  const section = document.getElementById(sectionId)
  if (!section) return

  event.preventDefault()

  const hash = `#${sectionId}`
  if (window.location.hash !== hash) {
    window.history.pushState(null, '', hash)
  }

  section.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    block: 'start',
  })
}
