"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollSection } from "@/components/scroll-section"
import { ProjectSlide } from "@/components/project-silde"
import { Download, Mail, Linkedin, Github, ArrowDown, TrendingUp, Code, Wrench } from "lucide-react"
import { personalInfo, skills, projects } from "@/types/portfoilo-data"

interface params {
    id: string
}

export default function Portfolio({ params }: { params: params }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleExportPDF = () => {
    alert("PDF export functionality would be implemented here using libraries like jsPDF or react-to-pdf")
  }

  const skillCategories = [
    {
      title: "Performance Marketing",
      icon: TrendingUp,
      skills: skills.marketing,
      color: "emerald",
    },
    {
      title: "Frontend Development",
      icon: Code,
      skills: skills.development,
      color: "blue",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: skills.tools,
      color: "purple",
    },
  ]

  return (
    <div className="relative">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl text-slate-800"
          >
            {personalInfo.nameEn}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Button
              onClick={handleExportPDF}
              variant="outline"
              size="sm"
              className="gap-2 hover:bg-emerald-50 hover:border-emerald-300"
            >
              <Download className="h-4 w-4" />
              PDF Export
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                {personalInfo.name}
                <span className="block text-4xl md:text-5xl font-light opacity-90 mt-4">{personalInfo.nameEn}</span>
              </h1>
              <p className="text-2xl md:text-3xl font-light opacity-90">{personalInfo.title}</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 pt-8"
            >
              <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30 gap-2">
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-white hover:text-emerald-200">
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-emerald-200">
                  <Github className="h-6 w-6" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2 text-white/80"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-8">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">Core Expertise</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                마케팅 전략, 기술 구현, 데이터 분석을 결합한 종합적인 역량
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${category.color}-100 flex items-center justify-center`}
                  >
                    <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`bg-${category.color}-50 text-${category.color}-700 hover:bg-${category.color}-100 transition-colors`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-slate-50">
        <div className="container mx-auto px-8 py-20">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">Featured Projects</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                퍼포먼스 마케팅과 프론트엔드 개발 전문성을 보여주는 주요 프로젝트들
              </p>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Project Slides */}
      {projects.map((project, index) => (
        <ProjectSlide key={project.id} project={project} index={index} />
      ))}

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-8 text-center">
          <ScrollSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Create Together</h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
                데이터 기반 마케팅과 혁신적인 솔루션으로 함께 성장해나가요
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 gap-2 text-lg px-8 py-4">
                  <Mail className="h-5 w-5" />
                  {personalInfo.email}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 gap-2 text-lg px-8 py-4"
                  onClick={handleExportPDF}
                >
                  <Download className="h-5 w-5" />
                  Download Portfolio
                </Button>
              </div>
            </motion.div>
          </ScrollSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-8 text-center">
          <p>
            &copy; 2024 {personalInfo.name} ({personalInfo.nameEn}). All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
