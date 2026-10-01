"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ParallaxWrapperProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function ParallaxWrapper({
  children,
  className,
  speed = 0.5,
}: ParallaxWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !innerRef.current || typeof window === "undefined") return

    const container = containerRef.current
    const inner = innerRef.current

    const distance = speed * 100

    const tween = gsap.fromTo(
      inner,
      { y: -distance },
      {
        y: distance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [speed])

  return (
    <div ref={containerRef} className={className} style={{ overflow: "hidden" }}>
      <div ref={innerRef}>{children}</div>
    </div>
  )
}
