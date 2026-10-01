"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useI18n } from "@/lib/i18n-context"
import { skillCategories } from "@/lib/data/skills"

export function SkillsSection() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="font-mono text-sm text-secondary">03 / CAPABILITIES</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          {t({ ko: "역량", en: "Capabilities" })}
        </h2>

        <div ref={ref} className="mt-12 grid gap-10 md:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: catIndex * 0.15, ease: "easeOut" }}
            >
              <h3 className="text-lg font-semibold">{t(category.label)}</h3>
              <div className="mt-4 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.level}/5
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${(skill.level / 5) * 100}%` }
                            : { width: 0 }
                        }
                        transition={{
                          duration: 0.8,
                          delay: catIndex * 0.15 + skillIndex * 0.08,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
