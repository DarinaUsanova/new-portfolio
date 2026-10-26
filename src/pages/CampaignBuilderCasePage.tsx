import { CaseStudyPage } from '@/components/CaseStudyPage'
import { campaignBuilderCase } from '@/data/campaignBuilderCase'

const markers = [
  {
    phrase: 'eight problem clusters',
    context: 'I mapped roughly 15–20 Canny suggestions from customers and the internal team into eight problem clusters',
  },
  {
    phrase: 'impact–effort matrix',
    context: 'I put the hypotheses on an impact–effort matrix',
  },
  {
    phrase: 'one builder',
    context: 'I proposed one builder where people could start',
  },
  {
    phrase: 'one rename action',
    context: 'I kept one rename action beside the title',
  },
  {
    phrase: 'Development paused',
    context: 'Development paused while the company focused its resources elsewhere',
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
