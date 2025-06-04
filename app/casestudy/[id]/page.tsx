import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, Github, Globe, Figma, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCaseStudyById, getRelatedCaseStudies } from "@/types/case-studies"

export default function CaseStudyDetailPage({ params }: { params: { id: string } }) {
  const caseStudy = getCaseStudyById(params.id)
  const relatedCaseStudies = getRelatedCaseStudies(params.id, 3)

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container flex h-[50vh] items-center justify-center px-4 sm:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">케이스 스터디를 찾을 수 없습니다</h1>
            <p className="mt-2 text-gray-600">요청하신 케이스 스터디가 존재하지 않습니다.</p>
            <Button className="mt-4" asChild>
              <Link href="/casestudy">케이스 스터디 목록으로 돌아가기</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container px-4 py-12 sm:px-8 md:py-16">
        {/* Back Button */}
        <Button variant="ghost" size="sm" className="mb-8 text-gray-700 hover:text-gray-900" asChild>
          <Link href="/casestudy">
            <ArrowLeft className="mr-2 h-4 w-4" />
            케이스 스터디 목록으로 돌아가기
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Left Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">프로젝트 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-600">상태</dt>
                  <dd>
                    <Badge variant={caseStudy.status === "Completed" ? "default" : "secondary"} className="mt-1">
                      {caseStudy.status}
                    </Badge>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">카테고리</dt>
                  <dd className="mt-1 text-gray-800">{caseStudy.category}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">기간</dt>
                  <dd className="mt-1 text-gray-800">{caseStudy.duration}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">팀 규모</dt>
                  <dd className="mt-1 text-gray-800">{caseStudy.team}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">역할</dt>
                  <dd className="mt-1 text-gray-800">{caseStudy.role}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">문서 유형</dt>
                  <dd className="mt-1">
                    <Badge variant="outline">{caseStudy.documentType}</Badge>
                  </dd>
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">기술 스택</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">링크 및 자료</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {caseStudy.documentUrl && (
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href={caseStudy.documentUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      문서 다운로드
                    </Link>
                  </Button>
                )}
                {caseStudy.figmaUrl && (
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href={caseStudy.figmaUrl} target="_blank" rel="noopener noreferrer">
                      <Figma className="mr-2 h-4 w-4" />
                      Figma 디자인
                    </Link>
                  </Button>
                )}
                {caseStudy.githubUrl && (
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href={caseStudy.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub 저장소
                    </Link>
                  </Button>
                )}
                {caseStudy.liveUrl && (
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      라이브 데모
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge variant="outline">{caseStudy.documentType}</Badge>
                <Badge variant={caseStudy.status === "Completed" ? "default" : "secondary"}>{caseStudy.status}</Badge>
                <Badge variant="secondary">{caseStudy.category}</Badge>
              </div>
              <h1 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">{caseStudy.title}</h1>
              <p className="text-lg font-medium text-blue-600">{caseStudy.subtitle}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(caseStudy.publishDate).toLocaleDateString("ko-KR")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{caseStudy.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{caseStudy.team} 팀</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <Card className="overflow-hidden border-0 bg-white/70 shadow-md backdrop-blur-sm">
              <div className="aspect-video">
                <Image
                  src={caseStudy.thumbnail || "/placeholder.svg"}
                  alt={caseStudy.title}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
            </Card>

            {/* Content Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/70 backdrop-blur-sm">
                <TabsTrigger value="overview">개요</TabsTrigger>
                <TabsTrigger value="process">프로세스</TabsTrigger>
                <TabsTrigger value="results">결과</TabsTrigger>
                <TabsTrigger value="learnings">학습</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>프로젝트 개요</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-gray-700">{caseStudy.description}</p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>문제 정의</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-gray-700">{caseStudy.problemStatement}</p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>솔루션</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-gray-700">{caseStudy.solution}</p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>태그</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="process" className="mt-6 space-y-6">
                <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>주요 도전과제</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {caseStudy.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {caseStudy.process &&(
                <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>개발 프로세스</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium">{caseStudy.process[0]}</h4>
                          <p className="text-sm text-gray-600">{caseStudy.process[1]}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium">{caseStudy.process[2]}</h4>
                          <p className="text-sm text-gray-600">{caseStudy.process[3]}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium">{caseStudy.process[4]}</h4>
                          <p className="text-sm text-gray-600">{caseStudy.process[5]}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                          4
                        </div>
                        <div>
                          <h4 className="font-medium">{caseStudy.process[6]}</h4>
                          <p className="text-sm text-gray-600">{caseStudy.process[7]}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                )}
              </TabsContent>
              

              <TabsContent value="results" className="mt-6 space-y-6">
                <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>주요 성과</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1.5 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="learnings" className="mt-6 space-y-6">
                <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>핵심 학습 내용</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {caseStudy.learnings.map((learning, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1.5 h-2 w-2 rounded-full bg-purple-500 flex-shrink-0" />
                          <span className="text-gray-700">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {caseStudy.next &&(
                <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>향후 개선 방향</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
                        <h4 className="font-medium text-blue-800">{caseStudy.next[0]}</h4>
                        <p className="mt-1 text-sm text-blue-700">
                          {caseStudy.next[1]}
                        </p>
                      </div>
                      <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
                        <h4 className="font-medium text-green-800">{caseStudy.next[2]}</h4>
                        <p className="mt-1 text-sm text-green-700">
                          {caseStudy.next[3]}
                        </p>
                      </div>
                      <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                        <h4 className="font-medium text-purple-800">{caseStudy.next[4]}</h4>
                        <p className="mt-1 text-sm text-purple-700">
                          {caseStudy.next[5]}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Case Studies */}
        {relatedCaseStudies.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-800">관련 케이스 스터디</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedCaseStudies.map((related) => (
                <Link key={related.id} href={`/casestudy/${related.id}`} className="group">
                  <Card className="overflow-hidden border-0 bg-white/70 shadow-md backdrop-blur-sm transition-all hover:shadow-lg">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={related.thumbnail || "/placeholder.svg"}
                        alt={related.title}
                        width={400}
                        height={225}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {related.documentType}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {related.category}
                        </Badge>
                      </div>
                      <h3 className="mb-2 line-clamp-2 font-semibold text-gray-800 group-hover:text-blue-600">
                        {related.title}
                      </h3>
                      <p className="line-clamp-2 text-sm text-gray-600">{related.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
