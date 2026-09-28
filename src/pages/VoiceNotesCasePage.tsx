import { CaseStudyPage } from '@/components/CaseStudyPage'
import { voiceNotesCase } from '@/data/voiceNotesCase'

const markers = [
  {
    phrase: 'customer interviews',
    context: 'from customer interviews through launch',
  },
  {
    phrase: 'prototype feedback',
    context: 'In prototype feedback',
  },
  {
    phrase: 'separate step',
    context: 'Send Voice Note a separate step',
  },
  {
    phrase: 'same library',
    context: 'Campaigns and the Inbox used the same library',
  },
  {
    phrase: 'estimated 43%',
    context: 'an estimated 43%',
  },
] as const

export function VoiceNotesCasePage() {
  return (
    <CaseStudyPage
      caseStudy={voiceNotesCase}
      documentTitle="Voice Notes: Bringing Voice to Conversations and Campaigns — Darina Usanova"
      markers={markers}
      overviewLabel="Voice Notes overview"
    />
  )
}
