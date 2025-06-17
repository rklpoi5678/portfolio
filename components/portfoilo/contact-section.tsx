// components/contact-section.tsx

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollSection } from "@/components/scroll-section";
import { Download, Mail, Linkedin, Github, Presentation } from "lucide-react";
import { personalInfo } from "@/types/portfoilo-data"; // personalInfo 데이터 임포트

interface ContactSectionProps {
  isGeneratingPdf: boolean;
  handleExportPDF: () => Promise<void>;
}

export function ContactSection({
  isGeneratingPdf,
  handleExportPDF,
}: ContactSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-white pdf-page-break">
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
                disabled={isGeneratingPdf}
              >
                {isGeneratingPdf ? 'PDF 생성 중...' : (
                  <>
                    <Download className="h-5 w-5" />
                    Download PDF
                  </>
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 gap-2 text-lg px-8 py-4"
              >
                <Presentation className="h-5 w-5" />
                Download PPTX
              </Button>
            </div>
          </motion.div>
        </ScrollSection>
      </div>
    </section>
  );
}