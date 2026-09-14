import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 lg:px-10">
      <p className="text-sm font-medium text-ink">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        Page not found
      </h1>
      <Link
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-150 [transition-timing-function:ease] hover:opacity-60 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        to="/"
      >
        <ArrowLeft aria-hidden="true" size={16} />
        Back to portfolio
      </Link>
    </section>
  )
}
