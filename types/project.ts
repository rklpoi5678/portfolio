export interface Project {
  id: number
  title: string
  description: string
  images: string[]
  creator: {
    name: string
    avatar: string
    followers: string
  }
  links?: {
    title: string
    url: string
  }[]
  tools?: string[]
  stats: {
    views: number
    likes: number
    comments: number
  }
  tags: string[]
  createdAt: string
}

export const projects: Project[] = [
  {
    id: 1,
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
      name: "Kim youn gi",
      avatar: "/avatar-simple.png",
      followers: "12.5k",
    },
    links: [
      { title: 'GitHub', url: 'https://github.com/rklpoi5678/MetaOS' },
      { title: 'Demo', url: 'https://meta-os.vercel.app' }
    ],
    stats: {
      views: 20,
      likes: 3,
      comments: 2,
    },
    tags: ["Monorepo", "AI", "Design", "Next.js", "Supabase", "Zustand", "OpenAI API", "Mistral", "i8n", "framer-motion"],
    tools: ["Next.js", "Supabase", "Zustand", "OpenAI API", "Mistral"],
    createdAt: "2025-04-10",
  },
  {
    id: 2,
    title: "구구프래시 - 농산품 직거래 플랫폼(프로젝트 보류됨)",
    description: "산지직송 신선한 농산물 소비 플랫폼, 농업자와 소비자의 연결 및 문제점 발견, 하이브리드 웹앱",
    images: [
      "/portfolio/guguFresh.png",
      "/portfolio/guguFresh_splash.png",
      "/placeholder.svg?key=lieet",
      "/placeholder.svg?key=bdm26",
    ],
    creator: {
      name: "Kim youn gi",
      avatar: "/avatar-simple.png",
      followers: "12.5k",
    },
    links: [
        { title: 'GitHub', url: 'https://github.com/rklpoi5678/App' },
        { title: 'Demo', url: 'https://gugufresh.flutterflow.app/' }
      ],
    stats: {
      views: 5,
      likes: 3,
      comments: 1,
    },
    tags: ["PR", "Marketing", "Flutter", "Firebase", "FlutterFlow"],
    tools: ["Flutter", "Firebase", "FlutterFlow"],
    createdAt: "2024-07-23",
  },
  {
    id: 3,
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
      avatar: "/avatar-simple.png",
      followers: "3",
    },
    links: [
      { title: 'GitHub', url: 'https://github.com/rklpoi5678/tembus' },
      { title: 'Demo', url: 'https://tembus.vercel.app/' }
    ],
    stats: {
      views: 0,
      likes: 0,
      comments: 0,
    },
    tags: ["Next.js", "Neon", "Zustand", "v0", "bcyptjs"],
    tools: ["Next.js", "Neon", "Zustand", "v0", "bcyptjs"],
    createdAt: "2025-05-24",
  },
  {
    id: 4,
    title: "블로그 - nextra옵시디언 블로그",
    description: "글로 쓰이지만, 마음으로 움직이고, 시스템으로 녹아들기를 바랍니다.\n이 블로그는 흐트러진 생각들을 정돈하고, 다시 흘러가게 만드는 일 — 그게 내가 여기서 하는 일입니다.",
    images: [
      "/portfolio/nextra-blog.png",
      "/placeholder.svg?key=30ry5",
      "/placeholder.svg?key=lieet",
      "/placeholder.svg?key=bdm26",
    ],
    creator: {
      name: "Kim youn gi",
      avatar: "/avatar-simple.png",
      followers: "1k",
    },
    links: [
      { title: 'GitHub', url: 'https://github.com/rklpoi5678/nextra-blog' },
      { title: 'Demo', url: 'https://nextra-blog-3t4s.vercel.app/' }
    ],
    stats: {
      views: 50,
      likes: 3,
      comments: 0,
    },
    tags: ["Next.js", "Nextra", "Zustand", "Obsidian", "MeatOsComponent"],
    tools: ["Next.js", "Nextra", "Zustand", "Obsidian", "MeatOsComponent"],
    createdAt: "2025-04-14",
  },
  {
    id: 5,
    title: "구구트래블 - 오프라인 현지 투어사 지도",
    description: "구구트래블은 오프라인 현지 투어사 지도 플랫폼입니다. 현지 투어사 지도를 확인하고, 안내소를 탐색할 수 있습니다.",
    images: [
      "/portfolio/guguTravel.png",
      "/portfolio/guguTravel_splash.png",
      "/placeholder.svg?key=lieet",
      "/placeholder.svg?key=bdm26",
    ],
    creator: {
      name: "Kim youn gi",
      avatar: "/avatar-simple.png",
      followers: "1k",
    },
    links: [
      { title: 'GitHub', url: 'https://github.com/rklpoi5678/Apps/tree/master/apps/guguTravel' },
      { title: 'GooglePlayStore', url: 'https://play.google.com/store/apps/details?id=com.youngikim.appsgugutravel' }
    ],
    stats: {
      views: 10,
      likes: 0,
      comments: 0,
    },
    tags: ["Next.js", "Nextra", "Zustand", "Obsidian", "MeatOsComponent"],
    tools: ["Next.js", "Nextra", "Zustand", "Obsidian", "MeatOsComponent"],
    createdAt: "2025-05-19",
  },
  {
    id: 6,
    title: "Monkey Propel (Simple touch & shake game)",
    description: "원숭이를 터치하거나 흔들어서 목적지로 보내는 간단한 게임입니다.",
    images: [
      "/portfolio/monkeyPropel.png",
      "/placeholder.svg?key=30ry5",
      "/placeholder.svg?key=lieet",
      "/placeholder.svg?key=bdm26",
    ],
    creator: {
      name: "Kim youn gi",
      avatar: "/avatar-simple.png",
      followers: "1k",
    },
    links: [
      { title: 'GitHub', url: 'https://github.com/rklpoi5678/Apps/tree/master/apps/monkeythrowing' },
      { title: 'GooglePlayStore', url: 'https://play.google.com/store/apps/details?id=com.youngikim.monkypropergame' }
    ],
    stats: {
      views: 1,
      likes: 0,
      comments: 0,
    },
    tags: ["ReactNative", "Expo", "monorepo", "expo-linear-gradient", "expo-release-it", "gradle", "android"],
    tools: ["ReactNative", "Expo"],
    createdAt: "2025-05-29",
  },
  {
    id: 7,
    title: "토론스 - 세상의 모든 토론 (개발중...)",
    description: "짜장 vs 짬뽕, 핵개발 vs 핵공유 다른 사람과 경쟁하면서 토론을 주체하고 참여해보세요 \n\n[토론스] 계정 삭제 방법\n\n저희 [토론스]은 사용자 여러분의 개인 정보 보호를 최우선으로 생각합니다. \n계정 삭제는 앱 내에서 쉽고 안전하게 진행하실 수 있습니다.\n\n계정 삭제 단계:\n[토론스] 앱을 실행합니다.\n로그인 후, '[프로필]' 메뉴로 이동합니다.\n'[프로필]' 또는 하단 섹션에서 '[계정 삭제]' 옵션을 찾습니다.\n안내에 따라 본인 인증 절차를 완료하고 계정 삭제를 요청합니다.\n\n선택 사항: 스크린샷 또는 짧은 동영상 링크를 추가하여 시각적인 안내를 제공하면 더욱 좋습니다.\n만약 앱에 접근할 수 없거나 기술적인 문제로 계정 삭제를 진행할 수 없는 경우, 다음 이메일 주소로 문의해 주시기 바랍니다: [meta-os@zohomail.com] 이는 비상시를 위한 조치입니다.",
    images: [
      "/portfolio/agoralite.png",
      "/portfolio/agoralite1.png",
      "/portfolio/agoralite2.png",
      "/portfolio/agoralite3.png",
    ],
    creator: {
      name: "Kim youn gi",
      avatar: "/avatar-simple.png",
      followers: "1k",
    },
    links: [
      { title: 'GitHub', url: 'https://github.com/rklpoi5678/Apps/tree/master/apps/AgoraLite' },
      { title: 'GooglePlayStore', url: 'https://play.google.com/store/apps/details?id=com.youngikim.agoralite' }
    ],
    stats: {
      views: 1,
      likes: 1,
      comments: 0,
    },
    tags: ["ReactNative", "monorepo", "android"],
    tools: ["ReactNative", "Expo"],
    createdAt: "2025-05-29",
  },
  {
    id: 8,
    title: "마케티아 - 마케팅이 처음일때 길잡이 마케티아 (개발중...)",
    description: "기초 부터 차근차근 마케팅에 대하여...",
    images: [
      "/mobile-app-ui-design.png",
      "/placeholder.svg?key=30ry5",
      "/placeholder.svg?key=lieet",
      "/placeholder.svg?key=bdm26",
    ],
    creator: {
      name: "Kim youn gi",
      avatar: "/avatar-simple.png",
      followers: "1k",
    },
    links: [
      { title: 'GitHub', url: 'https://github.com/rklpoi5678/Apps/tree/master/apps/MakeTia' },
      { title: 'GooglePlayStore', url: 'https://play.google.com/store/apps/details?id=com.anany.maketia' }
    ],
    stats: {
      views: 1,
      likes: 1,
      comments: 0,
    },
    tags: ["ReactNative", "monorepo", "android"],
    tools: ["ReactNative", "Expo"],
    createdAt: "2025-05-29",
  },
  // 추가 프로젝트 데이터...
] 