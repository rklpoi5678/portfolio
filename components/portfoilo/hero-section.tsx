// components/hero-section.tsx

// motion 임포트를 제거합니다.
// import { motion } from "framer-motion"; // 이 줄을 제거하거나 주석 처리

import { X, Palette, FileText, LayoutTemplate, Presentation, SlidersHorizontal, Code } from "lucide-react";
import { personalInfo } from "@/types/portfoilo-data";
import { SiGoogletagmanager, SiGoogleanalytics, SiFacebook, SiLibreoffice } from '@icons-pack/react-simple-icons'
// 스킬 아이콘 매핑 (image_1ff4c7.png의 Tools 섹션용)
const resumeSkillIcons = {
  GA: SiGoogleanalytics,
  GTM: SiGoogletagmanager,
  FB: SiFacebook,
  PS: Presentation,
  EX: SiLibreoffice, // Illustrator (슬라이더, 임시)
  PPT: Code,       // Ad Group Campaign (코드, 임시)
};

// Skills Tools 데이터 (image_1ff4c7.png의 Tools 섹션용)
const resumeSkillsData = [
    { icon: "GA", level: "중급" },
    { icon: "GTM", level: "중급" },
    { icon: "FB", level: "중급" },
    { icon: "Photoshop", level: "중급" },
    { icon: "Excel", level: "초급" },
    { icon: "PowerPoint", level: "초급" },
];

// 목차 데이터 (마케터 포트폴리오 목차 예시로 변경)
export const tableOfContents = [
    "1. 퍼포먼스 마케팅 프로젝트 (검색/디스플레이 광고)",
    "2. 데이터 분석 및 시각화 역량",
    "3. 브랜드 마케팅 기획 및 실행 경험",
    "4. 소셜 미디어 마케팅 사례",
    "5. 자기소개 및 강점",
  ];

export function HeroSection() {
  return (
    // min-h-screen을 유지하고, 배경을 위한 relative
    <section className="pdf-page-break min-h-screen bg-gray-50 text-slate-800 relative overflow-hidden">
      {/* Animated Background Elements - 제거 또는 주석 처리 유지 */}
      {/* (주석 처리된 코드 생략) */}

      {/* Main Content Container: 이제 flex-col로 상단-중간-하단 배치 */}
      {/* h-screen으로 뷰포트 높이 전체를 차지하고, padding-top과 padding-bottom으로 여백 조절 */}
      <div className="container mx-auto px-8 relative z-10 w-full h-screen flex flex-col pt-12 pb-16"> {/* pt-12 (상단 여백), pb-16 (하단 여백) */}
        {/* Top Left Text: 이제 flex 컨테이너의 첫 번째 아이템이 됨. absolute 제거 */}
        <div className="text-left text-sm text-gray-600 mb-8 md:ml-16"> {/* mb-8로 아래 메인 타이틀과의 간격 확보 */}
          [지원 분야] 마케팅 직무_브랜드마케팅팀
        </div>

        {/* Main Title Block: flex-grow를 주어 남은 공간을 채우면서 중앙 정렬 */}
        {/* absolute 제거, flex-col 내에서 중앙에 배치되도록 margin auto 사용 */}
        <div className="flex-grow flex items-center justify-center text-center"> {/* flex-grow와 중앙 정렬 유지 */}
          <div className="max-w-4xl mx-auto space-y-4 px-8"> {/* px-8로 좌우 패딩 유지 */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-800">
              데이터 기반
              <span className="text-purple-600 text-6xl px-2">X</span>
              유연한 소통
            </h1>
            <p className="text-4xl md:text-5xl font-light leading-snug text-gray-700">
              최적의 성과를 이끌어낼
            </p>
            <p className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
              퍼포먼스 마케터 {personalInfo.name}입니다.
            </p>
          </div>
        </div>

        {/* Bottom Section with three columns: flex 컨테이너의 마지막 아이템이 됨 */}
        <div className="w-full flex justify-center md:justify-start mt-auto"> {/* mt-auto로 항상 바닥에 붙도록 함 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 w-full max-w-7xl mx-auto items-end">
            {/* Column 1: Personal Info */}
            <div className="text-left text-sm text-gray-700 space-y-1">
              <p className="text-lg font-semibold">{personalInfo.nameEn}</p>
              <p>{personalInfo.birthDate || '1996.01.10'}</p>
              <p className="mt-4">Portfolio {personalInfo.portfolioPeriod || '2019-2020'}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.email}</p>
            </div>

            {/* Column 2: Skills Tools */}
            <div className="text-left">
              <h3 className="font-bold text-gray-700 mb-2">Skills <span className="font-normal text-sm">Tools</span></h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600">
                  {resumeSkillsData.map((skill, idx) => {
                      const IconComponent = resumeSkillIcons[skill.icon as keyof typeof resumeSkillIcons];
                      return (
                          <div key={idx} className="flex items-center gap-2">
                              {IconComponent && <IconComponent className="h-5 w-5 text-gray-500" />}
                              <span>{skill.icon}</span>
                              <span className="text-xs text-gray-500">({skill.level})</span>
                          </div>
                      );
                  })}
              </div>
            </div>

            {/* Column 3: Table of Contents */}
            <div className="text-left text-gray-700">
              <h3 className="font-bold mb-2 p-2 bg-gray-200 inline-block">Table of Contents</h3>
              <ul className="text-sm space-y-1 mt-2">
                <li>1. 퍼포먼스 마케팅 프로젝트 (검색/디스플레이 광고)</li>
                <li>2. 데이터 분석 및 시각화 역량 </li>
                <li>3. 브랜드 마케팅 기획 및 실행 경험</li>
                <li>4. 소셜 미디어 마케팅 사례</li>
                <li>5. 자기소개서 및 강점</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}