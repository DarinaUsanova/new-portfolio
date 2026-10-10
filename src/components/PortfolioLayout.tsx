import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from 'motion/react'
import { useEffect, useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

import { PortfolioFooter } from '@/components/PortfolioFooter'
import { ProfileSection } from '@/sections/ProfileSection'

let hasPlayedPageIntro = false

const reducedMotionVariants: Variants = {
  enter: { opacity: 1, y: 0, transition: { duration: 0 } },
  center: { opacity: 1, y: 0, transition: { duration: 0 } },
  hidden: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0 } },
}

const initialContentVariants: Variants = {
  enter: { opacity: 1, y: 0 },
  center: {
    opacity: 1,
    y: 0,
    transition: { delayChildren: 0.78 },
  },
  hidden: {
    opacity: 0,
    filter: 'blur(2px)',
    transition: { duration: 0.14, ease: [0.4, 0, 1, 1] },
  },
}

const tabContentVariants: Variants = {
  enter: { opacity: 1 },
  center: {
    opacity: 1,
    transition: {
      // The list adds 20 ms, so the first item starts after 80 ms total.
      delayChildren: 0.06,
    },
  },
  hidden: {
    opacity: 0,
    filter: 'blur(2px)',
    transition: { duration: 0.14, ease: [0.4, 0, 1, 1] },
  },
}

export function PortfolioLayout() {
  const location = useLocation()
  const outlet = useOutlet()
  const shouldReduceMotion = useReducedMotion()
  const [playPageIntro] = useState(() => !hasPlayedPageIntro)
  const [initialPathname] = useState(location.pathname)
  const [hasChangedRoute, setHasChangedRoute] = useState(false)
  const showPageIntro = playPageIntro && !shouldReduceMotion
  const showContentIntro = showPageIntro && !hasChangedRoute && location.pathname === initialPathname
  const contentVariants = shouldReduceMotion
    ? reducedMotionVariants
    : showContentIntro
      ? initialContentVariants
      : tabContentVariants

  useEffect(() => {
    hasPlayedPageIntro = true
  }, [])

  useEffect(() => {
    if (location.pathname !== initialPathname) setHasChangedRoute(true)
  }, [initialPathname, location.pathname])

  return (
    <main
      className="mx-auto mt-10 flex w-[calc(100%-40px)] max-w-[600px] flex-col gap-10 pb-5 sm:pb-10 min-[1346px]:mt-20"
      data-page-intro={showPageIntro}
    >
      <div className="flex flex-col gap-5">
        <ProfileSection />
        <div className="grid">
          <AnimatePresence mode="wait">
            <motion.div
              animate="center"
              className="[grid-area:1/1]"
              exit="hidden"
              initial="enter"
              key={location.pathname}
              variants={contentVariants}
            >
              {outlet}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="portfolio-intro-footer">
        <PortfolioFooter />
      </div>
    </main>
  )
}
