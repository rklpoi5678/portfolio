"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { projects } from "@/lib/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProjectsSection() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="font-mono text-sm text-secondary">02 / PROJECTS</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          {t({ ko: "프로젝트", en: "Projects" })}
        </h2>

        <div ref={ref} className="mt-12 space-y-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">{t(project.title)}</h3>
                        {project.metrics?.map((m, j) => (
                          <Badge key={j} variant="secondary" className="text-xs">
                            {m.value}
                          </Badge>
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {t(project.subtitle)}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {t(project.description)}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs font-mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-xs font-mono">{project.year}</span>
                      <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {others.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: featured.length * 0.15 + i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {project.links.length > 0 ? (
                    <Link href={`/projects/${project.slug}`}>
                      <div className="group h-full rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
                        <h3 className="font-semibold">{t(project.title)}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {t(project.subtitle)}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs font-mono">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                          <span className="font-mono">{project.year}</span>
                          <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="h-full rounded-xl border border-border bg-card p-5">
                      <h3 className="font-semibold">{t(project.title)}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {t(project.subtitle)}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs font-mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-muted-foreground font-mono">
                        {project.year}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
