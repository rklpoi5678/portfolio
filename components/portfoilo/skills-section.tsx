// components/skills-section.tsx

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ScrollSection } from "@/components/scroll-section"; // ScrollSection 임포트
import { TrendingUp, Paintbrush, Wrench } from "lucide-react"; // 필요한 아이콘 임포트

// skills 데이터 (여기서는 예시로 정의하지만, 실제로는 types/portfolio-data에서 임포트)
const skillCategories = [
  { title: "마케팅", icon: TrendingUp, color: "orange", skills: [] },
  { title: "디자인", icon: Wrench, color: "purple", skills: [] },
  { title: "개발", icon: Paintbrush, color: "blue", skills: [] },
]; 

export function SkillsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pdf-page-break">
      <div className="container mx-auto px-8">
        <ScrollSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">핵심 역량</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              데이터를 읽고, 전략을 세우고, 실제 성과로 증명하는 저의 강점입니다.
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
  );
}