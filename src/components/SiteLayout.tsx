import { Outlet } from 'react-router-dom'

export function SiteLayout() {
  return (
    <div className="min-h-dvh bg-canvas text-ink">
      <Outlet />
    </div>
  )
}
