"use client"

import { useState, useEffect } from "react"
import { useI18n } from "@/lib/i18n-context"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu, Moon, Sun, Languages } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navLinks = [
  { href: "#about", label: { ko: "소개", en: "About" } },
  { href: "#projects", label: { ko: "프로젝트", en: "Projects" } },
  { href: "#skills", label: { ko: "역량", en: "Skills" } },
  { href: "#experience", label: { ko: "경력", en: "Journey" } },
  { href: "#contact", label: { ko: "연락", en: "Contact" } },
]

export function Navigation() {
  const { lang, toggleLang, t } = useI18n()
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link
          href="#"
          className="font-mono text-sm font-medium tracking-wider text-foreground hover:text-primary transition-colors"
        >
          Kim Yoon-gi
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(link.label)}
            </a>
          ))}

          <div className="ml-2 flex items-center gap-1 border-l border-border pl-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLang}
              className="h-8 w-8"
              aria-label="Toggle language"
            >
              <Languages className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLang}
            className="h-8 w-8"
            aria-label="Toggle language"
          >
            <span className="text-xs font-mono">{lang === "ko" ? "EN" : "KO"}</span>
          </Button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="font-mono text-sm">
                Kim Yoon-gi
              </SheetTitle>
              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    {t(link.label)}
                  </a>
                ))}
                <div className="mt-4 border-t border-border pt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      toggleTheme()
                      setMobileOpen(false)
                    }}
                    className="w-full justify-start gap-2"
                  >
                    <Sun className="h-4 w-4 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                    <Moon className="h-4 w-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                    <span className="text-sm">
                      {theme === "dark"
                        ? t({ ko: "라이트 모드", en: "Light Mode" })
                        : t({ ko: "다크 모드", en: "Dark Mode" })}
                    </span>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
