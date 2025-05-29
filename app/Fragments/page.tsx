import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Badge } from "@/components/ui/badge"
import { DesignerGrid } from "@/components/designer-grid"

export default function DesignersPage() {
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
                placeholder="Search designers..."
                className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]"
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
              <p className="text-muted-foreground">나의 흔적이 지도가 되는 여정</p>
            </div>
            <div className="flex w-full items-center gap-2 md:w-auto">
              <div className="relative md:hidden">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search designers..." className="w-full pl-8" />
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            <Badge variant="outline" className="rounded-full px-4 py-1">
              전체
            </Badge>
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              UI/UX
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1">
              그래픽 디자인
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1">
              일러스트레이션
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1">
              3D
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1">
              모션
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1">
              사진
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1">
              개발
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1">
              마케팅
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1">
              PR
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1">
              비즈니스
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1">
              매니지먼트
            </Badge>
          </div>

          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="mb-6 w-full md:w-auto">
              <TabsTrigger value="recent" className="flex-1 md:flex-none">
                최신
              </TabsTrigger>
              <TabsTrigger value="trending" className="flex-1 md:flex-none">
                인기
              </TabsTrigger>
              <TabsTrigger value="old" className="flex-1 md:flex-none">
                오래된
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="mt-0">
              <DesignerGrid />
            </TabsContent>
            <TabsContent value="trending" className="mt-0">
              <DesignerGrid />
            </TabsContent>
            <TabsContent value="old" className="mt-0">
              <DesignerGrid />
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
