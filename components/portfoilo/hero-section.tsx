"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Linkedin, Github, MapPin } from "lucide-react"
import { personalInfo, skills } from "@/types/portfoilo-data"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export function HeroSection() {
  const handleExportPDF = () => {
    alert("PDF export functionality would be implemented here using libraries like jsPDF or react-to-pdf")
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div className="max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  {personalInfo.nameEn}
                  <span className="block text-2xl lg:text-3xl text-slate-600 font-normal mt-2">
                    {personalInfo.name}
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-emerald-600 font-medium">{personalInfo.title}</p>
              </motion.div>

              <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                {personalInfo.bio}
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">Core Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.marketing.slice(0, 6).map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-emerald-100 text-emerald-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 gap-2">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg" className="gap-2" onClick={handleExportPDF}>
                  <Download className="h-4 w-4" />
                  Download Portfolio
                </Button>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Visual */}
            <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-end">
              <motion.div variants={floatingVariants} animate="animate" className="relative">
                <div className="w-80 h-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 blur-xl" />
                  <div className="absolute inset-4 bg-white rounded-full shadow-2xl overflow-hidden">
                    <Image
                      src={personalInfo.avatar || "/placeholder.svg"}
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute top-10 -left-10 bg-white rounded-lg shadow-lg p-4 border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-emerald-600">340%</div>
                <div className="text-sm text-slate-600">Avg ROAS Improvement</div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 -right-10 bg-white rounded-lg shadow-lg p-4 border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-slate-800">15+</div>
                <div className="text-sm text-slate-600">Successful Campaigns</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
