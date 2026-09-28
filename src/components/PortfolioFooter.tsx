import { useEffect, useState } from 'react'

const belgradeTimeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  hour12: true,
  minute: '2-digit',
  timeZone: 'Europe/Belgrade',
})

const belgradeDateTimeFormatter = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
  timeZone: 'Europe/Belgrade',
  timeZoneName: 'longOffset',
})

function formatBelgradeDateTime(date: Date) {
  const parts = Object.fromEntries(
    belgradeDateTimeFormatter
      .formatToParts(date)
      .map(({ type, value }) => [type, value]),
  )
  const offset = parts.timeZoneName.replace('GMT', '')

  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}${offset}`
}

export function PortfolioFooter() {
  const [currentTime, setCurrentTime] = useState(() => new Date())

  useEffect(() => {
    let timeoutId: number

    const scheduleNextUpdate = () => {
      const delay = 60_000 - (Date.now() % 60_000)
      timeoutId = window.setTimeout(() => {
        setCurrentTime(new Date())
        scheduleNextUpdate()
      }, delay)
    }

    scheduleNextUpdate()

    return () => window.clearTimeout(timeoutId)
  }, [])

  const belgradeTime = belgradeTimeFormatter
    .format(currentTime)
    .replace(/\s?(AM|PM)$/, (_, period: string) => ` ${period.toLowerCase()}`)

  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs leading-4 text-muted">
      <div className="flex items-center gap-1.5">
        <span>Currently in Belgrade</span>
        <span aria-hidden="true" className="size-0.5 rounded-full bg-muted" />
        <time className="tabular-nums" dateTime={formatBelgradeDateTime(currentTime)}>
          {belgradeTime}
        </time>
      </div>
      <span>Last updated Sep 2026</span>
    </div>
  )
}
