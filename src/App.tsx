import { lazy, Suspense, type ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'

import { PortfolioLayout } from '@/components/PortfolioLayout'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { SiteLayout } from '@/components/SiteLayout'
import { BuzzSelfServeActivationCasePage } from '@/pages/BuzzSelfServeActivationCasePage'
import { CampaignBuilderCasePage } from '@/pages/CampaignBuilderCasePage'
import { CustomPromptsCasePage } from '@/pages/CustomPromptsCasePage'
import { DataforceStudioCasePage } from '@/pages/DataforceStudioCasePage'
import { VoiceNotesCasePage } from '@/pages/VoiceNotesCasePage'

const HomePage = lazy(() =>
  import('@/pages/HomePage').then(({ HomePage }) => ({ default: HomePage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  })),
)
const SandboxPage = lazy(() =>
  import('@/pages/SandboxPage').then(({ SandboxPage }) => ({ default: SandboxPage })),
)
const Agentation = import.meta.env.DEV
  ? lazy(() =>
      import('agentation').then(({ Agentation }) => ({ default: Agentation })),
    )
  : () => null
function LazyRoute({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={(
        <div
          aria-live="polite"
          className="flex min-h-[240px] items-center justify-center text-sm text-muted"
          role="status"
        >
          Loading page…
        </div>
      )}
    >
      {children}
    </Suspense>
  )
}

export default function App() {
  return (
    <>
      <GoogleAnalytics />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route element={<PortfolioLayout />}>
            <Route
              index
              element={
                <LazyRoute>
                  <HomePage />
                </LazyRoute>
              }
            />
            <Route
              path="sandbox"
              element={
                <LazyRoute>
                  <SandboxPage />
                </LazyRoute>
              }
            />
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
          <Route
            path="*"
            element={
              <LazyRoute>
                <NotFoundPage />
              </LazyRoute>
            }
          />
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
