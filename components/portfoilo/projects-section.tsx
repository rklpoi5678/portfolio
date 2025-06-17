// components/projects-section.tsx

import { motion } from "framer-motion";
import { ScrollSection } from "@/components/scroll-section"; // ScrollSection 임포트

export function ProjectsSection() {
  return (
    <section className="bg-slate-50 pdf-page-break">
      <div className="container mx-auto px-8 py-20">
        <ScrollSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">주요 퍼포먼스 마케팅 프로젝트</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              퍼포먼스 마케팅과 프론트엔드 개발 전문성을 보여주는 주요 프로젝트들
            </p>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}