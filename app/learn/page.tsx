import { Search, Clock, Star, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { FeaturedCourses } from "@/components/featured-courses"

export default function LearnPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 상단 헤더 영역 */}
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            {/* 검색창 */}
            <div className="relative hidden md:flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="튜토리얼, 강좌 검색..."
                className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
            <Button>튜토리얼 작성</Button>
            <UserNav />
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1">
        <div className="container px-4 py-6 sm:px-8 md:py-8">
          {/* 페이지 제목 및 설명 */}
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">디자인 학습</h1>
              <p className="text-muted-foreground">디자이너로 성장하는데 도움이 되는 튜토리얼, 강좌 및 리소스</p>
            </div>
            {/* 모바일용 검색창 */}
            <div className="flex w-full items-center gap-2 md:w-auto">
              <div className="relative md:hidden">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="검색..." className="w-full pl-8" />
              </div>
            </div>
          </div>

          {/* 추천 강좌 섹션 */}
          <div className="mb-8">
            <FeaturedCourses />
          </div>

          {/* 메인 콘텐츠 그리드 레이아웃 */}
          <div className="mb-8 grid gap-6 md:grid-cols-[240px_1fr]">
            {/* 왼쪽 사이드바 - 필터 옵션 */}
            <div className="space-y-6">
              {/* 카테고리 필터 */}
              <div>
                <h3 className="mb-2 text-lg font-medium">카테고리</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    전체 카테고리
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                    UI 디자인
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                    UX 디자인
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                    그래픽 디자인
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                    3D & 애니메이션
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                    디자인 도구
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                    경력 조언
                  </Button>
                </div>
              </div>

              <Separator />

              {/* 콘텐츠 유형 필터 */}
              <div>
                <h3 className="mb-2 text-lg font-medium">콘텐츠 유형</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="tutorials" className="mr-2" defaultChecked />
                    <label htmlFor="tutorials" className="text-sm">
                      튜토리얼
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="courses" className="mr-2" defaultChecked />
                    <label htmlFor="courses" className="text-sm">
                      강좌
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="articles" className="mr-2" defaultChecked />
                    <label htmlFor="articles" className="text-sm">
                      아티클
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="videos" className="mr-2" defaultChecked />
                    <label htmlFor="videos" className="text-sm">
                      비디오
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="podcasts" className="mr-2" />
                    <label htmlFor="podcasts" className="text-sm">
                      팟캐스트
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              {/* 난이도 필터 */}
              <div>
                <h3 className="mb-2 text-lg font-medium">난이도</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="beginner" className="mr-2" />
                    <label htmlFor="beginner" className="text-sm">
                      초급
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="intermediate" className="mr-2" />
                    <label htmlFor="intermediate" className="text-sm">
                      중급
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="advanced" className="mr-2" />
                    <label htmlFor="advanced" className="text-sm">
                      고급
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              {/* 필터 적용 버튼 */}
              <div className="hidden md:block">
                <Button className="w-full">필터 적용</Button>
              </div>
            </div>

            {/* 오른쪽 메인 콘텐츠 - 튜토리얼 목록 */}
            <div>
              <Tabs defaultValue="popular" className="w-full">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="popular">인기</TabsTrigger>
                    <TabsTrigger value="recent">최신</TabsTrigger>
                    <TabsTrigger value="trending">트렌딩</TabsTrigger>
                  </TabsList>
                  <Button variant="outline" size="sm" className="hidden md:flex">
                    <Filter className="mr-2 h-4 w-4" />
                    정렬
                  </Button>
                </div>

                {/* 인기 튜토리얼 탭 */}
                <TabsContent value="popular" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tutorials.map((tutorial) => (
                      <Link key={tutorial.id} href={`/learn/${tutorial.id}`}>
                        <Card className="h-full overflow-hidden hover:border-primary/50 hover:shadow-sm">
                          <div className="aspect-video w-full overflow-hidden">
                            <Image
                              src={tutorial.image || "/placeholder.svg"}
                              alt={tutorial.title}
                              width={600}
                              height={400}
                              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <CardHeader className="p-4 pb-0">
                            <div className="flex items-center justify-between">
                              <Badge variant={tutorial.type === "Course" ? "default" : "secondary"}>
                                {tutorial.type === "Course" ? "강좌" : "튜토리얼"}
                              </Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="mr-1 h-3 w-3" />
                                <span>{tutorial.duration}</span>
                              </div>
                            </div>
                            <h3 className="mt-2 line-clamp-2 text-lg font-medium">{tutorial.title}</h3>
                          </CardHeader>
                          <CardContent className="p-4 pt-2">
                            <p className="line-clamp-2 text-sm text-muted-foreground">{tutorial.description}</p>
                          </CardContent>
                          <CardFooter className="flex items-center justify-between p-4 pt-0">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage
                                  src={tutorial.author.avatar || "/placeholder.svg"}
                                  alt={tutorial.author.name}
                                />
                                <AvatarFallback>{tutorial.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs text-muted-foreground">{tutorial.author.name}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-amber-500">
                              <Star className="h-4 w-4 fill-current" />
                              <span>{tutorial.rating}</span>
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                {/* 최신 튜토리얼 탭 */}
                <TabsContent value="recent" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tutorials
                      .slice()
                      .reverse()
                      .map((tutorial) => (
                        <Link key={tutorial.id} href={`/learn/${tutorial.id}`}>
                          <Card className="h-full overflow-hidden hover:border-primary/50 hover:shadow-sm">
                            <div className="aspect-video w-full overflow-hidden">
                              <Image
                                src={tutorial.image || "/placeholder.svg"}
                                alt={tutorial.title}
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                              />
                            </div>
                            <CardHeader className="p-4 pb-0">
                              <div className="flex items-center justify-between">
                                <Badge variant={tutorial.type === "Course" ? "default" : "secondary"}>
                                  {tutorial.type === "Course" ? "강좌" : "튜토리얼"}
                                </Badge>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Clock className="mr-1 h-3 w-3" />
                                  <span>{tutorial.duration}</span>
                                </div>
                              </div>
                              <h3 className="mt-2 line-clamp-2 text-lg font-medium">{tutorial.title}</h3>
                            </CardHeader>
                            <CardContent className="p-4 pt-2">
                              <p className="line-clamp-2 text-sm text-muted-foreground">{tutorial.description}</p>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between p-4 pt-0">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage
                                    src={tutorial.author.avatar || "/placeholder.svg"}
                                    alt={tutorial.author.name}
                                  />
                                  <AvatarFallback>{tutorial.author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="text-xs text-muted-foreground">{tutorial.author.name}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-amber-500">
                                <Star className="h-4 w-4 fill-current" />
                                <span>{tutorial.rating}</span>
                              </div>
                            </CardFooter>
                          </Card>
                        </Link>
                      ))}
                  </div>
                </TabsContent>

                {/* 트렌딩 튜토리얼 탭 */}
                <TabsContent value="trending" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tutorials
                      .sort((a, b) => b.rating - a.rating)
                      .map((tutorial) => (
                        <Link key={tutorial.id} href={`/learn/${tutorial.id}`}>
                          <Card className="h-full overflow-hidden hover:border-primary/50 hover:shadow-sm">
                            <div className="aspect-video w-full overflow-hidden">
                              <Image
                                src={tutorial.image || "/placeholder.svg"}
                                alt={tutorial.title}
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                              />
                            </div>
                            <CardHeader className="p-4 pb-0">
                              <div className="flex items-center justify-between">
                                <Badge variant={tutorial.type === "Course" ? "default" : "secondary"}>
                                  {tutorial.type === "Course" ? "강좌" : "튜토리얼"}
                                </Badge>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Clock className="mr-1 h-3 w-3" />
                                  <span>{tutorial.duration}</span>
                                </div>
                              </div>
                              <h3 className="mt-2 line-clamp-2 text-lg font-medium">{tutorial.title}</h3>
                            </CardHeader>
                            <CardContent className="p-4 pt-2">
                              <p className="line-clamp-2 text-sm text-muted-foreground">{tutorial.description}</p>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between p-4 pt-0">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage
                                    src={tutorial.author.avatar || "/placeholder.svg"}
                                    alt={tutorial.author.name}
                                  />
                                  <AvatarFallback>{tutorial.author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="text-xs text-muted-foreground">{tutorial.author.name}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-amber-500">
                                <Star className="h-4 w-4 fill-current" />
                                <span>{tutorial.rating}</span>
                              </div>
                            </CardFooter>
                          </Card>
                        </Link>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* 더보기 버튼 */}
              <div className="mt-8 flex justify-center">
                <Button variant="outline">더 보기</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* 푸터 영역 */}
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">© 2024 디자인갤러리. 모든 권리 보유.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline">
              이용약관
            </Link>
            <Link href="#" className="hover:underline">
              개인정보처리방침
            </Link>
            <Link href="#" className="hover:underline">
              도움말
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const tutorials = [
  {
    id: "1", 
    title: "피그마로 디자인 시스템 마스터하기",
    description: 
      "피그마에서 디자인 시스템을 만들고, 유지하고, 구현하는 방법을 배워 디자인 워크플로우의 일관성과 효율성을 높여보세요.",
    image: "/design-systems-tutorial.png",
    type: "강좌",
    duration: "4시간 30분",
    level: "중급",
    rating: 4.9,
    author: {
      name: "김민수",
      avatar: "/diverse-person.png",
    },
    categories: ["UI 디자인", "디자인 도구"],
  },
  {
    id: "2",
    title: "사용자 리서치 기초",
    description:
      "디자인 결정을 뒷받침하고 더 사용자 중심적인 제품을 만들기 위한 필수 사용자 리서치 방법과 기술을 알아보세요.",
    image: "/user-research-tutorial.png", 
    type: "튜토리얼",
    duration: "2시간 15분",
    level: "초급",
    rating: 4.7,
    author: {
      name: "이지원",
      avatar: "/diverse-group-two.png",
    },
    categories: ["UX 디자인", "리서치"],
  },
  {
    id: "3",
    title: "디지털 제품을 위한 고급 타이포그래피",
    description:
      "타이포그래피 스킬을 한 단계 높이고 웹사이트와 앱을 위한 아름답고, 가독성 있으며, 접근성 높은 타입 시스템을 만드는 법을 배워보세요.",
    image: "/typography-tutorial.png",
    type: "강좌",
    duration: "3시간 45분", 
    level: "고급",
    rating: 4.8,
    author: {
      name: "박서준",
      avatar: "/diverse-group-outdoors.png",
    },
    categories: ["타이포그래피", "UI 디자인"],
  },
  {
    id: "4",
    title: "블렌더로 시작하는 3D 디자인 입문",
    description:
      "블렌더로 3D 디자인을 시작해보세요. 모델링, 텍스처링, 라이팅, 렌더링의 기초를 배웁니다.",
    image: "/3d-design-tutorial.png",
    type: "강좌",
    duration: "6시간 20분",
    level: "초급",
    rating: 4.6,
    author: {
      name: "정유진",
      avatar: "/diverse-group-four.png",
    },
    categories: ["3D & 애니메이션", "디자인 도구"],
  },
  {
    id: "5",
    title: "접근성을 고려한 디자인",
    description: "장애가 있는 사용자를 포함한 모든 사람을 위한 포용적인 디자인을 만드는 방법을 배워보세요.",
    image: "/accessibility-tutorial.png",
    type: "튜토리얼",
    duration: "1시간 45분",
    level: "중급",
    rating: 4.9,
    author: {
      name: "한소희",
      avatar: "/diverse-group-five.png",
    },
    categories: ["UI 디자인", "UX 디자인", "접근성"],
  },
  {
    id: "6",
    title: "효과적인 디자인 포트폴리오 만들기",
    description:
      "당신의 작업을 효과적으로 보여주고 꿈꾸는 디자인 직무에 도달하는데 도움이 되는 포트폴리오를 만드는 방법을 배워보세요.",
    image: "/portfolio-tutorial.png",
    type: "튜토리얼", 
    duration: "2시간 10분",
    level: "전체",
    rating: 4.7,
    author: {
      name: "최도윤",
      avatar: "/diverse-group-six.png",
    },
    categories: ["커리어 조언", "포트폴리오"],
  },
]
