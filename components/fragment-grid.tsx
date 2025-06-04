import Image from "next/image"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { fragments } from "@/types/fragments"
import { Calendar, ExternalLink, Eye } from "lucide-react"


export function FragmentGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {fragments.map((fragments) => (
        <Link key={fragments.id} href={`/Fragments/${fragments.id}`}>
          <Card className="overflow-hidden hover:border-primary/50 hover:shadow-sm transition-all">
            <CardContent className="p-0">
              {fragments.featured.length === 0 ? (
                <div className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">이 프로젝트에는 특징 이미지가 없습니다.</p>
                </div>
              ) : fragments.featured.length === 1 ? (
                  <div className="flex overflow-hidden rounded-md ">
                    <Image
                      src={fragments.featured[0] || "/placeholder.svg"}
                      alt={fragments.name.length === 1 ? `${fragments.name}'s work` : `${fragments.name}'s work`}
                      width={300}
                      height={300}
                    />
                  </div>
              ) : (
                <div className="grid grid-cols-3 gap-1">
                  {fragments.featured.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-md">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={fragments.name.length === 1 ? `${fragments.name}'s work` : `${fragments.name}'s work ${index + 1}`}
                        width={500}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={fragments.avatar || "/placeholder.svg"} alt={fragments.name || "프로필 이미지"} />
                      <AvatarFallback>{fragments.name ? fragments.name.charAt(0) : "?"}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{fragments.name || "이름 없음"}</h3>
                      <p className="text-xs text-muted-foreground">{fragments.specialty || "특기 없음"}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    팔로우
                  </Button>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{fragments.bio || "소개 없음"}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1"><Eye className="h-3 w-3"/>{fragments.views || 0}</div>
                  <div className="flex items-center gap-1"><Calendar className="h-3 w-3"/>{new Date(fragments.publishDate).toLocaleDateString("ko-KR")}</div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {fragments.tags.slice(0, 2).map((tags) => (
                    <Badge key={tags} variant="secondary" className={`font-normal ${tags === "UI/UX" ? "bg-blue-500 text-white" : ""}`}>
                      {tags}
                    </Badge>
                  ))}
                  {fragments.tags.length > 2 && (
                    <Badge variant="outline" className="font-normal">
                      +{fragments.tags.length - 2} 더보기
                    </Badge>
                  )}
                </div>
                <Button asChild className="w-full mt-5 bg-primary hover:bg-primary/80 text-white">
                  <Link href={fragments.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4"/>
                      포스트 읽기
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
