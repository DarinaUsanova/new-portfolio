import { Agentation } from 'agentation'
import { Route, Routes } from 'react-router-dom'

import { PortfolioLayout } from '@/components/PortfolioLayout'
import { SiteLayout } from '@/components/SiteLayout'
import { CampaignBuilderCasePage } from '@/pages/CampaignBuilderCasePage'
import { CustomPromptsCasePage } from '@/pages/CustomPromptsCasePage'
import { DataforceStudioCasePage } from '@/pages/DataforceStudioCasePage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { SandboxPage } from '@/pages/SandboxPage'
import { VoiceNotesCasePage } from '@/pages/VoiceNotesCasePage'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route element={<PortfolioLayout />}>
            <Route index element={<HomePage />} />
            <Route path="sandbox" element={<SandboxPage />} />
          </Route>
          <Route
            path="projects/campaign-builder-discovery"
            element={<CampaignBuilderCasePage />}
          />
          <Route
            path="projects/custom-prompts-ai-comments"
            element={<CustomPromptsCasePage />}
          />
          <Route
            path="projects/dataforce-studio"
            element={<DataforceStudioCasePage />}
          />
          <Route
            path="projects/voice-notes-for-outreach"
            element={<VoiceNotesCasePage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {import.meta.env.DEV && <Agentation />}
    </>
  )
}
