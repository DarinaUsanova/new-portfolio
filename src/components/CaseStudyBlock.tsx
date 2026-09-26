import { type ReactNode } from 'react'

import { CaseStudyCarouselPlaceholder } from '@/components/CaseStudyCarouselPlaceholder'
import { CaseStudyFigure, type CaseStudyFigureProps } from '@/components/CaseStudyFigure'
import { CaseStudyPlaceholder, type CaseStudyPlaceholderProps } from '@/components/CaseStudyPlaceholder'

type CaseStudyJourney = {
  audience: string
  before: string
  after: string
}

export type CaseStudyBlockContent = {
  title: string
  paragraphs?: readonly string[]
  figures?: readonly (CaseStudyFigureProps | CaseStudyPlaceholderProps)[]
  carousel?: readonly CaseStudyPlaceholderProps[]
  journeys?: readonly CaseStudyJourney[]
  showHeading?: boolean
}

export function hasCaseStudyContent(block: CaseStudyBlockContent) {
  return Boolean(
    block.paragraphs?.length ||
    block.figures?.length ||
    block.carousel?.length ||
    block.journeys?.length,
  )
}

export function CaseStudyBlock({
  block,
  renderText = (text) => text,
}: {
  block: CaseStudyBlockContent
  renderText?: (text: string) => ReactNode
}) {
  const { title, paragraphs = [], figures = [], carousel = [], journeys = [] } = block
  // Keep an existing media-only gallery untitled, but always title narrative blocks.
  const showHeading = block.showHeading !== false || paragraphs.length > 0
  const hasMedia = figures.length > 0 || carousel.length > 0

  return (
    <div className="case-study-block flex flex-col gap-5">
      {showHeading || paragraphs.length > 0 || journeys.length > 0 ? (
        <div className="mx-auto flex w-full max-w-[600px] flex-col gap-2 text-sm leading-5">
          {showHeading ? (
            <h2 className="case-study-heading text-base font-medium leading-6 text-ink">
              {title}
            </h2>
          ) : null}
          {paragraphs.length > 0 ? (
            <div className="flex flex-col gap-2">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{renderText(paragraph)}</p>
              ))}
            </div>
          ) : null}
          {journeys.length > 0 ? (
            <table className="mt-3 w-full table-fixed text-left text-sm leading-5">
              <caption className="sr-only">
                How Free Signup and Buy Now changed the customer journey
              </caption>
              <thead className="border-b border-ink/10">
                <tr>
                  <th className="w-[24%] pb-3 pr-3 font-medium" scope="col">
                    Entry point
                  </th>
                  <th className="w-[38%] px-2 pb-3 font-medium" scope="col">
                    Before
                  </th>
                  <th className="w-[38%] pb-3 pl-2 font-medium" scope="col">
                    Self-serve path
                  </th>
                </tr>
              </thead>
              <tbody>
                {journeys.map((journey) => (
                  <tr className="border-b border-ink/10 align-top last:border-0" key={journey.audience}>
                    <th className="py-3 pr-3 font-medium" scope="row">
                      {journey.audience}
                    </th>
                    <td className="px-2 py-3">{journey.before}</td>
                    <td className="py-3 pl-2">{journey.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      ) : null}
      {hasMedia ? (
        <div className="flex flex-col gap-5">
          {figures.map((figure) => (
            'src' in figure ? (
              <CaseStudyFigure key={figure.caption} {...figure} />
            ) : (
              <CaseStudyPlaceholder key={figure.caption} {...figure} />
            )
          ))}
          {carousel.length > 0 ? (
            <CaseStudyCarouselPlaceholder slides={carousel} />
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
