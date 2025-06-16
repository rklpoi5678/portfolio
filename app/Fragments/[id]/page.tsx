'use client'
import { ArrowLeft, Mail, MapPin, ExternalLink, Share2, Youtube, FileText, Calendar, Eye, Clock, Play, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { fragments } from "@/types/fragments"
import { Card, CardContent } from "@/components/ui/card"

export default function FragmentsDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the designer data based on the ID
  const designer = fragments.find((d) => d.id === params.id) || fragments[0]


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
        <div className="relative h-48 w-full bg-muted md:h-64">
          {designer.coverImage && (
            <Image
              src={designer.coverImage || "@/public/designer-cover.png"}
              alt={`${designer.name}'s cover`}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
            <div className="container px-4 sm:px-8">
              <Button variant="ghost" size="sm" className="mb-4 text-white" asChild>
                <Link href="/designers">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  뒤로가기
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="container px-4 sm:px-8">
          <div className="relative -mt-12 flex flex-col items-center gap-4 md:-mt-16 md:flex-row md:items-end md:gap-6">
            <Avatar className="h-24 w-24 border-4 border-background md:h-32 md:w-32">
              <AvatarImage src={designer.avatar || "/placeholder.svg"} alt={designer.name} />
              <AvatarFallback>{designer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-2xl font-bold md:text-3xl">{designer.name}</h1>
              <p className="text-muted-foreground">{designer.specialty}</p>
              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{designer.location}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 mb-6 flex flex-wrap justify-center gap-6 md:justify-start">
            <div className="text-center">
              <p className="text-xl font-bold">{designer.views}</p>
              <p className="text-sm text-muted-foreground">조회수</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">{designer.followers}</p>
              <p className="text-sm text-muted-foreground">팔로워</p>
            </div>
          </div>
          
          <Separator/>
          
          {/* Starting Point */}
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* Main Content */}
            <div>
              {/* Content Header */}
              <div className="mb-8">
                <div className="mb-4 mt-5 flex items-center gap-2">
                  {designer.is_video === true ? (
                    <Badge className="bg-red-500 text-white">
                      <Youtube className="mr-1 h-3 w-3"/>
                        YouTube 영상
                    </Badge>
                  ) : (
                    <Badge className="bg-blue-500 text-white">
                      <FileText className="mr-1 h-3 w-3"/>
                        YouTube 영상
                    </Badge>
                  )}
                </div>
              </div>

              <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">{designer.name}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="mb-3 flex items-center gap-1">
                  <Calendar  className="h-4 w-4" />
                  <span>{new Date(designer.publishDate).toLocaleDateString("ko-KR")}</span>
                </div>
              </div>

              {/* Image/Thumbnail */}
              <div className="mb-8 overflow-hidden rounded-lg border-0 bg-white/70 shadow-lg backdrop-blur-sm">
                <div className="relative aspect-video">
                  <Image
                    src={designer.thumbnail || "/placeholder.svg"}
                    alt={designer.name}
                    fill
                    className="object-cover"
                  />
                  {designer.is_video === true && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="rounded-full bg-red-500 p-4 shadow-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
            {/* Content Description */}
            <Card className="mb-8 border-0 bg-white/70 shadow-md backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-semibold text-gray-800">{designer.is_video ? "영상 소개" : "포스트 소개"}</h2>
                <p className="leading-relaxed text-gray-700">{designer.description}</p>
              </CardContent>
            </Card>
            
            {/* Tags */}
            <Card className="mb-8 border-0 bg-white/70 shadow-md backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-800">
                  <Tag className="mr-2 h-5 w-5" />
                  태그
                </h3>
                <div className="flex flex-wrap gap-2">
                  {designer.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="hover:bg-orange-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Action Button */}
            <div className="text-center">
              <Button
                size="lg"
                className={designer.is_video ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"}
                asChild
              >
                <Link href={designer.url} target="_blank" rel="noopener noreferrer">
                  {designer.is_video ? (
                    <>
                      <Youtube className="mr-2 h-5 w-5" />
                      YouTube에서 영상 보기
                    </>
                  ) : (
                    <>
                      <ExternalLink className="mr-2 h-5 w-5" />
                      블로그에서 전체 글 읽기
                    </>
                  )}
                </Link>
              </Button>
            </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Content Info */}
              <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-gray-800">콘텐츠 정보</h3>
                  <Separator className="mb-4" />
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-600">유형</dt>
                      <dd className="text-gray-800">{designer.is_video ? "YouTube 영상" : "블로그 포스트"}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-600">게시일</dt>
                      <dd className="text-gray-800">{new Date(designer.publishDate).toLocaleDateString("ko-KR")}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-600">조회수</dt>
                      <dd className="text-gray-800">{designer.views}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
              
              {/* Share Section */}
              <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-gray-800">공유하기</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href={designer.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        원본 링크 열기
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: designer.name,
                            text: designer.description,
                            url: window.location.href,
                          })
                        } else {
                          navigator.clipboard.writeText(window.location.href)
                          alert("링크가 클립보드에 복사되었습니다!")
                        }
                      }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />이 페이지 공유
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">© 2024 DesignGallery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
