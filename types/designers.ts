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
    name: "Alex Morgan",
    avatar: "/diverse-person.png",
    location: "San Francisco, CA",
    specialty: "UI/UX Designer",
    followers: "24.3k",
    projects: 48,
    bio: "Creating intuitive digital experiences with a focus on accessibility and user-centered design.",
    featured: ["/modern-brand-identity.png", "/mobile-app-ui-design.png", "/ecommerce-website-design.png"],
    skills: ["UI Design", "UX Research", "Design Systems", "Prototyping"],
  },
]