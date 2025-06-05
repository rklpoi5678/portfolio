"use client"
import { useState } from "react"
import { Search, Clock, Star, Filter, BookOpen } from "lucide-react"
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
import { StatsCards } from "@/components/stats-cards"

import {
  getRecentNotes,
  getPopularNotes,
  getTrendingNotes,
  filterNotes,
  sortNotes,
  noteCategories,
} from "@/types/obsidian-notes"


export default function LearnPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  const recentNotes = getRecentNotes(6)
  const popularNotes = getPopularNotes(6)
  const trendingNotes = getTrendingNotes(6)


   // Filter and search logic
  const getFilteredNotes = () => {
    const filters = {
      category: selectedCategory,
      difficulty: selectedDifficulty,
      type: selectedType,
      search: searchQuery,
    }

    const filtered = filterNotes(filters)
    return sortNotes(filtered, sortBy)
  }

  const filteredNotes = getFilteredNotes()

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedDifficulty("all")
    setSelectedType("all")
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
  }

  const handleTypeFilter = (type: string, checked: boolean) => {
    if (type === "all") {
      setSelectedType("all")
    } else {
      setSelectedType(checked ? type : "all")
    }
  }

  const handleDifficultyFilter = (difficulty: string, checked: boolean) => {
    if (difficulty === "all") {
      setSelectedDifficulty("all")
    } else {
      setSelectedDifficulty(checked ? difficulty : "all")
    }
  }
  
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
              <h1 className="text-3xl font-bold tracking-tight">Learn</h1>
              <p className="text-muted-foreground">개발 지식을 체계적으로 정리한 학습 노트들입니다. Obsidian에서 작성된 노트들을 통해 작성되었습니다.</p>
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
            <StatsCards />
          </div>

          {/* 메인 콘텐츠 그리드 레이아웃 */}
          <div className="mb-8 grid gap-6 md:grid-cols-[240px_1fr]">
            {/* 왼쪽 사이드바 - 필터 옵션 */}
            <div className="space-y-6">
              {/* 카테고리 필터 */}
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">카테고리</h3>
                <div className="space-y-2">
                  <Button
                    variant={selectedCategory === "all" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => handleCategoryFilter("all")}
                  >
                    전체 카테고리
                  </Button>
                  {noteCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.name ? "default" : "ghost"}
                      className="w-full justify-start text-gray-600"
                      onClick={() => handleCategoryFilter(category.name)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Separator />

              {/* 필터 초기화 버튼 */}
              <div className="hidden md:block">
                <Button variant="outline" className="w-full" onClick={clearFilters}>
                  필터 초기화
                </Button>
              </div>
            </div>

            {/* 오른쪽 메인 콘텐츠 - 튜토리얼 목록 */}
            <div>
              <Tabs defaultValue="popular" className="w-full">
                <div className="flex items-center justify-between">
                  <TabsList className="bg-gray-100">
                    <TabsTrigger value="popular" className="data-[state=active]:bg-white">
                      인기
                    </TabsTrigger>
                    <TabsTrigger value="recent" className="data-[state=active]:bg-white">
                      최신
                    </TabsTrigger>
                    <TabsTrigger value="trending" className="data-[state=active]:bg-white">
                      트렌딩
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* 인기 노트 탭 */}
                <TabsContent value="popular" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {popularNotes.map((note) => (
                      <Link key={note.id} href={`/learn/${note.id}`}>
                        <Card className="h-full overflow-hidden border-gray-200 transition-all hover:border-blue-300 hover:shadow-md">
                          <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                            <div className="flex h-full items-center justify-center">
                              <div className="text-center">
                                <BookOpen className="mx-auto h-12 w-12 text-blue-600" />
                                <p className="mt-2 text-sm font-medium text-blue-800">{note.type}</p>
                              </div>
                            </div>
                          </div>
                          <CardHeader className="p-4 pb-0">
                            <div className="flex items-center justify-between">
                              <Badge variant={note.type === "Course" ? "default" : "secondary"}>
                                {note.type === "Course" ? "강좌" : note.type === "Tutorial" ? "튜토리얼" : note.type}
                              </Badge>
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="mr-1 h-3 w-3" />
                                <span>{note.readTime}</span>
                              </div>
                            </div>
                            <h3 className="mt-2 line-clamp-2 text-lg font-medium text-gray-900">{note.title}</h3>
                          </CardHeader>
                          <CardContent className="p-4 pt-2">
                            <p className="line-clamp-2 text-sm text-gray-600">{note.summary}</p>
                          </CardContent>
                          <CardFooter className="flex items-center justify-between p-4 pt-0">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={note.author.avatar || "/placeholder.svg"} alt={note.author.name} />
                                <AvatarFallback>{note.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs text-gray-500">{note.author.name}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-amber-500">
                              <Star className="h-4 w-4 fill-current" />
                              <span>{note.rating}</span>
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                {/* 최신 노트 탭 */}
                <TabsContent value="recent" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {recentNotes.map((note) => (
                      <Link key={note.id} href={`/learn/${note.id}`}>
                        <Card className="h-full overflow-hidden border-gray-200 transition-all hover:border-blue-300 hover:shadow-md">
                          <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
                            <div className="flex h-full items-center justify-center">
                              <div className="text-center">
                                <BookOpen className="mx-auto h-12 w-12 text-green-600" />
                                <p className="mt-2 text-sm font-medium text-green-800">{note.type}</p>
                              </div>
                            </div>
                          </div>
                          <CardHeader className="p-4 pb-0">
                            <div className="flex items-center justify-between">
                              <Badge variant={note.type === "Course" ? "default" : "secondary"}>
                                {note.type === "Course" ? "강좌" : note.type === "Tutorial" ? "튜토리얼" : note.type}
                              </Badge>
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="mr-1 h-3 w-3" />
                                <span>{note.readTime}</span>
                              </div>
                            </div>
                            <h3 className="mt-2 line-clamp-2 text-lg font-medium text-gray-900">{note.title}</h3>
                          </CardHeader>
                          <CardContent className="p-4 pt-2">
                            <p className="line-clamp-2 text-sm text-gray-600">{note.summary}</p>
                          </CardContent>
                          <CardFooter className="flex items-center justify-between p-4 pt-0">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={note.author.avatar || "/placeholder.svg"} alt={note.author.name} />
                                <AvatarFallback>{note.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs text-gray-500">{note.author.name}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-amber-500">
                              <Star className="h-4 w-4 fill-current" />
                              <span>{note.rating}</span>
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                {/* 트렌딩 노트 탭 */}
                <TabsContent value="trending" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {trendingNotes.map((note) => (
                      <Link key={note.id} href={`/learn/${note.id}`}>
                        <Card className="h-full overflow-hidden border-gray-200 transition-all hover:border-blue-300 hover:shadow-md">
                          <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-purple-50 to-violet-100">
                            <div className="flex h-full items-center justify-center">
                              <div className="text-center">
                                <BookOpen className="mx-auto h-12 w-12 text-purple-600" />
                                <p className="mt-2 text-sm font-medium text-purple-800">{note.type}</p>
                              </div>
                            </div>
                          </div>
                          <CardHeader className="p-4 pb-0">
                            <div className="flex items-center justify-between">
                              <Badge variant={note.type === "Course" ? "default" : "secondary"}>
                                {note.type === "Course" ? "강좌" : note.type === "Tutorial" ? "튜토리얼" : note.type}
                              </Badge>
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="mr-1 h-3 w-3" />
                                <span>{note.readTime}</span>
                              </div>
                            </div>
                            <h3 className="mt-2 line-clamp-2 text-lg font-medium text-gray-900">{note.title}</h3>
                          </CardHeader>
                          <CardContent className="p-4 pt-2">
                            <p className="line-clamp-2 text-sm text-gray-600">{note.summary}</p>
                          </CardContent>
                          <CardFooter className="flex items-center justify-between p-4 pt-0">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={note.author.avatar || "/placeholder.svg"} alt={note.author.name} />
                                <AvatarFallback>{note.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs text-gray-500">{note.author.name}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-amber-500">
                              <Star className="h-4 w-4 fill-current" />
                              <span>{note.rating}</span>
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
          <p className="text-sm text-muted-foreground">© 2024 KLogBook. Copyleft.</p>
        </div>
      </footer>
    </div>
  )
}