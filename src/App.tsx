import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { PortfolioLayout } from '@/components/PortfolioLayout'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { SiteLayout } from '@/components/SiteLayout'
import { BuzzSelfServeActivationCasePage } from '@/pages/BuzzSelfServeActivationCasePage'
import { CampaignBuilderCasePage } from '@/pages/CampaignBuilderCasePage'
import { CustomPromptsCasePage } from '@/pages/CustomPromptsCasePage'
import { DataforceStudioCasePage } from '@/pages/DataforceStudioCasePage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { SandboxPage } from '@/pages/SandboxPage'
import { VoiceNotesCasePage } from '@/pages/VoiceNotesCasePage'

const Agentation = import.meta.env.DEV
  ? lazy(() =>
      import('agentation').then(({ Agentation }) => ({ default: Agentation })),
    )
  : () => null

export default function App() {
  return (
    <>
      <GoogleAnalytics />
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
            path="projects/buzz-self-serve-activation"
            element={<BuzzSelfServeActivationCasePage />}
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
      {import.meta.env.DEV && (
        <Suspense fallback={null}>
          <Agentation />
        </Suspense>
      )}
    </>
  )
}
