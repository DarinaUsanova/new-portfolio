import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import avatar from '@/assets/darina-avatar-figma.png'
import alternateAvatar from '@/assets/back.png'
import { CopyEmail } from '@/components/CopyEmail'
import { siteConfig } from '@/data/site'
import { cn } from '@/lib/cn'

let hasPlayedAvatarIntro = false

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
  const [isFlipped, setIsFlipped] = useState(false)
  const [isIntroPlaying, setIsIntroPlaying] = useState(
    () => !hasPlayedAvatarIntro && !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const resetFlipTimeout = useRef<number | null>(null)

  useEffect(() => {
    if (!isIntroPlaying) return

    hasPlayedAvatarIntro = true
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const stopIntro = () => {
      if (motionPreference.matches) setIsIntroPlaying(false)
    }

    motionPreference.addEventListener('change', stopIntro)
    return () => motionPreference.removeEventListener('change', stopIntro)
  }, [isIntroPlaying])

  useEffect(
    () => () => {
      if (resetFlipTimeout.current !== null) {
        window.clearTimeout(resetFlipTimeout.current)
      }
    },
    [],
  )

  function toggleTimedFlip() {
    if (resetFlipTimeout.current !== null) {
      window.clearTimeout(resetFlipTimeout.current)
      resetFlipTimeout.current = null
    }

    if (isFlipped) {
      setIsFlipped(false)
      return
    }

    setIsFlipped(true)
    resetFlipTimeout.current = window.setTimeout(() => {
      setIsFlipped(false)
      resetFlipTimeout.current = null
    }, 5000)
  }

  return (
    <section aria-labelledby="about-heading" className="bg-canvas">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-5">
          <button
            aria-label={
              isFlipped
                ? 'Вернуть основное фото Дарины Усановой'
                : 'Показать второе фото Дарины Усановой'
            }
            className="profile-avatar-flip relative size-[76px] shrink-0"
            data-intro={isIntroPlaying}
            onClick={(event) => {
              if (event.detail === 0) toggleTimedFlip()
            }}
            onPointerUp={(event) => {
              if (event.pointerType === 'touch') toggleTimedFlip()
            }}
            type="button"
          >
            <span aria-hidden="true" className="profile-avatar-hover-label">img</span>
            <span aria-hidden="true" className="profile-avatar-size-pill">
              <span>76</span>
              <span>×</span>
              <span>76</span>
            </span>
            <span
              aria-hidden="true"
              className="profile-avatar-frame"
              onAnimationEnd={(event) => {
                if (
                  event.target === event.currentTarget &&
                  event.animationName === 'profile-avatar-frame-intro'
                ) {
                  setIsIntroPlaying(false)
                }
              }}
            >
              <span className="profile-avatar-frame__drawing">
                <span className="profile-avatar-frame__line profile-avatar-frame__line--top" />
                <span className="profile-avatar-frame__line profile-avatar-frame__line--right" />
                <span className="profile-avatar-frame__line profile-avatar-frame__line--bottom" />
                <span className="profile-avatar-frame__line profile-avatar-frame__line--left" />
                <span className="profile-avatar-frame__corner profile-avatar-frame__corner--top-left" />
                <span className="profile-avatar-frame__corner profile-avatar-frame__corner--top-right" />
                <span className="profile-avatar-frame__corner profile-avatar-frame__corner--bottom-left" />
                <span className="profile-avatar-frame__corner profile-avatar-frame__corner--bottom-right" />
              </span>
            </span>
            <span className="profile-avatar-flip__inner" data-flipped={isFlipped}>
              <span className="profile-avatar-flip__face profile-avatar-flip__face--front">
                <img
                  alt=""
                  className="absolute left-[-14.22%] top-[-10.86%] h-[185.21%] w-[138.91%] max-w-none"
                  draggable={false}
                  src={avatar}
                />
              </span>
              <span className="profile-avatar-flip__face profile-avatar-flip__face--back">
                <img alt="" className="size-full object-cover" draggable={false} src={alternateAvatar} />
              </span>
            </span>
          </button>

          <div className="flex flex-col gap-5">
            <div className="portfolio-intro-item portfolio-intro-item--name leading-5">
              <h1 className="text-base font-medium" id="about-heading">
                {siteConfig.name}
              </h1>
              <p className="text-sm text-muted">{siteConfig.role}</p>
            </div>

            <div className="flex max-w-[600px] flex-col gap-4 text-sm leading-5">
              <p className="portfolio-intro-item portfolio-intro-item--bio">{siteConfig.bio}</p>
              <p className="portfolio-intro-item portfolio-intro-item--previous">{siteConfig.previous}</p>

              <div className="portfolio-intro-item portfolio-intro-item--links flex flex-wrap items-center gap-1.5 text-muted">
                <a
                  className="portfolio-hit-area inline-flex items-center cursor-pointer transition-colors duration-150 [transition-timing-function:ease] hover:text-ink focus-visible:rounded focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  href={siteConfig.links.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <Divider />
                <a
                  className="portfolio-hit-area inline-flex items-center cursor-pointer transition-colors duration-150 [transition-timing-function:ease] hover:text-ink focus-visible:rounded focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  href={siteConfig.links.telegram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Telegram
                </a>
                <Divider />
                <a
                  className="portfolio-hit-area inline-flex items-center cursor-pointer transition-colors duration-150 [transition-timing-function:ease] hover:text-ink focus-visible:rounded focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
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

        <nav aria-label="Portfolio sections" className="portfolio-intro-item portfolio-intro-item--nav flex gap-1">
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
