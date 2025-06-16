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
  portfolioUrl?: string
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
    portfolioUrl: "/casestudy/portfolio/1",
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
    title: "AI 챗봇 서비스 개발",
    subtitle: "자연어 처리 기반 고객 서비스 자동화 (농산물 문자서비스 및 MetaOs 개발용)",
    description: "자연어 처리 기술을 활용한 지능형 고객 서비스 챗봇 시스템 개발 프로젝트입니다.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    category: "AI/ML",
    documentType: "HWP",
    techStack: ["Python", "TensorFlow", "FastAPI", "MongoDB", "Docker", "Tableau", "Zig"],
    duration: "미정",
    team: "1명",
    role: "AI Engineer",
    publishDate: "2025-05-05",
    status: "In Progress",
    documentUrl: "/documents/chatbot-development.hwp",
    githubUrl: "https://github.com/example/ai-chatbot",
    tags: ["자연어 처리", "챗봇", "고객 서비스", "머신러닝", "SaaS", "HF"],
    problemStatement: "농산물에서 문자로 배송정보를 수기로 적는것에서 착안 문의 처리에 소요되는 시간과 비용 증가, 24시간 서비스 제공의 어려움",
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
