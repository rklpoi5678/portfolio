"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useI18n } from "@/lib/i18n-context"
import { experiences } from "@/lib/data/experience"

export function ExperienceSection() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="font-mono text-sm text-secondary">04 / JOURNEY</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          {t({ ko: "경력", en: "Journey" })}
        </h2>

        <div ref={ref} className="relative mt-12">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                className="relative pl-12 md:grid md:grid-cols-2 md:gap-8 md:pl-0"
              >
                <div
                  className={`hidden md:flex items-center ${
                    i % 2 === 0 ? "justify-end pr-8 text-right" : "order-2 pl-8"
                  }`}
                >
                  <div>
                    <span className="font-mono text-sm text-secondary">{exp.period}</span>
                  </div>
                </div>

                <div
                  className={`hidden md:block absolute left-1/2 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background`}
                />

                <div
                  className={`${
                    i % 2 === 0 ? "md:pl-8" : "md:order-1 md:pr-8 md:text-right"
                  }`}
                >
                  <span className="font-mono text-sm text-secondary md:hidden">{exp.period}</span>
                  <h3 className="text-lg font-semibold">{t(exp.title)}</h3>
                  <p className="text-sm text-muted-foreground">{t(exp.company)}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {t(exp.description)}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className={`text-sm text-muted-foreground ${
                          i % 2 === 1 ? "md:ml-auto" : ""
                        }`}
                      >
                        <span className={`inline-flex items-center gap-2 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                          <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                          {t(h)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
