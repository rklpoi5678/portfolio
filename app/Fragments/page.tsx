"use client"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { FragmentGrid } from "@/components/fragment-grid"
import { useMemo, useState } from "react"
import { fragments } from "@/types/fragments"
import { ChangeEventHandler } from "react"

const NoResults = () => (
  <div className="flex flex-col items-center justify-center py-10 text-center">
    <p className="text-lg font-medium">검색 결과가 없습니다</p>
    <p className="text-sm text-muted-foreground">다른 검색어로 시도해보세요</p>
  </div>
)

export default function DesignersPage() {
    const [search, setSearch] = useState("")
    const [currentTab, setCurrentTab] = useState("recent")
    
    const searchfilteredFragments = useMemo(() =>{
    return fragments.filter((fragment) => {
      const searchLower = search.toLowerCase()
      return (
        fragment.name.toLowerCase().includes(searchLower) ||
        fragment.bio.toLowerCase().includes(searchLower) ||
        fragment.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
    })
  },[search])

  const filteredFragments = useMemo (()=>{
    const filtered = searchfilteredFragments

    switch(currentTab) {
      case "recent":
        return [...filtered].sort((a,b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      
      case "trending":
        return [...filtered].sort(
          (a,b) =>
          (Number(b.views) + Number(b.followers)) -
          (Number(a.views) + Number(a.followers))
        )
      
      case "old":
        return [...filtered].sort((a,b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime())
    }
  },[searchfilteredFragments, currentTab])

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
                placeholder="Fragments 검색"
                className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]"
                value={search}
                onChange={((e) => setSearch(e.target.value)) as ChangeEventHandler<HTMLInputElement>}
              />
            </div>
            <Button>업로드</Button>
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 sm:px-8 md:py-8">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Fragments</h1>
              <p className="max-w-3xl text-lg text-gray-600">나의 흔적이 지도가 되는 여정</p>
            </div>
            <div className="flex w-full items-center gap-2 md:w-auto">
              <div className="relative md:hidden">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search designers..." className="w-full pl-8" />
              </div>
            </div>
          </div>

          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="mb-6 w-full md:w-auto">
              <TabsTrigger value="recent" className="flex-1 md:flex-none" >
                최신
              </TabsTrigger>
              <TabsTrigger value="trending" className="flex-1 md:flex-none" >
                인기
              </TabsTrigger>
              <TabsTrigger value="old" className="flex-1 md:flex-none" >
                오래된
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="mt-0">
              {searchfilteredFragments.length > 0 ? (
                <FragmentGrid />
              ): (
                <NoResults/>
              )}
            </TabsContent>
            <TabsContent value="trending" className="mt-0">
              {searchfilteredFragments.length > 0 ? (
                <FragmentGrid />
              ): (
                <NoResults/>
              )}
            </TabsContent>
            <TabsContent value="old" className="mt-0">
              {searchfilteredFragments.length > 0 ? (
                <FragmentGrid />
              ): (
                <NoResults/>
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
