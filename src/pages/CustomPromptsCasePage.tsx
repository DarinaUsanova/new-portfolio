import { CaseStudyPage } from '@/components/CaseStudyPage'
import { customPromptsCase } from '@/data/customPromptsCase'

const markers = [
  {
    phrase: 'problem framing',
    context: 'problem framing through implementation',
  },
  {
    phrase: 'freeform instructions',
    context: 'needed freeform instructions',
  },
  {
    phrase: 'prompt library',
    context: 'I designed a shared prompt library',
  },
  {
    phrase: 'deletion consequences',
    context: 'made deletion consequences clear',
  },
  {
    phrase: 'fewer complaints',
    context: 'team reported fewer complaints',
  },
] as const

export function CustomPromptsCasePage() {
  return (
    <CaseStudyPage
      caseStudy={customPromptsCase}
      documentTitle="Custom Prompts: From Preset Tones to a Reusable AI Writing System — Darina Usanova"
      markers={markers}
      overviewLabel="Custom Prompts overview"
    />
  )
}
