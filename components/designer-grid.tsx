import Image from "next/image"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { designers } from "@/types/designers"


export function DesignerGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {designers.map((designer) => (
        <Link key={designer.id} href={`/designers/${designer.id}`}>
          <Card className="overflow-hidden hover:border-primary/50 hover:shadow-sm transition-all">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 gap-1 p-1">
                {designer.featured.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-md">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${designer.name}'s work ${index + 1}`}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={designer.avatar || "/placeholder.svg"} alt={designer.name} />
                      <AvatarFallback>{designer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{designer.name}</h3>
                      <p className="text-xs text-muted-foreground">{designer.specialty}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{designer.bio}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {designer.skills.slice(0, 2).map((skill) => (
                    <Badge key={skill} variant="secondary" className={`font-normal ${skill === "UI/UX" ? "bg-blue-500 text-white" : ""}`}>
                      {skill}
                    </Badge>
                  ))}
                  {designer.skills.length > 2 && (
                    <Badge variant="outline" className="font-normal">
                      +{designer.skills.length - 2} more
                    </Badge>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <div>{designer.followers} followers</div>
                  <div>{designer.projects} projects</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
