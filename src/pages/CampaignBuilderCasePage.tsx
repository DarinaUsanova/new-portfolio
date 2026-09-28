import { CaseStudyPage } from '@/components/CaseStudyPage'
import { campaignBuilderCase } from '@/data/campaignBuilderCase'

const markers = [
  {
    phrase: 'interviewed customers',
    context: 'I interviewed customers, reviewed feedback',
  },
  {
    phrase: 'MVP priorities',
    context: 'turned the findings into questions and MVP priorities',
  },
  {
    phrase: 'vertical workflow',
    context: 'I proposed a single builder with a vertical workflow',
  },
  {
    phrase: 'recover',
    context: 'warnings and ways to recover work',
  },
  {
    phrase: 'launch checks',
    context: 'step editing, and launch checks',
  },
] as const

export function CampaignBuilderCasePage() {
  return (
    <CaseStudyPage
      caseStudy={campaignBuilderCase}
      documentTitle="Campaign builder: one workflow for sequential and branching campaigns | Darina Usanova"
      markers={markers}
      overviewLabel="Campaign overview"
    />
  )
}
