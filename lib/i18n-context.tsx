"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Lang = "ko" | "en"

type BilingualText = { ko: string; en: string }

interface I18nContextType {
  lang: Lang
  toggleLang: () => void
  t: (text: BilingualText | string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko")

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "ko" ? "en" : "ko"))
  }, [])

  const t = useCallback(
    (text: BilingualText | string): string => {
      if (typeof text === "string") return text
      return text[lang]
    },
    [lang]
  )

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
