import { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { CaseStudyFigure, type CaseStudyFigureProps } from '@/components/CaseStudyFigure'
import { PortfolioFooter } from '@/components/PortfolioFooter'
import { dataforceStudioCase } from '@/data/dataforceStudioCase'

const markerPhrases = [
  'I led product design for DataForce Studio',
  'first and only designer on the project',
  'flexible workflow',
  'reusable components and interaction patterns',
  'ready for its first users',
  'used it in production workflows',
] as const

const markerPhraseSet = new Set<string>(markerPhrases)
const markerPattern = new RegExp(`(${markerPhrases.join('|')})`, 'g')
const markerGradientVariants = ['left-heavy', 'right-heavy', 'both-heavy'] as const

function getMarkerVariant(phrase: string) {
  let hash = 0

  for (const character of phrase) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0
  }

  const gradientVariant = markerGradientVariants[hash % markerGradientVariants.length]
  const spacingVariant = Math.floor(hash / markerGradientVariants.length) % 2 === 0
    ? 'case-marker--closed'
    : 'case-marker--open'

  return `case-marker--${gradientVariant} ${spacingVariant}`
}

function renderMarkedText(text: string) {
  return text.split(markerPattern).map((part, index) =>
    markerPhraseSet.has(part) ? (
      <mark
        className={`case-marker ${getMarkerVariant(part)}`}
        data-marker="true"
        key={`${part}-${index}`}
      >
        {part}
      </mark>
    ) : (
      part
    ),
  )
}

function getSectionId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function CaseStudyFigures({
  figures,
}: {
  figures: readonly CaseStudyFigureProps[]
}) {
  if (figures.length === 0) return null

  return (
    <div className="mt-5 flex flex-col gap-5">
      {figures.map((figure) => (
        <CaseStudyFigure key={figure.caption} {...figure} />
      ))}
    </div>
  )
}

function CaseStudyAside() {
  const navigationItems = dataforceStudioCase.sections
  const [activeSection, setActiveSection] = useState(
    getSectionId(navigationItems[0].title),
  )

  useEffect(() => {
    let frameId = 0

    const updateActiveSection = () => {
      frameId = 0
      const focusLine = window.innerHeight * 0.3
      let currentSection = getSectionId(navigationItems[0].title)

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        setActiveSection(
          getSectionId(navigationItems[navigationItems.length - 1].title),
        )
        return
      }

      for (const item of navigationItems) {
        const sectionId = getSectionId(item.title)
        const section = document.getElementById(sectionId)

        if (section && section.getBoundingClientRect().top <= focusLine) {
          currentSection = sectionId
        } else {
          break
        }
      }

      setActiveSection(currentSection)
    }

    const requestUpdate = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [navigationItems])

  return (
    <aside className="hidden min-[1346px]:sticky min-[1346px]:top-20 min-[1346px]:mx-auto min-[1346px]:mb-0 min-[1346px]:mt-20 min-[1346px]:block min-[1346px]:w-[220px] min-[1346px]:self-start">
      <Link
        className="group inline-flex items-center gap-2 text-sm leading-5 text-muted transition-colors duration-150 [transition-timing-function:ease] hover:text-ink focus-visible:rounded-sm focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        to="/"
      >
        <svg
          aria-hidden="true"
          className="size-3.5 shrink-0"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            d="M4.83752 12.0791C5.06533 12.307 5.43459 12.307 5.66239 12.0791C5.89015 11.8513 5.89018 11.4821 5.66239 11.2543L3.74149 9.33338H8.45829L8.64457 9.32882C9.07883 9.30742 9.50666 9.2113 9.90922 9.04456C10.3692 8.85401 10.7876 8.57518 11.1397 8.22311C11.4918 7.87103 11.7706 7.45264 11.9611 6.99264C12.1517 6.53263 12.25 6.03962 12.25 5.54171C12.25 5.0438 12.1517 4.55079 11.9611 4.09078C11.7705 3.63076 11.4918 3.2124 11.1397 2.86031C10.7876 2.50823 10.3692 2.22941 9.90922 2.03886C9.44921 1.84832 8.9562 1.75005 8.45829 1.75004H6.41662C6.09447 1.75004 5.83331 2.01123 5.83329 2.33338C5.83329 2.65554 6.09446 2.91671 6.41662 2.91671H8.45829C8.80294 2.91672 9.14418 2.98479 9.4626 3.11666C9.78107 3.24858 10.0705 3.44201 10.3142 3.68575C10.558 3.9295 10.7514 4.21893 10.8833 4.5374C11.0152 4.85582 11.0833 5.19706 11.0833 5.54171C11.0833 5.88636 11.0152 6.2276 10.8833 6.54602C10.7517 6.86448 10.558 7.15392 10.3142 7.39767C10.0705 7.64141 9.78106 7.83484 9.4626 7.96676C9.18389 8.08218 8.88768 8.14848 8.58703 8.16329L8.45829 8.16671H3.74149L5.66239 6.24581C5.89015 6.018 5.89018 5.64873 5.66239 5.42094C5.4346 5.19315 5.06533 5.19318 4.83752 5.42094L1.92085 8.33761C1.69305 8.56541 1.69305 8.93467 1.92085 9.16248L4.83752 12.0791Z"
            fill="currentColor"
          />
        </svg>
        <span>Index</span>
      </Link>

      <nav
        aria-label="Case study sections"
        className="mt-5 hidden flex-col items-start gap-2 text-sm leading-5 min-[1346px]:flex"
      >
        {navigationItems.map((item) => {
          const sectionId = getSectionId(item.title)
          const isActive = activeSection === sectionId

          return (
            <a
              aria-current={isActive ? 'location' : undefined}
              className={`transition-colors duration-150 [transition-timing-function:ease] hover:text-ink focus-visible:rounded-sm focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink ${
                isActive ? 'text-ink' : 'text-muted'
              }`}
              href={`#${sectionId}`}
              key={item.title}
              onClick={() => setActiveSection(sectionId)}
            >
              {item.title}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}

export function DataforceStudioCasePage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const previousTitle = document.title
    document.title =
      'DataForce Studio: One workspace for machine learning teams | Darina Usanova'

    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="grid grid-cols-1 min-[1346px]:grid-cols-[minmax(0,1fr)_minmax(0,800px)_minmax(0,1fr)]">
      <CaseStudyAside />

      <main className="mx-auto w-[calc(100%-40px)] max-w-[800px] pb-10 pt-10 sm:pb-10 min-[1346px]:mt-20 min-[1346px]:w-full min-[1346px]:pt-0">
        <article aria-labelledby="case-study-title">
          <header className="mx-auto flex max-w-[600px] flex-col gap-5 text-sm leading-5">
            <div className="min-[1346px]:hidden">
              <Link
                className="group inline-flex items-center gap-2 text-sm leading-5 text-muted transition-colors duration-150 [transition-timing-function:ease] hover:text-ink focus-visible:rounded-sm focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                to="/"
              >
                <svg
                  aria-hidden="true"
                  className="size-3.5 shrink-0"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    d="M4.83752 12.0791C5.06533 12.307 5.43459 12.307 5.66239 12.0791C5.89015 11.8513 5.89018 11.4821 5.66239 11.2543L3.74149 9.33338H8.45829L8.64457 9.32882C9.07883 9.30742 9.50666 9.2113 9.90922 9.04456C10.3692 8.85401 10.7876 8.57518 11.1397 8.22311C11.4918 7.87103 11.7705 7.45264 11.9611 6.99264C12.1517 6.53263 12.25 6.03962 12.25 5.54171C12.25 5.0438 12.1517 4.55079 11.9611 4.09078C11.7705 3.63076 11.4918 3.2124 11.1397 2.86031C10.7876 2.50823 10.3692 2.22941 9.90922 2.03886C9.44921 1.84832 8.9562 1.75005 8.45829 1.75004H6.41662C6.09447 1.75004 5.83331 2.01123 5.83329 2.33338C5.83329 2.65554 6.09446 2.91671 6.41662 2.91671H8.45829C8.80294 2.91672 9.14418 2.98479 9.4626 3.11666C9.78107 3.24858 10.0705 3.44201 10.3142 3.68575C10.558 3.9295 10.7514 4.21893 10.8833 4.5374C11.0152 4.85582 11.0833 5.19706 11.0833 5.54171C11.0833 5.88636 11.0152 6.2276 10.8833 7.39767C10.0705 7.64141 9.78106 7.83484 9.4626 7.96676C9.18389 8.08218 8.88768 8.14848 8.58703 8.16329L8.45829 8.16671H3.74149L5.66239 6.24581C5.89015 6.018 5.89018 5.64873 5.66239 5.42094C5.4346 5.19315 5.06533 5.19318 4.83752 5.42094L1.92085 8.33761C1.69305 8.56541 1.69305 8.93467 1.92085 9.16248L4.83752 12.0791Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Index</span>
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-base font-medium" id="case-study-title">
                {dataforceStudioCase.title}
              </h1>
              <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-1 text-muted">
                {dataforceStudioCase.metadata.map((item) => {
                  const separatorIndex = item.indexOf(':')

                  return (
                    <Fragment key={item}>
                      <span>{item.slice(0, separatorIndex + 1)}</span>
                      <span className="text-ink">
                        {renderMarkedText(item.slice(separatorIndex + 1))}
                      </span>
                    </Fragment>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {dataforceStudioCase.introduction.map((paragraph) => (
                <p key={paragraph}>{renderMarkedText(paragraph)}</p>
              ))}
            </div>
          </header>

          <section aria-label="DataForce Studio overview" className="mt-10">
            <CaseStudyFigure {...dataforceStudioCase.heroFigure} />
          </section>

          {dataforceStudioCase.sections.map((section) => (
            <section
              className="mt-10 scroll-mt-20"
              id={getSectionId(section.title)}
              key={section.title}
            >
              {section.showHeading !== false || section.paragraphs.length > 0 ? (
                <div className="mx-auto max-w-[600px] text-sm leading-5">
                  {section.showHeading !== false && (
                    <h2 className="text-base font-medium">{section.title}</h2>
                  )}
                  {section.paragraphs.length > 0 && (
                    <div className="mt-2 flex flex-col gap-2">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{renderMarkedText(paragraph)}</p>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}

              <CaseStudyFigures figures={section.figures} />
            </section>
          ))}
        </article>

        <div className="mx-auto mt-10 w-full max-w-[600px]">
          <PortfolioFooter />
        </div>
      </main>
    </div>
  )
}
