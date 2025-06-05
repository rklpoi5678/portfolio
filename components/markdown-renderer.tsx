"use client"

import { useEffect, useState } from "react"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [renderedContent, setRenderedContent] = useState<string>("")

  useEffect(() => {
    // Simple markdown-like rendering
    // In a real application, you would use a proper markdown parser like react-markdown
    const processContent = (text: string) => {
      return (
        text
          // Headers
          .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-900">$1</h3>')
          .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900">$1</h2>')
          .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-6 text-gray-900">$1</h1>')

          // Code blocks
          .replace(
            /```(\w+)?\n([\s\S]*?)```/g,
            '<pre class="bg-gray-100 rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm">$2</code></pre>',
          )

          // Inline code
          .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>')

          // Bold
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')

          // Italic
          .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')

          // Links
          .replace(
            /\[([^\]]+)\]$$([^)]+)$$/g,
            '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>',
          )

          // Paragraphs
          .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed text-gray-700">')

          // Line breaks
          .replace(/\n/g, "<br>")
      )
    }

    const processed = processContent(content)
    setRenderedContent(`<p class="mb-4 leading-relaxed text-gray-700">${processed}</p>`)
  }, [content])

  return <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: renderedContent }} />
}
