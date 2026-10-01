export interface Skill {
  name: string
  level: number
  category: string
}

export interface SkillCategory {
  id: string
  label: { ko: string; en: string }
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: { ko: "프론트엔드", en: "Frontend" },
    skills: [
      { name: "React / Next.js", level: 5, category: "frontend" },
      { name: "TypeScript", level: 5, category: "frontend" },
      { name: "Tailwind CSS", level: 5, category: "frontend" },
      { name: "Framer Motion", level: 3, category: "frontend" },
      { name: "React Native / Flutter", level: 3, category: "frontend" },
    ],
  },
  {
    id: "backend",
    label: { ko: "백엔드", en: "Backend" },
    skills: [
      { name: "Node.js", level: 5, category: "backend" },
      { name: "NestJS / Express", level: 5, category: "backend" },
      { name: "PostgreSQL / MySQL", level: 4, category: "backend" },
      { name: "REST API Design", level: 5, category: "backend" },
      { name: "Prisma / Drizzle", level: 3, category: "backend" },
    ],
  },
  {
    id: "infra",
    label: { ko: "인프라 & DevOps", en: "Infrastructure & DevOps" },
    skills: [
      { name: "Cloudflare Workers", level: 4, category: "infra" },
      { name: "Vercel / Render", level: 5, category: "infra" },
      { name: "Docker", level: 4, category: "infra" },
      { name: "Grafana / Prometheus", level: 4, category: "infra" },
      { name: "Sentry", level: 4, category: "infra" },
    ],
  },
  {
    id: "tools",
    label: { ko: "도구 & 기타", en: "Tools & Others" },
    skills: [
      { name: "Git / GitHub", level: 5, category: "tools" },
      { name: "Arch Linux", level: 4, category: "tools" },
      { name: "Figma", level: 3, category: "tools" },
      { name: "Obsidian", level: 4, category: "tools" },
      { name: "AI-Assisted Dev", level: 5, category: "tools" },
    ],
  },
]

export const skills: Skill[] = skillCategories.flatMap((c) => c.skills)
