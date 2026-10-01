"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { personalInfo } from "@/lib/data/personal"

const keyPoints = [
  { ko: "B2B SaaS 제품 기획부터 배포까지 전 과정 주도", en: "Leading the full product lifecycle from planning to deployment" },
  { ko: "Next.js, NestJS, Cloudflare 생태계 전문", en: "Specializing in Next.js, NestJS, and Cloudflare ecosystem" },
  { ko: "Sentry + Grafana Cloud 프로덕션 모니터링 경험", en: "Production monitoring with Sentry + Grafana Cloud" },
]

export function AboutSection() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="font-mono text-sm text-secondary">01 / ABOUT</p>

        <div ref={ref} className="mt-12 grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {t({ ko: "의미 있는 제품을 만듭니다", en: "Building products that matter" })}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t(personalInfo.bio)}
            </p>
            <ul className="mt-6 space-y-3">
              {keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{t(point)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="rounded-xl border border-border bg-card p-6 font-mono text-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground">terminal</span>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="text-green-400">$</span> whoami
                </p>
                <p className="text-foreground">full-stack developer @0091</p>
                <p className="mt-2">
                  <span className="text-green-400">$</span> cat stack.json
                </p>
                <p className="text-foreground">
                  {"{ "}
                  <span className="text-secondary">&quot;frontend&quot;</span>
                  {": "}
                  <span className="text-yellow-400">&quot;Next.js, React, TypeScript&quot;</span>,
                </p>
                <p className="pl-2 text-foreground">
                  <span className="text-secondary">&quot;backend&quot;</span>
                  {": "}
                  <span className="text-yellow-400">&quot;NestJS, Express, Node.js&quot;</span>,
                </p>
                <p className="pl-2 text-foreground">
                  <span className="text-secondary">&quot;infra&quot;</span>
                  {": "}
                  <span className="text-yellow-400">&quot;Cloudflare, Vercel, Grafana&quot;</span>
                  {" }"}
                </p>
                <p className="mt-2">
                  <span className="text-green-400">$</span> echo $STATUS
                </p>
                <p className="text-foreground">Building SaaS products</p>
                <p className="mt-1">
                  <span className="text-green-400">$</span>{" "}
                  <span className="animate-pulse">_</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
