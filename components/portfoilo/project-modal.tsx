"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { X, Lightbulb, Users, BarChart3 } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/types/portfoilo-data"

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <DialogTitle className="text-2xl font-bold text-slate-800">{project.title}</DialogTitle>
                  <p className="text-slate-600">{project.subtitle}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </DialogHeader>

            <div className="space-y-8">
              {/* Project Image */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Overview */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-slate-800">Project Overview</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">Purpose</h4>
                    <p className="text-slate-600 text-sm">{project.overview.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">Context</h4>
                    <p className="text-slate-600 text-sm">{project.overview.context}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">Environment</h4>
                    <p className="text-slate-600 text-sm">{project.overview.environment}</p>
                  </div>
                </div>
              </motion.div>

              <Separator />

              {/* Role and Process */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-slate-800">My Role and Process</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                    <div>
                      <strong>Position:</strong> {project.role.position}
                    </div>
                    <div>
                      <strong>Duration:</strong> {project.role.duration}
                    </div>
                    <div>
                      <strong>Team:</strong> {project.role.team}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-3">Key Responsibilities</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.role.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              <Separator />

              {/* Results and Insights */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-slate-800">Results and Insights</h3>
                </div>

                {/* Metrics */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {project.results.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-lg text-center border"
                    >
                      <div className="text-2xl font-bold text-slate-800 mb-1">{metric.value}</div>
                      <div className="text-sm text-slate-600 mb-2">{metric.label}</div>
                      <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-800">
                        {metric.change}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Key Insights */}
                <div className="space-y-4">
                  <h4 className="font-medium text-slate-700">Key Insights</h4>
                  <ul className="space-y-2">
                    {project.results.insights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Professional Growth */}
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <h4 className="font-medium text-emerald-800 mb-2">Professional Growth</h4>
                  <p className="text-emerald-700 text-sm mb-3">{project.results.growth}</p>

                  <h5 className="font-medium text-emerald-800 mb-2 text-sm">Applicable Insights</h5>
                  <ul className="space-y-1">
                    {project.results.applicableInsights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-emerald-700">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
