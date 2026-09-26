import { Agentation } from 'agentation'
import { lazy, Suspense, type ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'

import { PortfolioLayout } from '@/components/PortfolioLayout'
import { SiteLayout } from '@/components/SiteLayout'

const BuzzSelfServeActivationCasePage = lazy(() =>
  import('@/pages/BuzzSelfServeActivationCasePage').then(
    ({ BuzzSelfServeActivationCasePage }) => ({
      default: BuzzSelfServeActivationCasePage,
    }),
  ),
)
const CampaignBuilderCasePage = lazy(() =>
  import('@/pages/CampaignBuilderCasePage').then(({ CampaignBuilderCasePage }) => ({
    default: CampaignBuilderCasePage,
  })),
)
const CustomPromptsCasePage = lazy(() =>
  import('@/pages/CustomPromptsCasePage').then(({ CustomPromptsCasePage }) => ({
    default: CustomPromptsCasePage,
  })),
)
const DataforceStudioCasePage = lazy(() =>
  import('@/pages/DataforceStudioCasePage').then(({ DataforceStudioCasePage }) => ({
    default: DataforceStudioCasePage,
  })),
)
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
const VoiceNotesCasePage = lazy(() =>
  import('@/pages/VoiceNotesCasePage').then(({ VoiceNotesCasePage }) => ({
    default: VoiceNotesCasePage,
  })),
)

function LazyRoute({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div aria-hidden="true" className="min-h-[240px]" />}>
      {children}
    </Suspense>
  )
}

export default function App() {
  return (
    <>
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
            element={
              <LazyRoute>
                <CampaignBuilderCasePage />
              </LazyRoute>
            }
          />
          <Route
            path="projects/buzz-self-serve-activation"
            element={
              <LazyRoute>
                <BuzzSelfServeActivationCasePage />
              </LazyRoute>
            }
          />
          <Route
            path="projects/custom-prompts-ai-comments"
            element={
              <LazyRoute>
                <CustomPromptsCasePage />
              </LazyRoute>
            }
          />
          <Route
            path="projects/dataforce-studio"
            element={
              <LazyRoute>
                <DataforceStudioCasePage />
              </LazyRoute>
            }
          />
          <Route
            path="projects/voice-notes-for-outreach"
            element={
              <LazyRoute>
                <VoiceNotesCasePage />
              </LazyRoute>
            }
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
      {import.meta.env.DEV && <Agentation />}
    </>
  )
}
