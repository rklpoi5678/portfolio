"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Code, Wrench } from "lucide-react"
import { skills } from "@/lib/portfolio-data"

const skillCategories = [
  {
    title: "Performance Marketing",
    icon: TrendingUp,
    skills: skills.marketing,
    color: "emerald",
  },
  {
    title: "Development",
    icon: Code,
    skills: skills.development,
    color: "slate",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: skills.tools,
    color: "teal",
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit combining marketing strategy, technical implementation, and data analysis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full bg-${category.color}-100 flex items-center justify-center`}
                  >
                    <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                  </div>
                  <CardTitle className="text-xl text-slate-800">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
