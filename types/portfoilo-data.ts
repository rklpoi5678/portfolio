// Centralized data for easy content management
export interface Project {
  id: string
  title: string
  subtitle: string
  category: "Performance Marketing" | "Frontend Development"
  featured: boolean
  thumbnail: string
  tags: string[]
  overview: {
    purpose: string
    context: string
    environment: string
  }
  role: {
    position: string
    duration: string
    team: string
    responsibilities: string[]
  }
  results: {
    metrics: Array<{
      label: string
      value: string
      change: string
    }>
    insights: string[]
    growth: string
    applicableInsights: string[]
  }
}

export const personalInfo = {
  name: "김윤기", // 한글 이름 (이미지 기반)
  nameEn: "Yoongi Kim", // 영어 이름 (이미지 기반)
  title: "마케터", // 이미지 기반 문구
  bio: "데이터 기반 마케팅과 혁신적인 솔루션으로 함께 성장해나가요.",
  email: "meta-os@zohomail.com", // 이미지 기반
  phone: "+82 10-5038-5211", // 이미지 기반
  birthDate: "2000.02.21", // image_1ff4c7.png에 있는 데이터
  portfolioPeriod: "2025-2025", // image_1ff4c7.png에 있는 데이터
  // profileImage, bloodType, address, github 등은 이 레이아웃에서 사용하지 않으므로 제거하거나 그대로 둬도 무방
};



export const projects: Project[] = [
  {
    id: "zerobase-behidi-campaign",
    title: "제로베이스 비히디 캠페인",
    subtitle: "Meta(Facebook) 광고를 활용한 고객 유입 및 전환 최적화 프로젝트",
    category: "Performance Marketing",
    featured: true,
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["Meta Ads (Facebook) ", "성과 분석", "데이터 기반 마케팅"],
    overview: {
      purpose: "제로베이스 '비히디' 서비스의 잠재 고객 유입 증대 및 전환율 개선, <strong>신규 화장품 이커머스 '비히디'</strong>, 인지도 확보 및 효율적인 초기 고객 획득 필요</strong>",
      context: "1개월 단기 집중 프로젝트 퍼포먼스 팀원으로, 내부 총 콘텐츠팀(5명) 및 퍼포먼스팀(2명)과의 긴밀한 협업",
      environment: "RFP(제안요청서) 요구사항 광고 클릭률(CTR) 2% 이상  CTR 3.48%로 초과 달성 특히'1장만 사용'카피와 영상 포맷 조합이 CTR 5.50%로 우수한 성과를 보였습니다.",
    },
    role: {
      position: "신입 퍼포먼스 마케터 (팀원)",
      duration: "1개월",
      team: "마케팅팀 (5명), 퍼포먼스 (2명)과 협업",
      responsibilities: [
        "<strong>RFP(제안요청서) 작성</strong> 및 광고 캠페인 기획서 개발 (목표 KPI, 예산, 전략 포함)", // RFP 및 기획서 강조
        "<strong>광고 예산 책정 및 Meta(Facebook) 광고 플랫폼을 통한 캠페인 전략 수립 및 실행</strong>", // 예산 책정 및 Meta 광고 강조
        "타겟 오디언스 세분화 및 맞춤형 광고 소재 기획 (콘텐츠팀 협업)",
        "캠페인 데이터 실시간 모니터링 및 일일/주간 성과 리포트 작성",
        "<strong>A/B 테스트를 통한 광고 소재 및 타겟팅 최적화 방안 제안 및 적용</strong>", // 최적화 방안 강조
        "성과 개선안 도출 및 최종 보고서 작성, 내부 공유", // 보고서 및 개선안 강조
      ],
    },
    results: {
      metrics: [
        { label: "CTR (클릭률)", value: "3.45%", change: "목표 (2%) 대비 초과 달성" },
        { label: "광고 도달률", value: "XX%", change: "YY" },
        { label: "CPC (클릭당 비용)", value: "$XX", change: "YY" },
        { label: "페이지 방문수", value: "XX", change: "YY" },
      ],
      insights: [
        "초기 예상 CTR 2%를 크게 상회하는 3.45% 달성, 효율적인 고객 유입 검증",
        "비히디 서비스의 주요 타겟 오디언스(20대 여성) 대상 맞춤형 광고 소재의 높은 전환 기여도 확인",
        "요일별, 시간대별 성과 분석을 통해 예산 집행 효율 극대화",
        "콘텐츠팀과의 긴밀한 협업으로 제작된 시즈널 캠페인 소재의 높은 반응률 입증",
      ],
      growth:
      "<string>RFP 작성 및 캠페인 기획의 중요성 체득 및 실무 역량 강화.</strong> Meta(Facebook) 광고 플랫폼의 고급 기능 활용 능력 향상. 단기 프로젝트 내에서 데이터 기반 의사결정과 빠른 실행의 중요성 이해 및 적용. 콘텐츠팀과의 협업을 통해 마케팅 커뮤니케이션 능력 향상.", // 성장 경험 구체화 및 협업 강조
      applicableInsights: [
        "명확한 RFP의 요구사항은 캠페인 목표 달성의 핵심 요소임을 확인",
        "Meta 광고의 정교한 타겟팅 및 최적화 기능을 활용한 성과 개선 가능성 입증",
        "콘텐츠와 퍼포먼스팀 간의 유기적인 협업이 캠페인 성공에 필수적임을 경험",
        "단기 프로젝트에서도 데이터 기반의 빠른 A/B 테스트가 효율 증대에 기여",
        "유연한 커뮤니케이션은 마케팅팀의 파워를 불러일으킨다는 경험"
      ],
    },
  },
  {
    id: "saas-lead-generation",
    title: "B2B SaaS Lead Generation System",
    subtitle: "Enterprise Sales Pipeline Optimization",
    category: "Performance Marketing",
    featured: true,
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["LinkedIn Ads", "Marketing Automation", "Lead Scoring", "CRM"],
    overview: {
      purpose: "HR 기술 분야 B2B SaaS 플랫폼의 엔터프라이즈 고객 대상 고품질 리드 생성",
      context: "공격적인 확장 목표 달성을 위한 영업 파이프라인 확장 및 리드 품질 개선 필요",
      environment: "복잡한 영업 사이클과 다수 의사결정자, 고가치 계약의 엔터프라이즈 SaaS 환경",
    },
    role: {
      position: "Senior Performance Marketing Specialist",
      duration: "8개월",
      team: "성장팀 6명, 영업팀 및 제품팀과 긴밀한 협업",
      responsibilities: [
        "C레벨 임원 및 HR 디렉터 타겟 LinkedIn 광고 캠페인 설계 및 실행",
        "리드 육성 및 스코링을 위한 포괄적 마케팅 자동화 워크플로우 구현",
        "구매자 여정 단계별 맞춤 콘텐츠 마케팅 전략 수립",
        "행동 및 인구통계학적 데이터 활용 예측 리드 스코링 모델 개발",
        "원활한 리드 전달을 위한 마케팅 도구와 Salesforce CRM 통합",
      ],
    },
    results: {
      metrics: [
        { label: "월 적격 리드 생성", value: "450개", change: "+250%" },
        { label: "리드당 비용", value: "$85", change: "-60%" },
        { label: "영업 적격 리드 비율", value: "85%", change: "+40%" },
        { label: "파이프라인 가치", value: "$2.4M", change: "+320%" },
      ],
      insights: [
        "LinkedIn 아웃리치에서 개인화된 비디오 메시지 활용 시 응답률 40% 증가",
        "고려 단계에서 업계별 케이스 스터디가 가장 효과적인 전환 도구로 확인",
        "멀티터치 어트리뷰션 분석 결과 콘텐츠 마케팅이 성사된 거래의 65%에 기여",
        "일반 HR 전문가 대상보다 의사결정자 직접 타겟팅이 더 효과적",
      ],
      growth:
        "B2B 마케팅 자동화, 복잡한 어트리뷰션 모델링, 엔터프라이즈 영업 프로세스에 대한 깊은 전문성 개발. CRM 통합 및 리드 스코링 방법론 숙련도 향상.",
      applicableInsights: [
        "비디오 개인화 전략은 모든 B2B 아웃리치에 적용 가능",
        "업계별 콘텐츠 접근법은 다른 B2B 섹터로 전이 가능",
        "멀티터치 어트리뷰션 원칙은 복잡한 영업 사이클에 유용",
      ],
    },
  },
  {
    id: "portfolio-website",
    title: "Interactive Portfolio Website",
    subtitle: "Modern React-based Portfolio Platform",
    category: "Frontend Development",
    featured: true,
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    overview: {
      purpose: "마케팅 프로젝트와 기술적 역량을 효과적으로 보여주는 현대적이고 반응형 포트폴리오 웹사이트 구축",
      context: "마케팅 전문성과 프론트엔드 개발 능력을 동시에 입증할 수 있는 전문적인 온라인 존재감 필요",
      environment: "최신 웹 기술과 사용자 경험 모범 사례에 중점을 둔 개인 프로젝트",
    },
    role: {
      position: "Full-Stack Developer & UX Designer",
      duration: "3주",
      team: "개인 프로젝트, 디자인 커뮤니티 피드백 수렴",
      responsibilities: [
        "Figma를 활용한 사용자 인터페이스 및 사용자 경험 설계",
        "React, Next.js, TypeScript를 사용한 반응형 웹사이트 개발",
        "Framer Motion을 활용한 부드러운 애니메이션 및 인터랙션 구현",
        "Next.js 모범 사례를 통한 성능 및 SEO 최적화",
        "자동화된 CI/CD 파이프라인을 통한 배포 및 호스팅 구성",
      ],
    },
    results: {
      metrics: [
        { label: "페이지 로드 속도", value: "0.8초", change: "95th percentile" },
        { label: "Lighthouse 성능 점수", value: "98/100", change: "Performance" },
        { label: "모바일 반응성", value: "100%", change: "All devices" },
        { label: "접근성 점수", value: "96/100", change: "WCAG AA" },
      ],
      insights: [
        "컴포넌트 기반 아키텍처로 개발 효율성과 유지보수성 크게 향상",
        "TypeScript 도입으로 개발 과정에서 버그 약 60% 감소",
        "모바일 사용자 경험을 위한 애니메이션 성능 최적화가 핵심",
        "SEO 최적화로 개인 브랜딩을 위한 검색 가시성 개선",
      ],
      growth: "React 생태계와 현대적 CSS에 대한 프론트엔드 개발 역량 강화. 성능 최적화 및 접근성 모범 사례 경험 축적.",
      applicableInsights: [
        "컴포넌트 주도 개발 접근법은 모든 React 프로젝트에 적용 가능",
        "성능 최적화 기법은 클라이언트 프로젝트로 전이 가능",
        "접근성 우선 설계 원칙은 모든 웹 개발에 가치 있음",
      ],
    },
  },
  {
    id: "ecommerce-dashboard",
    title: "E-commerce Analytics Dashboard",
    subtitle: "Real-time Performance Monitoring System",
    category: "Frontend Development",
    featured: false,
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js"],
    overview: {
      purpose: "이커머스 마케팅 캠페인의 실시간 성과 모니터링 및 데이터 시각화 대시보드 개발",
      context: "복잡한 마케팅 데이터를 직관적으로 이해할 수 있는 시각화 도구 필요",
      environment: "빠른 의사결정이 필요한 퍼포먼스 마케팅 환경",
    },
    role: {
      position: "Frontend Developer & Data Visualization Specialist",
      duration: "4주",
      team: "개발팀 3명, 마케팅팀과 협업",
      responsibilities: [
        "React 기반 대시보드 인터페이스 설계 및 구현",
        "D3.js와 Chart.js를 활용한 인터랙티브 데이터 시각화",
        "실시간 데이터 업데이트를 위한 WebSocket 연결 구현",
        "PostgreSQL 데이터베이스와의 효율적인 데이터 쿼리 최적화",
        "반응형 디자인으로 모바일 환경에서도 최적화된 사용자 경험 제공",
      ],
    },
    results: {
      metrics: [
        { label: "데이터 로딩 시간", value: "1.2초", change: "-70%" },
        { label: "사용자 만족도", value: "4.8/5", change: "+60%" },
        { label: "의사결정 속도", value: "3배", change: "향상" },
        { label: "모바일 사용률", value: "45%", change: "+120%" },
      ],
      insights: [
        "실시간 데이터 시각화로 캠페인 최적화 반응 시간 대폭 단축",
        "직관적인 차트 디자인이 비기술직 팀원들의 데이터 활용도 증가",
        "모바일 최적화로 언제 어디서나 성과 모니터링 가능",
        "커스텀 알림 시스템으로 중요 지표 변화 즉시 감지",
      ],
      growth:
        "데이터 시각화 라이브러리 활용 능력과 실시간 웹 애플리케이션 개발 경험 축적. 사용자 중심 대시보드 설계 역량 개발.",
      applicableInsights: [
        "실시간 데이터 시각화 패턴은 다양한 비즈니스 도메인에 적용 가능",
        "사용자 중심 대시보드 설계 원칙은 모든 데이터 제품에 유용",
        "성능 최적화 기법은 대용량 데이터 처리 애플리케이션에 전이 가능",
      ],
    },
  },
]
