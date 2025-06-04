// Case Study data structure for portfolio
// Users can easily add new case studies by following the same format

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  description: string
  thumbnail: string
  category: string
  documentType: 'PDF' | 'HWP' | 'PPT' | 'DOC' | 'FIGMA'
  techStack: string[]
  duration: string
  team: string
  role: string
  publishDate: string
  status: 'Completed' | 'In Progress' | 'On Hold'
  documentUrl?: string
  figmaUrl?: string
  githubUrl?: string
  liveUrl?: string
  tags: string[]
  problemStatement: string
  solution: string
  results: string[]
  challenges: string[]
  learnings: string[]
  process?: string[]
  next?: string[]
}

export interface CaseStudyStats {
  totalCaseStudies: number
  completedProjects: number
  inProgressProjects: number
  totalDocuments: number
}

// Case Studies Data
export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "비히디 최종 광고 성과 보고서",
    subtitle: "A/B테스트로 CTR2%목표 초과달성",
    description: "퍼포먼스 마케팅으로 성과가 낮은 광고를 예산을 줄이고 고효율광고에 예산을 증액시키고 카피와 광고 소재를개선하여 클릭율을 크게 향상시킨 프로젝트입니다.",
    thumbnail: "/casestudies/제로베이스_최종성과보고서.png",
    category: "마케팅",
    documentType: "PPT",
    techStack: ["GoogleSildes"],
    duration: "1개월",
    team: "7명",
    role: "PerformanceMarketer",
    publishDate: "2024-05-07",
    status: "Completed",
    liveUrl: "https://docs.google.com/presentation/d/e/2PACX-1vRGYu69G5wqD8IN40Pn85HUWH1Zrdhufakved4zZFYEfJKHl3wHRB-HyH0gG_bOngEJ3QLRMdvC0ZI_/pub?start=false&loop=false&delayms=3000",
    tags: ["Performance", "클릭률 최적화", "사용자 연구", "A/B 테스팅"],
    problemStatement: "자사의 규모가 크지않고 아직 소비자가 모르는 회사브랜드인점을 참고하였고 신생브랜드인점",
    solution: "계절성과 25~34여성에 대한 페르소나로 단순화하고, 직관적인 카피를 설계. 낮은 효율을 보이는 키워드들을 OFF하여 효율성을 높혔습니다.",
    results: [
      "CTR 3.48 KPI(2%)초과달성",
    ],
    challenges: [
      "기존 기업 시스템과의 호환성 및 리소스 유지",
      "다양한 가설과 페르소나중 어느것이 효과적인가",
      "예산 최적화와 가설에 대한 커뮤니케이션 합리적인 이유에 대한 균형"
    ],
    learnings: [
      "확실한 의사결정의 중요성",
      "구글의 머신러닝",
      "다양한 경험의 필요성"
    ],
    process: [
        "문제 분석 및 요구사항 정의",
        "RFP와 팀원과의 컨벤션 회의로 파악",
        "기획안 작성",
        "팀원들과 회의를 통한 가설 정립",
        "퍼포먼스",
        "성과 분석 및 집행",
        "테스트 및 최적화",
        "예산 최적화 등에 액션 및 지속적인 관리"
    ],
    next: [
        "기술적 개선",
        "각 매체별 마케팅 툴 사용법 및 왜 사용하는지 숙지",
        "사용자 경험",
        "지속적인 피드백으로 소재 개선",
        "확장",
        "다양한 지표들을 분석"
    ]
  },
  {
    id: "2",
    title: "모바일 헬스케어 앱 개발",
    subtitle: "AI 기반 건강 관리 솔루션",
    description: "인공지능을 활용한 개인 맞춤형 건강 관리 모바일 애플리케이션 개발 프로젝트입니다.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    category: "모바일 앱",
    documentType: "PPT",
    techStack: ["React Native", "Python", "TensorFlow", "Firebase"],
    duration: "6개월",
    team: "8명",
    role: "Full Stack Developer",
    publishDate: "2023-12-20",
    status: "Completed",
    documentUrl: "/documents/healthcare-app-presentation.pptx",
    githubUrl: "https://github.com/example/healthcare-app",
    tags: ["AI/ML", "헬스케어", "모바일 개발", "데이터 분석"],
    problemStatement: "개인의 건강 상태를 지속적으로 모니터링하고 맞춤형 건강 관리 솔루션을 제공하는 서비스의 부재",
    solution: "AI 알고리즘을 활용하여 사용자의 생체 데이터를 분석하고 개인화된 건강 관리 계획을 제공하는 모바일 앱 개발",
    results: [
      "사용자 건강 지표 평균 25% 개선",
      "앱 사용 지속률 80% 달성",
      "의료진 추천률 95%",
      "월간 활성 사용자 10만명 돌파"
    ],
    challenges: [
      "의료 데이터 보안 및 개인정보 보호",
      "AI 모델의 정확도 향상",
      "다양한 웨어러블 기기와의 연동"
    ],
    learnings: [
      "헬스케어 도메인 지식의 중요성",
      "사용자 프라이버시 보호 방법",
      "AI 모델 최적화 기법"
    ]
  },
  {
    id: "3",
    title: "기업용 대시보드 시스템",
    subtitle: "실시간 데이터 시각화 플랫폼",
    description: "대용량 데이터를 실시간으로 처리하고 시각화하는 기업용 대시보드 시스템 구축 프로젝트입니다.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    category: "웹 개발",
    documentType: "PDF",
    techStack: ["Vue.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    duration: "4개월",
    team: "6명",
    role: "Backend Developer",
    publishDate: "2023-11-10",
    status: "Completed",
    documentUrl: "/documents/dashboard-system-case-study.pdf",
    githubUrl: "https://github.com/example/dashboard-system",
    liveUrl: "https://dashboard.example.com",
    tags: ["데이터 시각화", "실시간 처리", "대시보드", "백엔드"],
    problemStatement: "기존 리포팅 시스템의 느린 처리 속도와 제한적인 시각화 기능으로 인한 의사결정 지연",
    solution: "마이크로서비스 아키텍처와 실시간 데이터 파이프라인을 구축하여 고성능 대시보드 시스템 개발",
    results: [
      "데이터 처리 속도 10배 향상",
      "실시간 업데이트 지연시간 1초 이내",
      "동시 접속자 1000명 지원",
      "시스템 가용성 99.9% 달성"
    ],
    challenges: [
      "대용량 데이터 실시간 처리",
      "다양한 데이터 소스 통합",
      "확장 가능한 아키텍처 설계"
    ],
    learnings: [
      "마이크로서비스 아키텍처의 장단점",
      "실시간 데이터 처리 최적화 방법",
      "모니터링 및 로깅의 중요성"
    ]
  },
  {
    id: "4",
    title: "AI 챗봇 서비스 개발",
    subtitle: "자연어 처리 기반 고객 서비스 자동화",
    description: "자연어 처리 기술을 활용한 지능형 고객 서비스 챗봇 시스템 개발 프로젝트입니다.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    category: "AI/ML",
    documentType: "HWP",
    techStack: ["Python", "TensorFlow", "FastAPI", "MongoDB", "Docker"],
    duration: "5개월",
    team: "4명",
    role: "AI Engineer",
    publishDate: "2023-10-05",
    status: "Completed",
    documentUrl: "/documents/chatbot-development.hwp",
    githubUrl: "https://github.com/example/ai-chatbot",
    tags: ["자연어 처리", "챗봇", "고객 서비스", "머신러닝"],
    problemStatement: "고객 문의 처리에 소요되는 시간과 비용 증가, 24시간 고객 서비스 제공의 어려움",
    solution: "딥러닝 기반 자연어 처리 모델을 활용하여 고객 문의를 자동으로 분류하고 적절한 답변을 제공하는 챗봇 개발",
    results: [
      "고객 문의 처리 시간 60% 단축",
      "고객 만족도 4.5/5.0 달성",
      "운영 비용 40% 절감",
      "문의 해결률 85% 달성"
    ],
    challenges: [
      "다양한 고객 문의 유형 처리",
      "자연어 이해 정확도 향상",
      "대화 맥락 유지 및 관리"
    ],
    learnings: [
      "자연어 처리 모델 최적화 방법",
      "대화형 AI 시스템 설계 원칙",
      "사용자 피드백 기반 모델 개선"
    ]
  },
  {
    id: "5",
    title: "블록체인 기반 투표 시스템",
    subtitle: "투명하고 안전한 전자 투표 플랫폼",
    description: "블록체인 기술을 활용하여 투명성과 보안성을 보장하는 전자 투표 시스템 개발 프로젝트입니다.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    category: "블록체인",
    documentType: "PDF",
    techStack: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
    duration: "7개월",
    team: "5명",
    role: "Blockchain Developer",
    publishDate: "2023-09-15",
    status: "In Progress",
    documentUrl: "/documents/blockchain-voting-system.pdf",
    githubUrl: "https://github.com/example/blockchain-voting",
    tags: ["블록체인", "스마트 컨트랙트", "투표 시스템", "보안"],
    problemStatement: "기존 투표 시스템의 투명성 부족과 조작 가능성, 높은 운영 비용 문제",
    solution: "이더리움 블록체인과 스마트 컨트랙트를 활용하여 변조 불가능하고 투명한 투표 시스템 구축",
    results: [
      "투표 결과 투명성 100% 보장",
      "투표 조작 시도 0건",
      "운영 비용 70% 절감",
      "투표 참여율 30% 증가"
    ],
    challenges: [
      "블록체인 네트워크 확장성 문제",
      "사용자 친화적인 인터페이스 설계",
      "개인정보 보호와 투명성의 균형"
    ],
    learnings: [
      "블록체인 기술의 실제 적용 방법",
      "스마트 컨트랙트 보안 고려사항",
      "탈중앙화 시스템 설계 원칙"
    ]
  },
  {
    id: "6",
    title: "IoT 스마트 홈 시스템",
    subtitle: "통합 홈 자동화 플랫폼",
    description: "다양한 IoT 기기들을 통합 관리할 수 있는 스마트 홈 자동화 시스템 개발 프로젝트입니다.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    category: "IoT",
    documentType: "PPT",
    techStack: ["Arduino", "Raspberry Pi", "MQTT", "React Native", "AWS IoT"],
    duration: "4개월",
    team: "6명",
    role: "IoT Developer",
    publishDate: "2023-08-20",
    status: "Completed",
    documentUrl: "/documents/smart-home-system.pptx",
    githubUrl: "https://github.com/example/smart-home",
    tags: ["IoT", "스마트 홈", "자동화", "센서"],
    problemStatement: "각기 다른 제조사의 스마트 기기들을 통합 관리할 수 있는 플랫폼의 부재",
    solution: "표준 프로토콜을 활용하여 다양한 IoT 기기들을 연결하고 통합 제어할 수 있는 플랫폼 개발",
    results: [
      "20개 이상 기기 동시 제어 가능",
      "에너지 사용량 25% 절약",
      "사용자 편의성 90% 향상",
      "시스템 안정성 99.5% 달성"
    ],
    challenges: [
      "다양한 통신 프로토콜 호환성",
      "실시간 데이터 처리 및 동기화",
      "네트워크 보안 및 개인정보 보호"
    ],
    learnings: [
      "IoT 생태계의 복잡성 이해",
      "임베디드 시스템 개발 경험",
      "클라우드 기반 IoT 아키텍처 설계"
    ]
  }
]

// Case Study Statistics
export const caseStudyStats: CaseStudyStats = {
  totalCaseStudies: caseStudies.length,
  completedProjects: caseStudies.filter(cs => cs.status === 'Completed').length,
  inProgressProjects: caseStudies.filter(cs => cs.status === 'In Progress').length,
  totalDocuments: caseStudies.length,
}

// Get case study by ID
export function getCaseStudyById(id: string): CaseStudy | null {
  return caseStudies.find(cs => cs.id === id) || null
}

// Get case studies by category
export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.category === category)
}

// Get case studies by document type
export function getCaseStudiesByDocumentType(documentType: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.documentType === documentType)
}

// Get case studies by tech stack
export function getCaseStudiesByTechStack(tech: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.techStack.includes(tech))
}

// Get case studies by status
export function getCaseStudiesByStatus(status: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.status === status)
}

// Get all unique categories
export function getAllCategories(): string[] {
  return [...new Set(caseStudies.map(cs => cs.category))]
}

// Get all unique document types
export function getAllDocumentTypes(): string[] {
  return [...new Set(caseStudies.map(cs => cs.documentType))]
}

// Get all unique tech stacks
export function getAllTechStacks(): string[] {
  const allTech = caseStudies.flatMap(cs => cs.techStack)
  return [...new Set(allTech)]
}

// Get related case studies
export function getRelatedCaseStudies(currentId: string, limit = 3): CaseStudy[] {
  const current = getCaseStudyById(currentId)
  if (!current) return []

  const related = caseStudies
    .filter(cs => cs.id !== currentId)
    .filter(cs => 
      cs.category === current.category || 
      cs.techStack.some(tech => current.techStack.includes(tech))
    )
    .slice(0, limit)

  // If not enough related, add some recent ones
  if (related.length < limit) {
    const recent = caseStudies
      .filter(cs => cs.id !== currentId && !related.includes(cs))
      .slice(0, limit - related.length)
    related.push(...recent)
  }

  return related
}

// Search case studies
export function searchCaseStudies(query: string): CaseStudy[] {
  const lowercaseQuery = query.toLowerCase()
  return caseStudies.filter(cs =>
    cs.title.toLowerCase().includes(lowercaseQuery) ||
    cs.description.toLowerCase().includes(lowercaseQuery) ||
    cs.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    cs.techStack.some(tech => tech.toLowerCase().includes(lowercaseQuery))
  )
}
