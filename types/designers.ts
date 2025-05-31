
export interface Designer {
  id: string
  name: string
  avatar: string
  location: string
  specialty: string
  followers: string
  projects: number
  bio: string
  featured: string[]
  skills: string[]
}
export const designers: Designer[] = [{
    id: "1", 
    name: "김윤기",
    avatar: "/avatar-simple.png",
    location: "대구광역시",
    specialty: "인디해커",
    followers: "24.3k",
    projects: 8,
    bio: "끊임없이 새로운 기술을 탐구하고 도전하며 성장하는 개발자입니다.",
    featured: ["/modern-brand-identity.png", "/mobile-app-ui-design.png", "/ecommerce-website-design.png"],
    skills: ["UI 디자인", "UX 리서치", "디자인 시스템", "프로토타이핑"],
  },
]