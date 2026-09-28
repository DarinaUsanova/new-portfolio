import { type ReactNode } from 'react'

import {
  CaseStudyBlock,
  hasCaseStudyContent,
  type CaseStudyBlockContent,
} from '@/components/CaseStudyBlock'

type CaseStudySection = CaseStudyBlockContent & {
  subsections?: readonly CaseStudyBlockContent[]
}

export function CaseStudySections({
  sections,
  getSectionId,
  renderText,
}: {
  sections: readonly CaseStudySection[]
  getSectionId: (title: string) => string
  renderText?: (text: string) => ReactNode
}) {
  return (
    <div className="mt-10 flex flex-col gap-10">
      {sections.map((section) => (
        <section
          aria-label={section.title}
          className="flex scroll-mt-20 flex-col gap-10"
          id={getSectionId(section.title)}
          key={section.title}
        >
          {/* Keep stage anchors and accessible names even when a group has no own content. */}
          {[section, ...(section.subsections ?? [])]
            .filter(hasCaseStudyContent)
            .map((block) => {
              const content = (
                <CaseStudyBlock
                  block={block}
                  key={block.title}
                  renderText={renderText}
                />
              )

              if (block === section) return content

              return (
                <div
                  className="scroll-mt-20"
                  id={getSectionId(block.title)}
                  key={block.title}
                >
                  {content}
                </div>
              )
            })}
        </section>
      ))}
    </div>
  )
}
