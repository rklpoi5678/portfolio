"use client"

import { motion } from "framer-motion"
import { ChevronDown, Github, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n-context"
import { personalInfo } from "@/lib/data/personal"

export function HeroSection() {
  const { t } = useI18n()

  const pills = [
    { ko: "4+ SaaS 제품", en: "4+ SaaS Products" },
    { ko: "풀스택", en: "Full-Stack" },
    { ko: "수익 창출 중", en: "Revenue-Generating" },
    { ko: "AI 기반 개발", en: "AI-Assisted Dev" },
  ]

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(239 84% 67% / 0.15), hsl(187 92% 56% / 0.1)), hsl(240 6% 4%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-secondary"
        >
          Full-Stack Developer &middot; 0091
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          {t(personalInfo.name)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground"
        >
          {t(personalInfo.shortBio)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {pills.map((pill, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
            >
              {t(pill)}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg">
            <a href="#projects">
              <ArrowDown className="mr-2 h-4 w-4" />
              {t({ ko: "프로젝트 보기", en: "View Projects" })}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  )
}
