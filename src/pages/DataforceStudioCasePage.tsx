import { CaseStudyPage } from '@/components/CaseStudyPage'
import { dataforceStudioCase } from '@/data/dataforceStudioCase'

const markers = [
  {
    phrase: 'only designer',
    context: 'first and only designer on the project',
  },
  {
    phrase: 'product structure',
    context: 'I owned the product structure',
  },
  {
    phrase: 'iteration',
    context: 'workflow for iteration',
  },
  {
    phrase: 'reusable components',
    context: 'I built reusable components and interaction patterns',
  },
  {
    phrase: 'production workflows',
    context: 'used it in production workflows',
  },
] as const

export function DataforceStudioCasePage() {
  return (
    <CaseStudyPage
      caseStudy={dataforceStudioCase}
      documentTitle="DataForce Studio: One workspace for machine learning teams | Darina Usanova"
      markers={markers}
      overviewLabel="DataForce Studio overview"
    />
  )
}
