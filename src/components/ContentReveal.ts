import type { Variants } from 'motion/react'

export const revealListVariants: Variants = {
  enter: {},
  center: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
}

export const revealItemVariants: Variants = {
  enter: { opacity: 0, y: 8 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: [0.32, 0.72, 0, 1] },
  },
}

export const reducedRevealListVariants: Variants = {
  enter: {},
  center: { transition: { staggerChildren: 0, delayChildren: 0 } },
}

export const reducedRevealItemVariants: Variants = {
  enter: { opacity: 1, y: 0 },
  center: { opacity: 1, y: 0, transition: { duration: 0 } },
}
