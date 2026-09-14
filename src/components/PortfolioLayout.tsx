import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from 'motion/react'
import { useLocation, useOutlet } from 'react-router-dom'

import { PortfolioFooter } from '@/components/PortfolioFooter'
import { ProfileSection } from '@/sections/ProfileSection'

const reducedMotionVariants: Variants = {
  hidden: { opacity: 1, transition: { duration: 0 } },
  visible: { opacity: 1, transition: { duration: 0 } },
}

const contentMotionVariants: Variants = {
  hidden: {
    filter: 'blur(2px)',
    opacity: 0,
    transition: { duration: 0.14, ease: [0.4, 0, 1, 1] },
  },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 0.18, ease: [0.23, 1, 0.32, 1] },
  },
}

export function PortfolioLayout() {
  const location = useLocation()
  const outlet = useOutlet()
  const shouldReduceMotion = useReducedMotion()
  const contentVariants = shouldReduceMotion
    ? reducedMotionVariants
    : contentMotionVariants

  return (
    <main className="mx-auto mt-10 flex w-[calc(100%-40px)] max-w-[600px] flex-col gap-10 pb-5 sm:pb-10 min-[1346px]:mt-20">
      <div className="flex flex-col gap-5">
        <ProfileSection />
        <div className="grid">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              animate="visible"
              className="[grid-area:1/1]"
              exit="hidden"
              initial="hidden"
              key={location.pathname}
              variants={contentVariants}
            >
              {outlet}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <PortfolioFooter />
    </main>
  )
}
