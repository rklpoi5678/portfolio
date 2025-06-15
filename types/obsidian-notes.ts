"use client"

// Enhanced Obsidian notes data structure for the Learn page
// Users can easily add new notes by following the same format

export interface ObsidianNote {
  id: string
  title: string
  content: string
  summary: string
  tags: string[]
  category: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  readTime: string
  lastModified: string
  created: string
  author: {
    name: string
    avatar?: string
    bio?: string
  }
  status: "Published" | "Draft" | "Archived"
  relatedNotes: string[]
  attachments?: string[]
  backlinks: string[]
  wordCount: number
  rating: number
  students: number
  type: "Tutorial" | "Course" | "Article" | "Video"
}

export interface NoteCategory {
  id: string
  name: string
  description: string
  noteCount: number
  color: string
}

export interface LearningStats {
  totalNotes: number
  categoriesCount: number
  totalReadTime: string
  lastUpdated: string
  totalStudents: number
  averageRating: number
}

// Enhanced Obsidian notes data
export const obsidianNotes: ObsidianNote[] = [
  {
    id: "admob",
    title: "AdMob 기초 개념 정리",
    content: `# AdMob 기초 개념 정리

## 개요
AdMob은 Google에서 제공하는 광고 플랫폼입니다.

## 핵심 개념

### 1. 컴포넌트 (Components)
React의 가장 기본적인 구성 요소입니다.

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

### 2. JSX (JavaScript XML)
JavaScript 안에서 HTML과 유사한 문법을 사용할 수 있게 해주는 확장 문법입니다.

\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`

### 3. Props
컴포넌트에 전달되는 속성들입니다.

\`\`\`jsx
function App() {
  return <Welcome name="Sara" />;
}
\`\`\`

### 4. State
컴포넌트의 상태를 관리하는 객체입니다.

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## 생명주기 (Lifecycle)
React 컴포넌트는 생성, 업데이트, 제거의 과정을 거칩니다.

### useEffect Hook
함수형 컴포넌트에서 생명주기를 관리할 수 있습니다.

\`\`\`jsx
import { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## 결론
React의 기초 개념들을 이해하면 더 복잡한 애플리케이션을 구축할 수 있는 기반이 됩니다.`,
    summary: "React의 핵심 개념인 컴포넌트, JSX, Props, State, 생명주기, 이벤트 처리 등을 정리한 학습 노트입니다.",
    tags: ["React", "JavaScript", "Frontend", "웹개발", "컴포넌트"],
    category: "Frontend Development",
    difficulty: "Beginner",
    readTime: "15분",
    lastModified: "2024-01-20",
    created: "2024-01-15",
    author: {
      name: "김윤기",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "프론트엔드",
    },
    status: "Published",
    relatedNotes: ["javascript-es6", "react-hooks", "component-patterns"],
    backlinks: ["react-hooks", "frontend-roadmap"],
    wordCount: 1250,
    rating: 4.8,
    students: 2547,
    type: "Tutorial",
  },
  {
    id: "javascript-es6",
    title: "JavaScript ES6+ 주요 기능",
    content: `# JavaScript ES6+ 주요 기능

## 개요
ES6(ECMAScript 2015)부터 JavaScript에 추가된 주요 기능들을 정리한 노트입니다.

## 1. let과 const
기존의 var 대신 사용하는 새로운 변수 선언 방식입니다.

\`\`\`javascript
// let: 재할당 가능
let name = "John";
name = "Jane"; // OK

// const: 재할당 불가능
const age = 25;
// age = 26; // Error!
\`\`\`

## 2. 화살표 함수 (Arrow Functions)
함수를 더 간결하게 작성할 수 있습니다.

\`\`\`javascript
// 기존 함수
function add(a, b) {
  return a + b;
}

// 화살표 함수
const add = (a, b) => a + b;
\`\`\`

## 결론
ES6+의 새로운 기능들을 활용하면 더 깔끔하고 효율적인 JavaScript 코드를 작성할 수 있습니다.`,
    summary:
      "ES6+에서 추가된 let/const, 화살표 함수, 템플릿 리터럴, 구조 분해 할당 등 주요 기능들을 정리한 학습 노트입니다.",
    tags: ["JavaScript", "ES6", "ES2015", "모던 JavaScript", "문법"],
    category: "JavaScript",
    difficulty: "Intermediate",
    readTime: "20분",
    lastModified: "2024-01-18",
    created: "2024-01-10",
    author: {
      name: "김윤기",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "풀스택",
    },
    status: "Published",
    relatedNotes: ["react-fundamentals", "typescript-basics", "async-programming"],
    backlinks: ["react-fundamentals", "modern-javascript"],
    wordCount: 1800,
    rating: 4.7,
    students: 1823,
    type: "Course",
  },
  {
    id: "react-hooks",
    title: "React Hooks 완벽 가이드",
    content: `# React Hooks 완벽 가이드

## 개요
React 16.8에서 도입된 Hooks는 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해주는 기능입니다.

## 1. useState Hook
컴포넌트의 상태를 관리하는 가장 기본적인 Hook입니다.

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## 결론
React Hooks는 함수형 컴포넌트에서 상태와 생명주기를 관리할 수 있게 해주는 강력한 기능입니다.`,
    summary:
      "React Hooks의 주요 기능들(useState, useEffect, useContext, useReducer 등)과 커스텀 Hook 작성 방법을 정리한 학습 노트입니다.",
    tags: ["React", "Hooks", "useState", "useEffect", "함수형 컴포넌트"],
    category: "Frontend Development",
    difficulty: "Intermediate",
    readTime: "25분",
    lastModified: "2024-01-22",
    created: "2024-01-20",
    author: {
      name: "김윤기",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "React",
    },
    status: "Published",
    relatedNotes: ["react-fundamentals", "component-patterns", "react-performance"],
    backlinks: ["react-fundamentals", "modern-react"],
    wordCount: 2100,
    rating: 4.9,
    students: 3421,
    type: "Course",
  },
  {
    id: "typescript-basics",
    title: "TypeScript 기초 문법",
    content: `# TypeScript 기초 문법

## 개요
TypeScript는 Microsoft에서 개발한 JavaScript의 상위 집합 언어로, 정적 타입을 지원합니다.

## 1. 기본 타입
TypeScript에서 제공하는 기본 타입들입니다.

\`\`\`typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
\`\`\`

## 결론
TypeScript의 타입 시스템을 활용하면 더 안전하고 유지보수하기 쉬운 코드를 작성할 수 있습니다.`,
    summary: "TypeScript의 기본 타입, 인터페이스, 클래스, 제네릭, 유니온 타입 등 핵심 문법을 정리한 학습 노트입니다.",
    tags: ["TypeScript", "타입", "인터페이스", "제네릭", "정적 타입"],
    category: "TypeScript",
    difficulty: "Intermediate",
    readTime: "30분",
    lastModified: "2024-01-25",
    created: "2024-01-22",
    author: {
      name: "김윤기",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "TypeScript",
    },
    status: "Published",
    relatedNotes: ["javascript-es6", "react-typescript", "advanced-typescript"],
    backlinks: ["react-typescript", "type-safety"],
    wordCount: 2500,
    rating: 4.6,
    students: 1956,
    type: "Tutorial",
  },
  {
    id: "css-grid-flexbox",
    title: "CSS Grid와 Flexbox 마스터하기",
    content: `# CSS Grid와 Flexbox 마스터하기

## 개요
CSS Grid와 Flexbox는 현대적인 웹 레이아웃을 구성하는 핵심 기술입니다.

## Flexbox 기초
\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

## 결론
CSS Grid와 Flexbox를 적절히 조합하여 사용하면 복잡한 레이아웃도 깔끔하게 구현할 수 있습니다.`,
    summary:
      "CSS Grid와 Flexbox의 핵심 개념과 실용적인 사용법, 그리고 두 기술을 언제 어떻게 사용할지에 대한 가이드입니다.",
    tags: ["CSS", "Grid", "Flexbox", "레이아웃", "반응형"],
    category: "CSS",
    difficulty: "Intermediate",
    readTime: "35분",
    lastModified: "2024-01-28",
    created: "2024-01-25",
    author: {
      name: "김윤기",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "CSS",
    },
    status: "Published",
    relatedNotes: ["responsive-design", "css-animations", "modern-css"],
    backlinks: ["responsive-design", "layout-techniques"],
    wordCount: 2800,
    rating: 4.8,
    students: 2134,
    type: "Course",
  },
  {
    id: "node-js-basics",
    title: "Node.js 백엔드 개발 입문",
    content: `# Node.js 백엔드 개발 입문

## 개요
Node.js를 사용한 서버 사이드 개발의 기초를 배워보겠습니다.

## Express.js 시작하기
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
\`\`\`

## 결론
Node.js는 JavaScript로 서버 개발을 할 수 있게 해주는 강력한 플랫폼입니다.`,
    summary: "Node.js와 Express.js를 사용한 백엔드 개발의 기초부터 실제 API 구축까지 다루는 입문 가이드입니다.",
    tags: ["Node.js", "Express", "Backend", "API", "서버"],
    category: "Backend Development",
    difficulty: "Beginner",
    readTime: "40분",
    lastModified: "2024-01-30",
    created: "2024-01-28",
    author: {
      name: "김윤기",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "백엔드",
    },
    status: "Published",
    relatedNotes: ["javascript-es6", "database-design", "api-design"],
    backlinks: ["fullstack-development", "server-architecture"],
    wordCount: 3200,
    rating: 4.5,
    students: 1678,
    type: "Course",
  },
]

// Note categories
export const noteCategories: NoteCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    description: "React, Vue, Angular 등 프론트엔드 개발 관련 노트",
    noteCount: obsidianNotes.filter((note) => note.category === "Frontend Development").length,
    color: "blue",
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "JavaScript 언어와 관련된 모든 내용",
    noteCount: obsidianNotes.filter((note) => note.category === "JavaScript").length,
    color: "yellow",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "TypeScript 타입 시스템과 고급 기능들",
    noteCount: obsidianNotes.filter((note) => note.category === "TypeScript").length,
    color: "blue",
  },
  {
    id: "css",
    name: "CSS",
    description: "CSS 스타일링과 레이아웃 기법들",
    noteCount: obsidianNotes.filter((note) => note.category === "CSS").length,
    color: "purple",
  },
  {
    id: "backend",
    name: "Backend Development",
    description: "서버 개발과 API 구축 관련 내용",
    noteCount: obsidianNotes.filter((note) => note.category === "Backend Development").length,
    color: "green",
  },
]

// Learning statistics
export const learningStats: LearningStats = {
  totalNotes: obsidianNotes.length,
  categoriesCount: noteCategories.length,
  totalReadTime: `${obsidianNotes.reduce((total, note) => total + Number.parseInt(note.readTime), 0)}분`,
  lastUpdated: obsidianNotes.reduce(
    (latest, note) => (new Date(note.lastModified) > new Date(latest) ? note.lastModified : latest),
    obsidianNotes[0]?.lastModified || "",
  ),
  totalStudents: obsidianNotes.reduce((total, note) => total + note.students, 0),
  averageRating: Number(
    (obsidianNotes.reduce((total, note) => total + note.rating, 0) / obsidianNotes.length).toFixed(1),
  ),
}

// Utility functions
export function getNoteById(id: string): ObsidianNote | null {
  return obsidianNotes.find((note) => note.id === id) || null
}

export function getNotesByCategory(category: string): ObsidianNote[] {
  return obsidianNotes.filter((note) => note.category === category)
}

export function getNotesByTag(tag: string): ObsidianNote[] {
  return obsidianNotes.filter((note) => note.tags.includes(tag))
}

export function getNotesByDifficulty(difficulty: string): ObsidianNote[] {
  return obsidianNotes.filter((note) => note.difficulty === difficulty)
}

export function getNotesByType(type: string): ObsidianNote[] {
  return obsidianNotes.filter((note) => note.type === type)
}

export function getRelatedNotes(noteId: string, limit = 3): ObsidianNote[] {
  const currentNote = getNoteById(noteId)
  if (!currentNote) return []

  const related = obsidianNotes
    .filter((note) => note.id !== noteId)
    .filter(
      (note) =>
        note.category === currentNote.category ||
        note.tags.some((tag) => currentNote.tags.includes(tag)) ||
        currentNote.relatedNotes.includes(note.id),
    )
    .slice(0, limit)

  return related
}

export function searchNotes(query: string): ObsidianNote[] {
  const lowercaseQuery = query.toLowerCase()
  return obsidianNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(lowercaseQuery) ||
      note.summary.toLowerCase().includes(lowercaseQuery) ||
      note.content.toLowerCase().includes(lowercaseQuery) ||
      note.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      note.author.name.toLowerCase().includes(lowercaseQuery),
  )
}

export function getAllTags(): string[] {
  const allTags = obsidianNotes.flatMap((note) => note.tags)
  return [...new Set(allTags)].sort()
}

export function getRecentNotes(limit = 5): ObsidianNote[] {
  return [...obsidianNotes]
    .sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
    .slice(0, limit)
}

export function getPopularNotes(limit = 5): ObsidianNote[] {
  return [...obsidianNotes].sort((a, b) => b.rating * b.students - a.rating * a.students).slice(0, limit)
}

export function getTrendingNotes(limit = 5): ObsidianNote[] {
  return [...obsidianNotes].sort((a, b) => b.rating - a.rating).slice(0, limit)
}

export function filterNotes(filters: {
  category?: string
  difficulty?: string
  type?: string
  tag?: string
  search?: string
}): ObsidianNote[] {
  let filtered = obsidianNotes

  if (filters.search) {
    filtered = searchNotes(filters.search)
  }

  if (filters.category && filters.category !== "all") {
    filtered = filtered.filter((note) => note.category === filters.category)
  }

  if (filters.difficulty && filters.difficulty !== "all") {
    filtered = filtered.filter((note) => note.difficulty === filters.difficulty)
  }

  if (filters.type && filters.type !== "all") {
    filtered = filtered.filter((note) => note.type === filters.type)
  }

  if (filters.tag && filters.tag !== "all") {
    filtered = filtered.filter((note) => note.tags.includes(filters.tag))
  }

  return filtered
}

export function sortNotes(notes: ObsidianNote[], sortBy: string): ObsidianNote[] {
  switch (sortBy) {
    case "recent":
      return notes.sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
    case "oldest":
      return notes.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime())
    case "title":
      return notes.sort((a, b) => a.title.localeCompare(b.title))
    case "rating":
      return notes.sort((a, b) => b.rating - a.rating)
    case "students":
      return notes.sort((a, b) => b.students - a.students)
    case "readTime":
      return notes.sort((a, b) => Number.parseInt(a.readTime) - Number.parseInt(b.readTime))
    default:
      return notes
  }
}
