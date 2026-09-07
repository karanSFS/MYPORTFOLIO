import { motion, useReducedMotion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return null

  return (
    <motion.div
      aria-hidden="true"
      className="bg-primary pointer-events-none fixed top-0 right-0 left-0 z-[60] h-px origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
