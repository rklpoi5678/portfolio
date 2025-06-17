// Portfolio.tsx

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Presentation } from "lucide-react"; // Navigation에 필요한 아이콘만 남김
import { personalInfo, projects } from "@/types/portfoilo-data";

// 섹션 컴포넌트 임포트
import { HeroSection } from "@/components/portfoilo/hero-section";
import { SkillsSection } from "@/components/portfoilo/skills-section";
import { ProjectsSection } from "@/components/portfoilo/projects-section";
import { ContactSection } from "@/components/portfoilo/contact-section";
import { Footer } from "@/components/portfoilo/footer";
import { ProjectSlide } from "@/components/portfoilo/project-silde"; // 프로젝트 슬라이드도 그대로 사용

interface params {
  id: string;
}

export default function Portfolio({ params }: { params: params }) {
  const [scrollY, setScrollY] = useState(0); // 스크롤 상태는 여전히 Portfolio 컴포넌트에서 관리
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PDF Export 핸들러 함수 (동일)
  const handleExportPDF = async () => {
    setIsGeneratingPdf(true);
    const currentPortfolioUrl = window.location.href;
    try {
      const response = await fetch('/api/generate-portfolio-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: currentPortfolioUrl }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`PDF 생성 실패: ${response.status} ${response.statusText} - ${errorData.message}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'full_portfolio.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      alert("PDF 내보내기가 완료되었습니다!");
    } catch (error) {
      console.error("PDF Export 중 오류 발생:", error);
      alert(`PDF 내보내기 실패: ${(error as Error).message || '알 수 없는 오류'}`);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

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
              disabled={isGeneratingPdf}
            >
              {isGeneratingPdf ? 'PDF 생성 중...' : (
                <>
                  <Download className="h-4 w-4" />
                  PDF Export
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 hover:bg-purple-50 hover:border-purple-300"
            >
            <Presentation className="h-4 w-4" />
            PPTX Export
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Sections */}
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />

      {/* Project Slides (개별 프로젝트는 여기에 직접 매핑 유지) */}
      {projects.map((project, index) => (
        <ProjectSlide key={project.id} project={project} index={index} className="pdf-page-break" />
      ))}

      <ContactSection
        isGeneratingPdf={isGeneratingPdf}
        handleExportPDF={handleExportPDF}
      />
      <Footer />
    </div>
  );
}