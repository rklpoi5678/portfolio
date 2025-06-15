"use client"

import { ArrowLeft, Clock, Star, BookOpen, Share2, Tag, Users, Calendar } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { getNoteById, getRelatedNotes } from "@/types/obsidian-notes"
import { MarkdownRenderer } from "@/components/markdown-renderer"


export default function TutorialDetailPage({ params }: { params: { id: string } }) {
  const note = getNoteById(params.id)
  const relatedNotes = getRelatedNotes(params.id, 3)

  if (!note) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container flex h-[50vh] items-center justify-center px-4 sm:px-8">
          <div className="text-center">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-gray-400" />
            <h1 className="text-2xl font-bold text-gray-900">노트를 찾을 수 없습니다</h1>
            <p className="mt-2 text-gray-600">요청하신 학습 노트가 존재하지 않습니다.</p>
            <Button className="mt-4" asChild>
              <Link href="/learn">학습 노트 목록으로 돌아가기</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="relative bg-muted bg-white">
          <div className="container px-4 py-8 sm:px-8 md:py-12">
            <Button variant="ghost" size="sm" className="mb-4" asChild>
              <Link href="/learn">
                <ArrowLeft className="mr-2 h-4 w-4" />
                학습 노트 목록으로 돌아가기
              </Link>
            </Button>

          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge variant="outline">{note.difficulty}</Badge>
                <Badge variant={note.type === "Course" ? "default" : "secondary"}>
                  {note.type === "Course" ? "강좌" : note.type === "Tutorial" ? "튜토리얼" : note.type}
                </Badge>
                <Badge variant={note.status === "Published" ? "default" : "secondary"}>{note.status}</Badge>
              </div>
              <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{note.title}</h1>
              <p className="text-lg text-gray-600">{note.summary}</p>

              {/* Author and Stats */}
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={note.author.avatar || "/placeholder.svg"} alt={note.author.name} />
                    <AvatarFallback>{note.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{note.author.name}</p>
                    <p className="text-sm text-gray-600">{note.author.bio}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{note.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{note.students.toLocaleString()} 학습자</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{note.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>작성: {new Date(note.created).toLocaleDateString("ko-KR")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>수정: {new Date(note.lastModified).toLocaleDateString("ko-KR")}</span>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                <TabsTrigger value="content" className="data-[state=active]:bg-white">
                  노트 내용
                </TabsTrigger>
                <TabsTrigger value="info" className="data-[state=active]:bg-white">
                  노트 정보
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="mt-8">
                <Card className="border-gray-200">
                  <CardContent className="p-8">
                    <MarkdownRenderer content={note.content} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="info" className="mt-8 space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>노트 메타데이터</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-600">단어 수</dt>
                      <dd className="mt-1 text-gray-900">{note.wordCount.toLocaleString()}개</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-600">예상 읽기 시간</dt>
                      <dd className="mt-1 text-gray-900">{note.readTime}</dd>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>태그</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {note.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {note.relatedNotes.length > 0 && (
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle>연결된 노트</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {note.relatedNotes.map((relatedId) => (
                          <Link
                            key={relatedId}
                            href={`/learn/${relatedId}`}
                            className="block text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            {relatedId}
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {note.backlinks.length > 0 && (
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle>백링크</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {note.backlinks.map((backlinkId) => (
                          <Link
                            key={backlinkId}
                            href={`/learn/${backlinkId}`}
                            className="block text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            {backlinkId}
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg">노트 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-600">카테고리</dt>
                  <dd className="mt-1 text-gray-900">{note.category}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">유형</dt>
                  <dd className="mt-1">
                    <Badge variant="outline">{note.type}</Badge>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">난이도</dt>
                  <dd className="mt-1">
                    <Badge variant="outline">{note.difficulty}</Badge>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">읽기 시간</dt>
                  <dd className="mt-1 text-gray-900">{note.readTime}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">평점</dt>
                  <dd className="mt-1 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{note.rating}</span>
                  </dd>
                </div>
              </CardContent>
            </Card>

            {/* Author Info */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg">작성자</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={note.author.avatar || "/placeholder.svg"} alt={note.author.name} />
                    <AvatarFallback>{note.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{note.author.name}</p>
                    <p className="text-sm text-gray-600">{note.author.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg">액션</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: note.title,
                        text: note.summary,
                        url: window.location.href,
                      })
                    } else {
                      navigator.clipboard.writeText(window.location.href)
                      alert("링크가 클립보드에 복사되었습니다!")
                    }
                  }}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  공유하기
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href={`/learn?category=${encodeURIComponent(note.category)}`}>
                    <Tag className="mr-2 h-4 w-4" />
                    같은 카테고리 보기
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg">태그</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <Link key={tag} href={`/learn?tag=${encodeURIComponent(tag)}`}>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-gray-300">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Notes */}
        {relatedNotes.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">관련 노트</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedNotes.map((related) => (
                <Link key={related.id} href={`/learn/${related.id}`}>
                  <Card className="h-full border-gray-200 transition-all hover:border-blue-300 hover:shadow-md">
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className="flex h-full items-center justify-center">
                        <div className="text-center">
                          <BookOpen className="mx-auto h-12 w-12 text-gray-600" />
                          <p className="mt-2 text-sm font-medium text-gray-800">{related.type}</p>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {related.difficulty}
                        </Badge>
                        <span className="text-xs text-gray-500">{related.readTime}</span>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">{related.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 line-clamp-3 text-sm text-gray-600">{related.summary}</p>
                      <div className="flex flex-wrap gap-1">
                        {related.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {related.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{related.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                        <span>{related.category}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <span>{related.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </main>
    </div>
  )
}