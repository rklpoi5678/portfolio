export interface Project {
  id: string
  title: string
  description: string
  images: string[]
  creator: {
    name: string
    avatar: string
    followers: string
  }
  stats: {
    views: string
    likes: string
    comments: number
  }
  tags: string[]
  createdAt: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "MetaOS - AI 기반 프로젝트 관리 시스템",
    description: 
    "메타OS는 프로젝트 관리 시스템으로, 프로젝트 관리 및 자동화 시스템입니다.\n 모노레포를 활용한 AI 기반 프로젝트 관리 시스템으로, 실시간 데이터 동기화 구현,사용자 경험 최적화를 지원합니다. AI에 대한 작업실",
    images: [
      "/portfolio/meta-os.jpeg",
      "/placeholder.svg?key=30ry5",
      "/placeholder.svg?key=lieet",
      "/placeholder.svg?key=bdm26",
    ],
    creator: {
      name: "Alex Morgan",
      avatar: "/diverse-group.png",
      followers: "12.5k",
    },
    stats: {
      views: "20",
      likes: "3",
      comments: 2,
    },
    tags: ["Monorepo", "AI", "Design", "Next.js", "Supabase", "Zustand", "OpenAI API", "Mistral", "i8n", "framer-motion"],
    createdAt: "2025-04-10",
  },
  {
    id: "2",
    title: "구구프래시 - 농산품 직거래 플랫폼",
    description: "산지직송 신선한 농산물 소비 플랫폼, 농업자와 소비자의 연결 및 문제점 발견, 하이브리드 웹앱",
    images: [
      "/portfolio/guguFresh.png",
      "/placeholder.svg?key=30ry5",
      "/placeholder.svg?key=lieet",
      "/placeholder.svg?key=bdm26",
    ],
    creator: {
      name: "Kim youn gi",
      avatar: "/diverse-group.png",
      followers: "12.5k",
    },
    stats: {
      views: "5",
      likes: "3",
      comments: 1,
    },
    tags: ["PR", "Marketing", "Flutter", "Firebase", "FlutterFlow"],
    createdAt: "2024-07-23",
  },
  {
    id: "3",
    title: "자유템 - 디지털 제품 & PLR 라이선스 판매 플랫폼",
    description: "A clean and modern brand identity design for a tech startup. The project includes logo design, color palette, typography, and various brand applications.",
    images: [
      "/portfolio/digital-market.png",
      "/placeholder.svg?key=30ry5",
      "/placeholder.svg?key=lieet",
      "/placeholder.svg?key=bdm26",
    ],
    creator: {
      name: "Kim youn gi",
      avatar: "/diverse-group.png",
      followers: "12.5k",
    },
    stats: {
      views: "0",
      likes: "0",
      comments: 0,
    },
    tags: ["Next.js", "Neon", "Zustand", "v0", "bcyptjs"],
    createdAt: "2025-04-10",
  },
  // 추가 프로젝트 데이터...
] 