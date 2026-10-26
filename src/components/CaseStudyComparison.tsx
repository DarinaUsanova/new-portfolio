import { useId, useState } from 'react'
import { ChevronsLeftRight } from 'lucide-react'

export type CaseStudyComparisonProps = {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  caption: string
}

export function CaseStudyComparison({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  caption,
}: CaseStudyComparisonProps) {
  const sliderId = useId()
  const [position, setPosition] = useState(50)

  return (
    <figure className="mx-auto flex w-full max-w-[800px] flex-col gap-1">
      <div className="relative aspect-[2400/1590] w-full overflow-hidden rounded-xl bg-surface">
        <img
          alt={beforeAlt}
          className="absolute inset-0 size-full select-none object-cover"
          decoding="async"
          draggable={false}
          height={1551}
          loading="lazy"
          src={beforeSrc}
          width={2400}
        />
        <img
          alt={afterAlt}
          className="absolute inset-0 size-full select-none object-cover"
          decoding="async"
          draggable={false}
          height={1590}
          loading="lazy"
          src={afterSrc}
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          width={2400}
        />

        <span className="pointer-events-none absolute left-3 top-3 z-[2] rounded-md bg-white/95 px-2 py-1 text-xs font-medium text-ink shadow-sm">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 z-[2] rounded-md bg-white/95 px-2 py-1 text-xs font-medium text-ink shadow-sm">
          After
        </span>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-[2] w-0.5 -translate-x-1/2 bg-white"
          style={{ left: `${position}%` }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 z-[4] flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/15 bg-white text-ink shadow-md"
          style={{ left: `${position}%` }}
        >
          <ChevronsLeftRight className="size-5" strokeWidth={1.8} />
        </div>

        <label className="sr-only" htmlFor={sliderId}>
          Compare the old and new Manual Task editors
        </label>
        <input
          aria-valuetext={`${position}% of the old editor shown`}
          className="case-comparison-range absolute inset-0 z-[3] size-full focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-ink"
          id={sliderId}
          max={100}
          min={0}
          onChange={(event) => setPosition(Number(event.currentTarget.value))}
          step={1}
          type="range"
          value={position}
        />
      </div>
      <figcaption className="px-2 text-center text-xs leading-5 text-muted [text-wrap:pretty]">
        {caption}
      </figcaption>
    </figure>
  )
}
