"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/lib/portfolio-data"

interface ProjectCardProps {
  project: Project
  onViewDetails: (project: Project) => void
  index: number
}

export function ProjectCard({ project, onViewDetails, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <div className="relative overflow-hidden">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-slate-800">
              {project.category}
            </Badge>
          </div>
          {project.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-emerald-600 text-white">Featured</Badge>
            </div>
          )}
        </div>

        <CardHeader className="pb-3">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-600 text-sm">{project.subtitle}</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-slate-600 text-sm line-clamp-3">{project.overview.purpose}</p>

          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>

          <div className="pt-2">
            <Button
              variant="ghost"
              className="w-full justify-between group-hover:bg-emerald-50 group-hover:text-emerald-700"
              onClick={() => onViewDetails(project)}
            >
              View Details
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
