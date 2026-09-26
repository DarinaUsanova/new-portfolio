import { useEffect, type RefObject } from 'react'

type UseViewportVideoOptions = {
  replayDelay?: number
  shouldReduceMotion: boolean | null
  videoRef: RefObject<HTMLVideoElement | null>
}

export function useViewportVideo({
  replayDelay = 0,
  shouldReduceMotion,
  videoRef,
}: UseViewportVideoOptions) {
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let isDisposed = false
    let isVisible = false
    let replayTimeout: number | undefined

    const clearReplayTimeout = () => {
      if (replayTimeout === undefined) return

      window.clearTimeout(replayTimeout)
      replayTimeout = undefined
    }

    const pauseVideo = () => {
      clearReplayTimeout()
      video.pause()
    }

    const playVideo = () => {
      if (isDisposed || shouldReduceMotion || !isVisible || document.hidden) return

      void video.play().catch(() => undefined)
    }

    const handleEnded = () => {
      if (shouldReduceMotion || !isVisible || document.hidden) return

      if (replayDelay > 0) {
        clearReplayTimeout()
        replayTimeout = window.setTimeout(() => {
          replayTimeout = undefined
          if (isDisposed || !isVisible || document.hidden) return

          video.currentTime = 0
          playVideo()
        }, replayDelay)
        return
      }

      video.currentTime = 0
      playVideo()
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseVideo()
      } else {
        playVideo()
      }
    }

    if (shouldReduceMotion) {
      pauseVideo()
      video.currentTime = 0
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting

        if (isVisible) {
          playVideo()
        } else {
          pauseVideo()
        }
      },
      { rootMargin: '200px 0px', threshold: 0.01 },
    )

    observer.observe(video)
    video.addEventListener('ended', handleEnded)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      isDisposed = true
      isVisible = false
      observer.disconnect()
      video.removeEventListener('ended', handleEnded)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      pauseVideo()
    }
  }, [replayDelay, shouldReduceMotion, videoRef])
}
