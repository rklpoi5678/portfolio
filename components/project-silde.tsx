"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollSection } from "./scroll-section"
import { Lightbulb, Users, BarChart3 } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/types/portfoilo-data"

interface ProjectSlideProps {
  project: Project
  index: number
}

export function ProjectSlide({ project, index }: ProjectSlideProps) {
  const isEven = index % 2 === 0
  const bgColor =
    project.category === "Performance Marketing"
      ? "bg-gradient-to-br from-emerald-500 to-teal-600"
      : "bg-gradient-to-br from-purple-600 to-indigo-700"

  return (
    <div className="space-y-0">
      {/* Project Title Slide */}
      <section
        className={`min-h-screen flex items-center justify-center ${bgColor} text-white relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <ScrollSection className="container mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Badge variant="secondary" className="bg-white/20 text-white text-lg px-6 py-2">
              {project.category}
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">{project.title}</h1>
            <p className="text-2xl md:text-3xl font-light opacity-90 max-w-4xl mx-auto">{project.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-3 pt-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-white/30 text-white text-sm px-4 py-2">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </ScrollSection>
      </section>

      {/* Project Overview Slide */}
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-8">
          <ScrollSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Lightbulb className="h-8 w-8 text-emerald-600" />
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Project Overview</h2>
                </div>
                <p className="text-xl text-slate-600">프로젝트의 목적, 배경, 그리고 환경</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-l-4 border-l-emerald-500 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">목적 (Purpose)</h3>
                      <p className="text-slate-600 leading-relaxed">{project.overview.purpose}</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">배경 (Context)</h3>
                      <p className="text-slate-600 leading-relaxed">{project.overview.context}</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">환경 (Environment)</h3>
                      <p className="text-slate-600 leading-relaxed">{project.overview.environment}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Role & Process Slide */}
      <section className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="container mx-auto px-8">
          <ScrollSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-800">My Role & Process</h2>
                </div>
                <p className="text-xl text-slate-600">담당 역할과 수행한 프로세스</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <Badge variant="secondary" className="text-lg px-6 py-3 bg-blue-100 text-blue-800">
                      {project.role.position}
                    </Badge>
                    <div className="flex gap-4 text-slate-600">
                      <span>
                        <strong>기간:</strong> {project.role.duration}
                      </span>
                      <span>
                        <strong>팀:</strong> {project.role.team}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">주요 책임사항</h3>
                    <div className="space-y-4">
                      {project.role.responsibilities.map((responsibility, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border-l-4 border-l-blue-400"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0" />
                          <p className="text-slate-700">{responsibility}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Results & Insights Slide */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-8">
          <ScrollSection>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <BarChart3 className="h-8 w-8 text-emerald-400" />
                  <h2 className="text-4xl md:text-5xl font-bold">Results & Insights</h2>
                </div>
                <p className="text-xl text-slate-300">성과 지표와 핵심 인사이트</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {project.results.metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{metric.value}</div>
                    <div className="text-sm text-slate-300 mb-3">{metric.label}</div>
                    <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                      {metric.change}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* Insights */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">핵심 인사이트</h3>
                  <div className="space-y-4">
                    {project.results.insights.map((insight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 flex-shrink-0" />
                        <p className="text-slate-200">{insight}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-emerald-400 mb-4">전문성 성장</h4>
                    <p className="text-slate-200 leading-relaxed">{project.results.growth}</p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-blue-400 mb-4">적용 가능한 인사이트</h4>
                    <ul className="space-y-2">
                      {project.results.applicableInsights.map((insight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-200">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0" />
                          <span className="text-sm">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>
    </div>
  )
}
