"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGsap() {
  const ref = useRef<HTMLDivElement>(null)
  const ctxRef = useRef<gsap.Context | undefined>(undefined)

  useEffect(() => {
    ctxRef.current = gsap.context(() => {}, ref)

    return () => {
      ctxRef.current?.revert()
    }
  }, [])

  return { ref, ctx: ctxRef, gsap, ScrollTrigger }
}
