"use client"

import { useState } from "react"
import { Search, FileText, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  caseStudies,
  caseStudyStats,
  getAllCategories,
  getAllDocumentTypes,
  getAllTechStacks,
} from "@/types/case-studies"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

export default function CaseStudyPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedDocTypes, setSelectedDocTypes] = useState<string[]>([])
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("newest")

  const categories = getAllCategories()
  const documentTypes = getAllDocumentTypes()
  const techStacks = getAllTechStacks()

  // Filter and search logic
  const filteredCaseStudies = caseStudies.filter((cs) => {
    const matchesSearch =
      searchQuery === "" ||
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(cs.category)
    const matchesDocType = selectedDocTypes.length === 0 || selectedDocTypes.includes(cs.documentType)
    const matchesTechStack =
      selectedTechStack.length === 0 || selectedTechStack.some((tech) => cs.techStack.includes(tech))

    return matchesSearch && matchesCategory && matchesDocType && matchesTechStack
  })

  // Sort logic
  const sortedCaseStudies = [...filteredCaseStudies].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      case "oldest":
        return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
      case "title":
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const handleDocTypeChange = (docType: string, checked: boolean) => {
    if (checked) {
      setSelectedDocTypes([...selectedDocTypes, docType])
    } else {
      setSelectedDocTypes(selectedDocTypes.filter((d) => d !== docType))
    }
  }

  const handleTechStackChange = (tech: string, checked: boolean) => {
    if (checked) {
      setSelectedTechStack([...selectedTechStack, tech])
    } else {
      setSelectedTechStack(selectedTechStack.filter((t) => t !== tech))
    }
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedDocTypes([])
    setSelectedTechStack([])
    setSearchQuery("")
  }

  return (
    <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container flex h-16 items-center px-4 sm:px-8">
              <MainNav />
              <div className="ml-auto flex items-center space-x-4">
                <div className="relative hidden md:flex">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search jobs..." className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]" />
                </div>
                <Button>포스트</Button>
                <UserNav />
              </div>
            </div>
        </header>
      <div className="container px-4 py-6 sm:px-8 md:py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Case Study</h1>
          <p className="max-w-3xl text-lg text-gray-600">
            "모든 프로젝트는 하나의 문제에서 시작됐습니다. 이 Case Study는 그 문제를 어떻게 정의했고, 어떤 방식으로
            접근했으며, 결과적으로 어떤 선택을 했는지에 대한 기록입니다."
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{caseStudyStats.totalCaseStudies}</div>
              <div className="text-sm text-gray-600">총 케이스 스터디</div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{caseStudyStats.completedProjects}</div>
              <div className="text-sm text-gray-600">완료된 프로젝트</div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{caseStudyStats.inProgressProjects}</div>
              <div className="text-sm text-gray-600">진행 중인 프로젝트</div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{caseStudyStats.totalDocuments}</div>
              <div className="text-sm text-gray-600">문서 자료</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Left Sidebar - Filters */}
          <div className="space-y-6">
            <Card className="border-0 bg-white/70 shadow-md backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">필터</h3>
                  <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                    초기화
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">검색</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      type="search"
                      placeholder="케이스 스터디 검색..."
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Document Types */}
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-700">문서 유형</h4>
                  <div className="space-y-2">
                    {documentTypes.map((docType) => (
                      <div key={docType} className="flex items-center space-x-2">
                        <Checkbox
                          id={`doc-${docType}`}
                          checked={selectedDocTypes.includes(docType)}
                          onCheckedChange={(checked) => handleDocTypeChange(docType, checked as boolean)}
                        />
                        <label htmlFor={`doc-${docType}`} className="text-sm text-gray-600">
                          {docType}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-700">카테고리</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`cat-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                        />
                        <label htmlFor={`cat-${category}`} className="text-sm text-gray-600">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-700">기술 스택</h4>
                  <div className="space-y-2">
                    {techStacks.slice(0, 8).map((tech) => (
                      <div key={tech} className="flex items-center space-x-2">
                        <Checkbox
                          id={`tech-${tech}`}
                          checked={selectedTechStack.includes(tech)}
                          onCheckedChange={(checked) => handleTechStackChange(tech, checked as boolean)}
                        />
                        <label htmlFor={`tech-${tech}`} className="text-sm text-gray-600">
                          {tech}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Sort and Results Count */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">{sortedCaseStudies.length}개의 케이스 스터디를 찾았습니다</p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-white/70 backdrop-blur-sm">
                  <SelectValue placeholder="정렬 기준" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">최신순</SelectItem>
                  <SelectItem value="oldest">오래된순</SelectItem>
                  <SelectItem value="title">제목순</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Case Study Cards */}
            <div className="space-y-6">
              {sortedCaseStudies.map((caseStudy) => (
                <Link href={`/casestudy/${caseStudy.id}`} key={caseStudy.id}>
                  <Card className="group overflow-hidden border-0 bg-white/70 shadow-md backdrop-blur-sm transition-all hover:shadow-lg">
                    <div className="grid gap-6 p-6 md:grid-cols-[200px_1fr]">
                      {/* Thumbnail */}
                      <div className="aspect-video overflow-hidden rounded-lg md:aspect-[4/3]">
                        <Image
                          src={caseStudy.thumbnail || "/placeholder.svg"}
                          alt={caseStudy.title}
                          width={200}
                          height={150}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {caseStudy.documentType}
                            </Badge>
                            <Badge
                              variant={caseStudy.status === "Completed" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {caseStudy.status}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {caseStudy.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                            {caseStudy.title}
                          </h3>
                          <p className="text-sm font-medium text-blue-600">{caseStudy.subtitle}</p>
                        </div>

                        <p className="line-clamp-2 text-gray-600">{caseStudy.description}</p>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{caseStudy.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            <span>{caseStudy.role}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{caseStudy.team} 팀</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {caseStudy.techStack.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {caseStudy.techStack.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{caseStudy.techStack.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            {sortedCaseStudies.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-gray-500">검색 조건에 맞는 케이스 스터디가 없습니다.</p>
                <Button variant="outline" className="mt-4" onClick={clearAllFilters}>
                  필터 초기화
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
