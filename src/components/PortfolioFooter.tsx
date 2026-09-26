import { useEffect, useState } from 'react'

const belgradeTimeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  hour12: true,
  minute: '2-digit',
  timeZone: 'Europe/Belgrade',
})

export function PortfolioFooter() {
  const [currentTime, setCurrentTime] = useState(() => new Date())

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  const belgradeTime = belgradeTimeFormatter
    .format(currentTime)
    .replace(/\s?(AM|PM)$/, (_, period: string) => ` ${period.toLowerCase()}`)

  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs leading-4 text-muted">
      <div className="flex items-center gap-1.5">
        <span>Currently in Belgrade</span>
        <span aria-hidden="true" className="size-0.5 rounded-full bg-muted" />
        <time className="tabular-nums" dateTime={currentTime.toISOString()}>
          {belgradeTime}
        </time>
      </div>
      <span>Last updated Sep 2026</span>
    </div>
  )
}
