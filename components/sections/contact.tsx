"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Github, ArrowUpRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { personalInfo } from "@/lib/data/personal"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24">
      <div
        className="container mx-auto px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(180deg, transparent, hsl(239 84% 67% / 0.05), transparent)",
        }}
      >
        <div ref={ref} className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-12 md:grid-cols-2"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {t({ ko: "함께 만들어요", en: "Let's Build Something" })}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t({
                  ko: "새로운 프로젝트, 협업, 또는 커피챗 — 언제든 연락주세요.",
                  en: "New projects, collaborations, or coffee chats — feel free to reach out anytime.",
                })}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="truncate font-medium">{personalInfo.email}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium">rklpoi5678</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
