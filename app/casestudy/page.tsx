import { Search, Briefcase, MapPin, Clock } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JobsPage() {
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
            <Button>Post a Job</Button>
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 sm:px-8 md:py-8">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Case Study</h1>
              <p className="text-muted-foreground">"모든 프로젝트는 하나의 문제에서 시작됐습니다.
이 Case Study는 그 문제를 어떻게 정의했고, 어떤 방식으로 접근했으며, 결과적으로 어떤 선택을 했는지에 대한 기록입니다."</p>
            </div>
            <div className="flex w-full items-center gap-2 md:w-auto">
              <div className="relative md:hidden">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search jobs..." className="w-full pl-8" />
              </div>
            </div>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-[250px_1fr]">
            <div className="space-y-6 rounded-lg border p-4">
              <div>
                <h3 className="mb-2 font-medium">문서 유형</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="pdf" className="mr-2" />
                    <label htmlFor="pdf" className="text-sm">
                      PDF
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="hwp" className="mr-2" />
                    <label htmlFor="hwp" className="text-sm">
                      HWP
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="ppt" className="mr-2" />
                    <label htmlFor="ppt" className="text-sm">
                      PPT
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="doc" className="mr-2" />
                    <label htmlFor="doc" className="text-sm">
                      DOC
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-medium">카테고리</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="web" className="mr-2" />
                    <label htmlFor="web" className="text-sm">
                      웹 개발
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="mobile" className="mr-2" />
                    <label htmlFor="mobile" className="text-sm">
                      모바일 앱
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="ai" className="mr-2" />
                    <label htmlFor="ai" className="text-sm">
                      AI/ML
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="marketing" className="mr-2" />
                    <label htmlFor="marketing" className="text-sm">
                      마케팅
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="repair" className="mr-2" />
                    <label htmlFor="repair" className="text-sm">
                      정비
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="server" className="mr-2" />
                    <label htmlFor="server" className="text-sm">
                      서버
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-medium">기술 스택</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="react" className="mr-2" />
                    <label htmlFor="react" className="text-sm">
                      React
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="react-native" className="mr-2" />
                    <label htmlFor="react-native" className="text-sm">
                      React Native
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="next" className="mr-2" />
                    <label htmlFor="next" className="text-sm">
                      Next.js
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="python" className="mr-2" />
                    <label htmlFor="python" className="text-sm">
                      Python
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="flutter" className="mr-2" />
                    <label htmlFor="flutter" className="text-sm">
                      Flutter
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full">필터 적용</Button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Showing 152 jobs</p>
                <div className="flex items-center gap-2">
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="relevant">Most Relevant</SelectItem>
                      <SelectItem value="salary">Highest Salary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                {jobs.map((job) => (
                  <Link href={`/jobs/${job.id}`} key={job.id}>
                    <Card className="hover:border-primary/50 hover:shadow-sm">
                      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={job.company.logo || "/placeholder.svg"} alt={job.company.name} />
                            <AvatarFallback>{job.company.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{job.title}</h3>
                            <p className="text-sm text-muted-foreground">{job.company.name}</p>
                          </div>
                        </div>
                        <Badge variant={job.type === "Full-time" ? "default" : "outline"}>{job.type}</Badge>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.level}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.posted}</span>
                          </div>
                        </div>
                        <p className="mt-2 line-clamp-2 text-sm">{job.description}</p>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="font-normal">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center">
                <Button variant="outline">Load More Jobs</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">© 2024 DesignGallery. All rights reserved.</p>
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

const jobs = [
  {
    id: "1",
    title: "Senior UI/UX Designer",
    company: {
      name: "Designify",
      logo: "/diverse-group.png",
    },
    type: "Full-time",
    location: "Remote",
    level: "Senior Level",
    salary: "$90k - $120k",
    posted: "2 days ago",
    description:
      "We're looking for a Senior UI/UX Designer to join our team and help create exceptional user experiences for our products. You'll work closely with product managers, developers, and other designers.",
    skills: ["Figma", "UI Design", "User Research", "Prototyping"],
  },
  {
    id: "2",
    title: "Product Designer",
    company: {
      name: "TechVision",
      logo: "/diverse-group-two.png",
    },
    type: "Full-time",
    location: "San Francisco, CA (Hybrid)",
    level: "Mid Level",
    salary: "$80k - $100k",
    posted: "3 days ago",
    description:
      "Join our product design team to create intuitive and engaging experiences for our SaaS platform. You'll be involved in the entire product development lifecycle from research to implementation.",
    skills: ["Product Design", "Design Systems", "Wireframing", "User Testing"],
  },
  {
    id: "3",
    title: "Graphic Designer",
    company: {
      name: "Creative Studio",
      logo: "/diverse-group-outdoors.png",
    },
    type: "Contract",
    location: "Remote",
    level: "Mid Level",
    salary: "$50 - $65/hour",
    posted: "1 week ago",
    description:
      "We're seeking a talented Graphic Designer for a 6-month contract to help with our rebranding project. You'll create visual assets for both print and digital platforms.",
    skills: ["Adobe Creative Suite", "Branding", "Typography", "Illustration"],
  },
  {
    id: "4",
    title: "Motion Designer",
    company: {
      name: "AnimateX",
      logo: "/diverse-group-four.png",
    },
    type: "Full-time",
    location: "New York, NY",
    level: "Mid-Senior Level",
    salary: "$85k - $110k",
    posted: "5 days ago",
    description:
      "Create engaging motion graphics and animations for our clients' digital marketing campaigns. You'll work with a team of designers and marketers to bring static designs to life.",
    skills: ["After Effects", "Cinema 4D", "Animation", "Storyboarding"],
  },
  {
    id: "5",
    title: "Junior UX Designer",
    company: {
      name: "StartupLabs",
      logo: "/diverse-group-five.png",
    },
    type: "Full-time",
    location: "Austin, TX (Hybrid)",
    level: "Entry Level",
    salary: "$60k - $75k",
    posted: "1 day ago",
    description:
      "Great opportunity for a Junior UX Designer to join our growing team. You'll learn from experienced designers while contributing to real projects for our clients in the healthcare industry.",
    skills: ["Wireframing", "User Research", "Figma", "UI Design"],
  },
]
