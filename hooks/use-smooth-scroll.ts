"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a[href^='#']")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href) return

      const element = document.querySelector(href)
      if (!element) return

      e.preventDefault()
      element.scrollIntoView({ behavior: "smooth" })
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])
}
