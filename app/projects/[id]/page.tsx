import { ArrowLeft, Heart, MessageSquare, Share2, Eye } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/types/project"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { ProjectComments } from "@/components/project-comments"
import { RelatedProjects } from "@/components/related-projects"

interface ProjectPageProps {
  params: {
    id: string
  }
  
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Button>업로드</Button>
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 sm:px-8 md:py-8">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                뒤로가기
              </Link>
            </Button>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={project.creator.avatar || "/placeholder.svg"} alt={project.creator.name} />
                      <AvatarFallback>{project.creator.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{project.creator.name}</p>
                      <p className="text-xs text-muted-foreground">{project.creator.followers} followers</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-video relative rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} - ${index + 2}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold">프로젝트 정보</h2>
                <p className="mt-2 text-muted-foreground whitespace-pre-line">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <div key={tag} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <Separator className="my-8" />
              <ProjectComments commentCount={project.stats.comments} />
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">프로젝트 관심도</h3>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">조회수</span>
                    </div>
                    <p className="font-medium">{project.stats.views}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">좋아요</span>
                    </div>
                    <p className="font-medium">{project.stats.likes}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-sm">댓글</span>
                    </div>
                    <p className="font-medium">{project.stats.comments}</p>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  {project.links?.map((link) => (
                    <Button key={link.title} variant="outline" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.title}
                      </a>
                    </Button>
                  ))}
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">프로젝트 정보</h3>
                <div className="mt-4 space-y-2 text-sm">
                  {project.links?.map((link) => (
                    <div key={link.title} className="flex justify-between items-start gap-2">
                      <span className="text-muted-foreground font-bold flex-shrink-0">{link.title}</span>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline font-bold text-right break-all min-w-0"
                      >
                        {link.url}
                      </a>
                    </div>
                  ))}
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-muted-foreground flex-shrink-0">게시일</span>
                    <span className="text-right min-w-0">
                      {project.createdAt
                        ? new Date(project.createdAt).toLocaleDateString("ko-KR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "알 수 없음"}
                    </span>
                  </div>
                  {project.tools && project.tools.length > 0 && (
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-muted-foreground flex-shrink-0">Tools</span>
                      <span className="text-right min-w-0 break-words">
                        {project.tools.map((tool, idx) => (
                          <span key={tool}>
                            {tool}
                            {idx < (project.tools?.length || 0) - 1 && ', '}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                  {/* 추후 라이선스 있는것만 추가 */}
                  {/* <div className="flex justify-between items-start gap-2">
                    <span className="text-muted-foreground flex-shrink-0">License</span>
                    <span className="text-right min-w-0">All Rights Reserved</span>
                  </div> */}
                </div>
              </div>
              <RelatedProjects />
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">© 2024 KLogBook. Copyleft.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Help
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
