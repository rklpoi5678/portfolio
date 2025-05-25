import { Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectGrid } from "@/components/project-grid"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { projects } from "@/types/project"

export default function HomePage() {
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
                placeholder="Search projects..."
                className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
            <Button>Upload Work</Button>
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 sm:px-8 md:py-8">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Discover</h1>
              <p className="text-muted-foreground">전제 진행중인 프로젝트를 확인해보세요</p>
            </div>
            <div className="flex w-full items-center gap-2 md:w-auto">
              <div className="relative md:hidden">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search projects..." className="w-full pl-8" />
              </div>
            </div>
          </div>

          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="mb-6 w-full md:w-auto">
              <TabsTrigger value="featured" className="flex-1 md:flex-none">
                Featured
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex-1 md:flex-none">
                Recent
              </TabsTrigger>
              <TabsTrigger value="popular" className="flex-1 md:flex-none">
                Popular
              </TabsTrigger>
              <TabsTrigger value="following" className="flex-1 md:flex-none">
                Following
              </TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="mt-0">
              <ProjectGrid projects={projects} />
            </TabsContent>
            <TabsContent value="recent" className="mt-0">
              <ProjectGrid projects={projects} />
            </TabsContent>
            <TabsContent value="popular" className="mt-0">
              <ProjectGrid projects={projects} />
            </TabsContent>
            <TabsContent value="following" className="mt-0">
              <ProjectGrid projects={projects} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
