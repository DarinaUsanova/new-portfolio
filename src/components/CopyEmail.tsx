import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'

import { siteConfig } from '@/data/site'
import { cn } from '@/lib/cn'

export function CopyEmail() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timeout = window.setTimeout(() => setCopied(false), 1600)
    return () => window.clearTimeout(timeout)
  }, [copied])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopied(true)
    } catch (error) {
      console.error('Unable to copy email address', error)
    }
  }

  return (
    <button
      aria-label={copied ? 'Email copied' : `Copy ${siteConfig.email}`}
      className="portfolio-hit-area inline-flex cursor-pointer items-center gap-1 text-muted transition-colors duration-150 [transition-timing-function:ease] enabled:hover:text-ink disabled:cursor-default disabled:text-muted focus-visible:rounded focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      disabled={copied}
      onClick={copyEmail}
      type="button"
    >
      <span>{siteConfig.email}</span>
      <span className="grid size-3.5 shrink-0 place-items-center" aria-hidden="true">
        <Check
          className={cn(
            'col-start-1 row-start-1 text-[#00cf3e] transition-[filter,opacity,transform] duration-150 ease-out',
            copied
              ? 'scale-100 opacity-100 blur-none'
              : 'scale-95 opacity-0 blur-[2px]',
          )}
          size={14}
          strokeWidth={1.7}
        />
        <Copy
          className={cn(
            'col-start-1 row-start-1 transition-[filter,opacity,transform] duration-150 ease-out',
            copied
              ? 'scale-95 opacity-0 blur-[2px]'
              : 'scale-100 opacity-100 blur-none',
          )}
          size={14}
          strokeWidth={1.7}
        />
      </span>
    </button>
  )
}
