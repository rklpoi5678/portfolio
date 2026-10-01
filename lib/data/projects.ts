export interface PortfolioProject {
  slug: string
  title: { ko: string; en: string }
  subtitle: { ko: string; en: string }
  description: { ko: string; en: string }
  thumbnail: string
  techStack: string[]
  metrics?: { label: string; value: string }[]
  links: { label: string; url: string }[]
  featured: boolean
  year: string
}

export const projects: PortfolioProject[] = [
  {
    slug: "ssambee",
    title: { ko: "샘비 (SsamBee)", en: "SsamBee" },
    subtitle: {
      ko: "강사-학생-학부모 B2B 관리 플랫폼",
      en: "B2B Management Platform for Instructors, Students & Parents",
    },
    description: {
      ko: "학원 운영을 효율화하는 올인원 관리 플랫폼. 출결, 과제, 알림, 결제 관리를 통합하여 강사와 학부모 간의 소통을 간소화합니다. NestJS 백엔드, Next.js 프론트엔드, Sentry + Grafana Cloud 모니터링 아키텍처.",
      en: "All-in-one management platform that streamlines academy operations. Integrates attendance, assignments, notifications, and payment management. NestJS backend, Next.js frontend, Sentry + Grafana Cloud monitoring architecture.",
    },
    thumbnail: "/portfolio/ssambee.png",
    techStack: ["Next.js", "NestJS", "TypeScript", "Sentry", "Grafana Cloud", "Vercel", "Render"],
    metrics: [
      { label: "Status", value: "Production" },
      { label: "Revenue", value: "Generating" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rklpoi5678" },
    ],
    featured: true,
    year: "2025",
  },
  {
    slug: "opdoc",
    title: { ko: "Op_Doc", en: "Op_Doc" },
    subtitle: {
      ko: "AI 기반 파일 자동 정리 Obsidian 플러그인",
      en: "AI-Powered File Auto-Organization Obsidian Plugin",
    },
    description: {
      ko: "Ollama/OpenAI 프로바이더를 활용한 Obsidian 커뮤니티 플러그인. PARA, MECE, Johnny.Decimal 등의 방법론 프리셋으로 폴더 분류를 자동화합니다.",
      en: "Obsidian community plugin using Ollama/OpenAI providers. Automates folder classification with methodology presets including PARA, MECE, and Johnny.Decimal.",
    },
    thumbnail: "/portfolio/opdoc.png",
    techStack: ["TypeScript", "Obsidian API", "Ollama", "OpenAI API", "i18n"],
    links: [
      { label: "GitHub", url: "https://github.com/rklpoi5678/Op_Doc" },
    ],
    featured: true,
    year: "2025",
  },
  {
    slug: "dashboard-lab",
    title: { ko: "Dashboard-LAB", en: "Dashboard-LAB" },
    subtitle: {
      ko: "대시보드 최적화 도구",
      en: "Dashboard Optimization Tool",
    },
    description: {
      ko: "대시보드 성능 최적화를 위한 도구. 초기 단계의 개인 프로젝트.",
      en: "Tool for dashboard performance optimization. Early-stage personal project.",
    },
    thumbnail: "/portfolio/dashboard-lab.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [],
    featured: false,
    year: "2025",
  },
  {
    slug: "gugu",
    title: { ko: "구구 (Gugu)", en: "Gugu" },
    subtitle: {
      ko: "농수산물 직거래 앱",
      en: "Direct Trading App for Agricultural Products",
    },
    description: {
      ko: "농수산물 직거래 플랫폼. Flutter와 React Native로 개발된 하이브리드 웹앱으로, 생산자와 소비자를 직접 연결합니다.",
      en: "Direct trading platform for agricultural and fishery products. Hybrid webapp built with Flutter and React Native, connecting producers directly with consumers.",
    },
    thumbnail: "/portfolio/guguFresh.png",
    techStack: ["Flutter", "React Native", "Firebase", "FlutterFlow"],
    links: [
      { label: "Demo", url: "https://gugufresh.flutterflow.app/" },
    ],
    featured: false,
    year: "2024",
  },
  {
    slug: "interviewb",
    title: { ko: "InterViewB", en: "InterViewB" },
    subtitle: {
      ko: "AI 기반 면접 연습 플랫폼",
      en: "AI-Powered Interview Practice Platform",
    },
    description: {
      ko: "음성 인식과 AI 분석을 결합한 면접 연습 SaaS. 실시간 음성 파형 분석, 습관어 감지, 모범답안 비교, PDF 리포트 생성. Next.js 15, Tailwind CSS 4, Framer Motion, Recharts, RecordRTC, Socket.IO, better-auth 기반. 터보레포 모노레포 구조.",
      en: "Interview practice SaaS combining voice recognition with AI analysis. Real-time voice waveform analysis, filler word detection, model answer comparison, PDF report generation. Built with Next.js 15, Tailwind CSS 4, Framer Motion, Recharts, RecordRTC, Socket.IO, better-auth. Turborepo monorepo structure.",
    },
    thumbnail: "/portfolio/interviewb.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts", "RecordRTC", "Socket.IO", "better-auth", "Zustand", "TanStack Query", "Turborepo"],
    metrics: [
      { label: "Status", value: "Launching" },
      { label: "Type", value: "SaaS" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rklpoi5678" },
    ],
    featured: true,
    year: "2025",
  },
  {
    slug: "bmark",
    title: { ko: "B-Mark", en: "B-Mark" },
    subtitle: {
      ko: "농산물 검품 기준 관리 PWA",
      en: "Agricultural Inspection Criteria PWA",
    },
    description: {
      ko: "농산물 검품 기준서를 디지털화한 프로그레시브 웹앱. Cloudflare D1 + R2 기반 데이터 파이프라인, Leaflet 지도 기반 위치 관리, Capacitor 네이티브 앱(iOS/Android), Dexie 오프라인 캐싱, Serwist PWA 서비스워커. QR 코드 생성 및 푸시 알림 지원.",
      en: "Progressive web app digitizing agricultural inspection criteria. Cloudflare D1 + R2 data pipeline, Leaflet map-based location management, Capacitor native apps (iOS/Android), Dexie offline caching, Serwist PWA service worker. QR code generation and push notification support.",
    },
    thumbnail: "/portfolio/bmark.svg",
    techStack: ["Next.js", "TypeScript", "Cloudflare D1", "Cloudflare R2", "Capacitor", "Leaflet", "Dexie", "Serwist", "Fuse.js", "Zustand"],
    metrics: [
      { label: "Status", value: "Production" },
      { label: "Platform", value: "PWA + Native" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rklpoi5678" },
    ],
    featured: true,
    year: "2025",
  },
  {
    slug: "korea-competition",
    title: { ko: "Korea Competition", en: "Korea Competition" },
    subtitle: {
      ko: "프로 레이싱 팀 메카닉 - 인제 8라운드 우승",
      en: "Pro Racing Mechanic - Inje Round 8 Champion",
    },
    description: {
      ko: "프로 레이싱 팀 한국컴피티션 메카닉. 차량 세팅, 실시간 트러블슈팅, 데이터 기반 성능 최적화로 최명길 선수 인제 레이싱 라운드 8 1위 우승 기여. SW 엔지니어링 문제 해결 능력을 HW 영역에 적용.",
      en: "Mechanic for Korea Competition racing team. Vehicle setup, real-time troubleshooting, data-driven performance optimization for Choi Myung-gil's 1st place at Inje Racing Round 8. Applied SW engineering problem-solving to HW domain.",
    },
    thumbnail: "/portfolio/korea-competition.svg",
    techStack: ["Vehicle Diagnostics", "Data Analysis", "Real-Time Troubleshooting", "Performance Optimization"],
    metrics: [
      { label: "Result", value: "1st Place" },
      { label: "Event", value: "Inje Round 8" },
    ],
    links: [],
    featured: false,
    year: "2023",
  },
]
