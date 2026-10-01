export interface ExperienceEntry {
  period: string
  title: { ko: string; en: string }
  company: { ko: string; en: string }
  description: { ko: string; en: string }
  highlights: { ko: string; en: string }[]
}

export const experiences: ExperienceEntry[] = [
  {
    period: "2024 - Present",
    title: { ko: "대표 개발자", en: "CEO & Lead Developer" },
    company: { ko: "0091 (공공구일)", en: "0091" },
    description: {
      ko: "개인 사업체(간이과세자) 운영. SsamBee B2B 관리 플랫폼 전체 아키텍처 설계, DevOps, 백엔드/프론트엔드 개발, 제품 기획, 비즈니스 전략 수행.",
      en: "Running a sole proprietorship. Leading all system architecture, DevOps, backend/frontend development, product planning, and business strategy for SsamBee.",
    },
    highlights: [
      { ko: "SsamBee B2B 플랫폼 기획 및 개발", en: "Planned and developed SsamBee B2B platform" },
      { ko: "Sentry + Grafana Cloud 모니터링 아키텍처 구축", en: "Built Sentry + Grafana Cloud monitoring architecture" },
      { ko: "Op_Doc Obsidian 플러그인 커뮤니티 배포", en: "Published Op_Doc Obsidian plugin to community" },
    ],
  },
  {
    period: "2024",
    title: { ko: "공동 창업자 & 풀스택 개발자", en: "Co-founder & Full-Stack Developer" },
    company: { ko: "구구 (Gugu)", en: "Gugu" },
    description: {
      ko: "농수산물 직거래 앱 개발. Flutter와 React Native를 활용한 하이브리드 모바일 앱 구현.",
      en: "Developed a direct trading app for agricultural and fishery products using Flutter and React Native.",
    },
    highlights: [
      { ko: "Flutter/React Native 하이브리드 앱 개발", en: "Built hybrid mobile app with Flutter/React Native" },
      { ko: "농수산물 거래 플랫폼 기획 및 출시", en: "Planned and launched agricultural trading platform" },
    ],
  },
  {
    period: "2023",
    title: { ko: "메카닉", en: "Mechanic" },
    company: { ko: "한국컴피티션", en: "Korea Competition" },
    description: {
      ko: "인제 레이싱 라운드 8 참가. 최명길 선수 1위 우승에 기여. 하드웨어 수준의 기술적 문제 해결 능력 입증.",
      en: "Participated in Inje Racing Round 8. Contributed to driver Choi Myung-gil's 1st place victory, demonstrating hands-on problem-solving at hardware level.",
    },
    highlights: [
      { ko: "인제 레이싱 라운드 8 우승 기여", en: "Contributed to Inje Racing Round 8 victory" },
      { ko: "차량 세팅 및 실시간 트러블슈팅", en: "Vehicle setup and real-time troubleshooting" },
    ],
  },
]
