"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useParams, notFound } from "next/navigation"
import { useI18n } from "@/lib/i18n-context"
import { projects } from "@/lib/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useI18n()
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t({ ko: "프로젝트로 돌아가기", en: "Back to Projects" })}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            {project.metrics?.map((m, i) => (
              <Badge key={i} variant="secondary" className="text-xs">{m.value}</Badge>
            ))}
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {t(project.title)}
          </h1>

          <p className="mt-3 text-lg text-muted-foreground">
            {t(project.subtitle)}
          </p>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            {t(project.description)}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs font-mono">
                {tech}
              </Badge>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {project.links.map((link, i) => (
                <Button key={i} asChild variant={i === 0 ? "default" : "outline"}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label === "GitHub" ? (
                      <Github className="mr-2 h-4 w-4" />
                    ) : (
                      <ExternalLink className="mr-2 h-4 w-4" />
                    )}
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
