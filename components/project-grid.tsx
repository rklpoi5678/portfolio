import { Heart, MessageSquare, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Project } from "@/types/project"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="group overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <Image
              src={project.images[0] || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="line-clamp-1 font-medium">{project.title}</h3>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={project.creator.avatar || "/placeholder.svg"} alt={project.creator.name} />
                  <AvatarFallback>{project.creator.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">{project.creator.name}</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  <span>{project.stats.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-3 w-3" />
                  <span>{project.stats.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  <span>{project.stats.comments}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
