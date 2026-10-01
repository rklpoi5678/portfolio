"use client"

import type { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/lib/i18n-context"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

function SmoothScrollHandler() {
  useSmoothScroll()
  return null
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProvider>
        <SmoothScrollHandler />
        {children}
      </I18nProvider>
    </ThemeProvider>
  )
}
