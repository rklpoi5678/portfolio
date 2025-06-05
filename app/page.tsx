"use client"
import { Search } from "lucide-react"
import { useState, useMemo } from "react"
import type { ChangeEventHandler } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectGrid } from "@/components/project-grid"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { projects } from "@/types/project"

const NoResults = () => (
  <div className="flex flex-col items-center justify-center py-10 text-center">
    <p className="text-lg font-medium">검색 결과가 없습니다</p>
    <p className="text-sm text-muted-foreground">다른 검색어로 시도해보세요</p>
  </div>
)

export default function HomePage() {
  const [search, setSearch] = useState("")
  const [currentTab, setCurrnetTab] = useState("recent")

  const searchfilteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchLower = search.toLowerCase()
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        project.tools?.some(tool => tool.toLowerCase().includes(searchLower))
      )
    })
  }, [search])

  //탭별 프로젝트 필터링
  const filteredProjects = useMemo(()=>{
    const filtered = searchfilteredProjects

    switch (currentTab) {
      case "recent":
        //최신순 정렬 (createdAt기준)
        return [...filtered].sort((a,b) => new Date(b.createdAt).getTime() - new Date (a.createdAt).getTime())
      
      case "popular":
        // 인기순 정렬 (likes + views의 합 기준)
        return [...filtered].sort(
          (a, b) =>
            (Number(b.stats.likes) + Number(b.stats.views)) -
            (Number(a.stats.likes) + Number(a.stats.views))
        )
      
      case "following":
        return [...filtered].sort((a,b) => Number(b.creator.followers) - Number(a.creator.followers))
    }
  },[searchfilteredProjects, currentTab])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <div className="relative hidden md:flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="프로젝트(제목,설명,태그,도구) 검색..."
                className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]"
                value={search}
                onChange={((e) => setSearch(e.target.value)) as ChangeEventHandler<HTMLInputElement>}
              />
            </div>
            <Button>작업 업로드</Button>
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 sm:px-8 md:py-8">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Discover</h1>
              <p className="max-w-3xl text-lg text-gray-600">전제 진행중인 프로젝트를 확인해보세요</p>
            </div>
            <div className="flex w-full items-center gap-2 md:w-auto">
              <div className="relative md:hidden">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="프로젝트 검색" className="w-full pl-8" />
              </div>
            </div>
          </div>

          {/* 탭 컴포넌트 - 기본값은 '추천'으로 설정 */}
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="mb-6 w-full md:w-auto">
              {/* 최신 탭 */}
              <TabsTrigger value="recent" className="flex-1 md:flex-none">
                최신
              </TabsTrigger>
              {/* 인기 탭 */}
              <TabsTrigger value="popular" className="flex-1 md:flex-none">
                인기
              </TabsTrigger>
              {/* 팔로잉 탭 */}
              <TabsTrigger value="following" className="flex-1 md:flex-none">
                팔로잉
              </TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="mt-0">
              {searchfilteredProjects.length > 0 ? (
                <ProjectGrid projects={searchfilteredProjects} />
              ) : (
                <NoResults />
              )}
            </TabsContent>
            <TabsContent value="recent" className="mt-0">
              {searchfilteredProjects.length > 0 ? (
                <ProjectGrid projects={searchfilteredProjects} />
              ) : (
                <NoResults />
              )}
            </TabsContent>
            <TabsContent value="popular" className="mt-0">
              {searchfilteredProjects.length > 0 ? (
                <ProjectGrid projects={searchfilteredProjects} />
              ) : (
                <NoResults />
              )}
            </TabsContent>
            <TabsContent value="following" className="mt-0">
              {searchfilteredProjects.length > 0 ? (
                <ProjectGrid projects={searchfilteredProjects} />
              ) : (
                <NoResults />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">© 2024 KLogBook. Copyleft.</p>
        </div>
      </footer>
    </div>
  )
}
