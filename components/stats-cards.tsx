import { BookOpen, Calendar, Clock, Tag } from "lucide-react"
import { learningStats } from "@/types/obsidian-notes"
import { Card, CardContent } from "@/components/ui/card"

export function StatsCards() {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-gradient-to-b from-background to-muted/30 p-6 md:p-8">
<div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-gray-200">
            <CardContent className="p-6 text-center">
              <BookOpen className="mx-auto mb-2 h-8 w-8 text-blue-600" />
              <div className="text-2xl font-bold text-gray-900">{learningStats.totalNotes}</div>
              <div className="text-sm text-gray-600">총 학습 노트</div>
            </CardContent>
          </Card>
          <Card className="border-gray-200">
            <CardContent className="p-6 text-center">
              <Tag className="mx-auto mb-2 h-8 w-8 text-green-600" />
              <div className="text-2xl font-bold text-gray-900">{learningStats.categoriesCount}</div>
              <div className="text-sm text-gray-600">카테고리</div>
            </CardContent>
          </Card>
          <Card className="border-gray-200">
            <CardContent className="p-6 text-center">
              <Clock className="mx-auto mb-2 h-8 w-8 text-orange-600" />
              <div className="text-2xl font-bold text-gray-900">{learningStats.totalReadTime}</div>
              <div className="text-sm text-gray-600">총 읽기 시간</div>
            </CardContent>
          </Card>
          <Card className="border-gray-200">
            <CardContent className="p-6 text-center">
              <Calendar className="mx-auto mb-2 h-8 w-8 text-purple-600" />
              <div className="text-2xl font-bold text-gray-900">
                {new Date(learningStats.lastUpdated).toLocaleDateString("ko-KR")}
              </div>
              <div className="text-sm text-gray-600">마지막 업데이트</div>
            </CardContent>
          </Card>
        </div>
    </div>
  )
}

