// components/footer.tsx

import { personalInfo } from "@/types/portfoilo-data"; // personalInfo 데이터 임포트

export function Footer() {
  return (
    <footer className="py-8 bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="container mx-auto px-8 text-center">
        <p>
          &copy; 2024 {personalInfo.name} ({personalInfo.nameEn}). All rights reserved.
        </p>
      </div>
    </footer>
  );
}