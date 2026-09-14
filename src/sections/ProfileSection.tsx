import { NavLink } from 'react-router-dom'

import avatar from '@/assets/darina-avatar.jpg'
import { CopyEmail } from '@/components/CopyEmail'
import { siteConfig } from '@/data/site'
import { cn } from '@/lib/cn'

function Divider() {
  return <span aria-hidden="true" className="size-0.5 rounded-full bg-muted" />
}

function tabClassName(isActive: boolean) {
  return cn(
    'rounded-full border px-3 py-2 text-sm leading-5 transition-colors duration-150 [transition-timing-function:ease]',
    isActive
      ? 'border-transparent bg-surface text-ink'
      : 'border-surface bg-canvas text-muted hover:text-ink',
  )
}

export function ProfileSection() {
  return (
    <section aria-labelledby="about-heading" className="bg-canvas">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <img
            alt="Darina Usanova"
            className="size-16 rounded-full object-cover"
            height="64"
            src={avatar}
            width="64"
          />

          <div className="flex flex-col gap-5">
            <div className="leading-5">
              <h1 className="text-base font-medium" id="about-heading">
                {siteConfig.name}
              </h1>
              <p className="text-sm text-muted">{siteConfig.role}</p>
            </div>

            <div className="flex max-w-[600px] flex-col gap-4 text-sm leading-5">
              <p>{siteConfig.bio}</p>
              <p>{siteConfig.previous}</p>

              <div className="flex flex-wrap items-center gap-1.5 text-muted">
                <a
                  className="cursor-pointer transition-colors duration-150 [transition-timing-function:ease] hover:text-ink focus-visible:rounded focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  href={siteConfig.links.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <Divider />
                <a
                  className="cursor-pointer transition-colors duration-150 [transition-timing-function:ease] hover:text-ink focus-visible:rounded focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  href={siteConfig.links.telegram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Telegram
                </a>
                <Divider />
                <a
                  className="cursor-pointer transition-colors duration-150 [transition-timing-function:ease] hover:text-ink focus-visible:rounded focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  href={siteConfig.links.resume}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Resume
                </a>
                <Divider />
                <CopyEmail />
              </div>
            </div>
          </div>
        </div>

        <nav aria-label="Portfolio sections" className="flex gap-1">
          <NavLink
            className={({ isActive }) => tabClassName(isActive)}
            end
            to="/"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) => tabClassName(isActive)}
            to="/sandbox"
          >
            Playground
          </NavLink>
        </nav>
      </div>
    </section>
  )
}
