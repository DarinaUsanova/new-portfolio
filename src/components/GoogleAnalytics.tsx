import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    dataLayer?: IArguments[] | unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

function trackPageView(path: string) {
  window.gtag?.('event', 'page_view', {
    page_location: window.location.origin + path,
    page_path: path,
    page_title: document.title,
  })
}

export function GoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    if (!measurementId || window.gtag) return

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer?.push(arguments)
    }

    window.gtag('js', new Date())
    window.gtag('config', measurementId, { send_page_view: false })

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
    document.head.appendChild(script)

    const handleClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const element = target.closest('a, button')
      if (!element) return

      const label = element.getAttribute('aria-label') || element.textContent?.trim()
      const href = element instanceof HTMLAnchorElement ? element.href : undefined

      window.gtag?.('event', 'site_click', {
        element_type: element.tagName.toLowerCase(),
        element_label: label?.slice(0, 100) || undefined,
        link_url: href,
        link_domain: href ? new URL(href).hostname : undefined,
      })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    if (!measurementId) return
    trackPageView(location.pathname + location.search + location.hash)
  }, [location])

  return null
}
