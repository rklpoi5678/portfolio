
export interface Fragments {
  id: string
  name: string
  avatar: string
  coverImage: string
  location: string
  specialty: string
  views: string
  followers: string
  publishDate: string
  bio: string
  description: string
  url: string
  featured: string[]
  thumbnail: string
  tags: string[]
  is_video: Boolean
}
export const fragments: Fragments[] = [
  {
    id: "1", 
    name: "낭만배낭",
    avatar: "/낭만배낭 아바타.png",
    coverImage: "/낭만배낭 배너.png",
    location: "Global",
    specialty: "유튜브",
    views: "24.3k",
    followers: "208",
    publishDate: "2023-11-18",
    bio: "둘이서보다 하나 죽으면 알 수도 있는 채널",
    description: "",
    url: 'https://www.youtube.com/@romanticbag/videos',
    featured: ["/낭만배낭 썸네일.jpg","/낭만배낭 썸네일2.jpg","/낭만배낭 썸네일3.jpg"],
    thumbnail: "/낭만배낭 썸네일.jpg",
    tags: ["유튜브", "편집", "태국", "라오스", "베트남"],
    is_video: true
  },
  {
    id: "2", 
    name: "구구의 정보창구",
    avatar: "/구구의 정보창구 아바타.png",
    coverImage: "/구구의 정보창구 배너.png",
    location: "Tistory",
    specialty: "정보모음",
    views: "75.5k",
    followers: "1",
    publishDate: "2020-11-22",
    bio: "블로그에서 새로운 팁과 요령을 알려드립니다.",
    description: "",
    url: 'https://hatch100.xyz/',
    featured: ["/구구의 정보창구 썸네일1.png"],
    thumbnail: "/구구의 정보창구 썸네일.png",
    tags: ["블로그", "글쓰기", "정보창구"],
    is_video: false
  },
  {
    id: "3", 
    name: "해치 소식통(중단)",
    avatar: "/해치소식통 아바타.png",
    coverImage: "/해치소식통 배너.png",
    location: "Tistory",
    specialty: "정보모음",
    views: "1.4k",
    followers: "0",
    publishDate: "2023-05-31",
    bio: "소식을 빠르고 쉽게 전해드립니다.",
    description: "중단",
    url: 'https://moneyfarm.hatch100.xyz/',
    featured: ["/해치소식통 썸네일.png"],
    thumbnail: "/해치소식통 썸네일.png",
    tags: ["수익형 블로그", "글쓰기", "정보창구"],
    is_video: false
  },
]