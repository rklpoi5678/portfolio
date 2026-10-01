"use client"

import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { SkillsSection } from "@/components/sections/skills"
import { ExperienceSection } from "@/components/sections/experience"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
