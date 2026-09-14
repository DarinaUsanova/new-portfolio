import { Agentation } from 'agentation'
import { Route, Routes } from 'react-router-dom'

import { PortfolioLayout } from '@/components/PortfolioLayout'
import { SiteLayout } from '@/components/SiteLayout'
import { CampaignBuilderCasePage } from '@/pages/CampaignBuilderCasePage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { SandboxPage } from '@/pages/SandboxPage'

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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {import.meta.env.DEV && <Agentation />}
    </>
  )
}
