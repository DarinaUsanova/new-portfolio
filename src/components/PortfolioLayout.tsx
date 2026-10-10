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
  exit: { opacity: 1, y: 0, transition: { duration: 0 } },
}

const contentMotionVariants: Variants = {
  enter: { opacity: 1, y: 0 },
  center: { opacity: 1, y: 0, transition: { duration: 0 } },
  exit: {
    opacity: 0,
    y: 6,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
}

export function PortfolioLayout() {
  const location = useLocation()
  const outlet = useOutlet()
  const shouldReduceMotion = useReducedMotion()
  const [playPageIntro] = useState(() => !hasPlayedPageIntro)
  const showPageIntro = playPageIntro && !shouldReduceMotion
  const contentVariants = shouldReduceMotion
    ? reducedMotionVariants
    : showPageIntro
      ? {
          ...contentMotionVariants,
          center: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.78 },
          },
        }
      : contentMotionVariants

  useEffect(() => {
    hasPlayedPageIntro = true
  }, [])

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
              exit="exit"
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
