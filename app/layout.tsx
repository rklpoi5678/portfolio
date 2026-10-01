import type React from "react"
import "@/app/globals.css"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Providers } from "@/app/providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata = {
  title: "Kim Yoon-gi | Full-Stack Developer",
  description: "Full-stack developer and SaaS entrepreneur. Building products that solve real problems. 김윤기 - 풀스택 개발자",
  openGraph: {
    title: "Kim Yoon-gi | Full-Stack Developer",
    description: "풀스택 개발자 김윤기의 포트폴리오. SaaS 제품을 기획하고 구축합니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "Kim Yoon-gi Portfolio",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
