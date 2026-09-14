# Shin Jiho Portfolio v2

Next.js App Router 기반 포트폴리오입니다.

## 페이지 구조

- `/` : Home
- `/works` : 전체 프로젝트 + 카테고리 필터
- `/works/[slug]` : 프로젝트 상세 페이지

## 프로젝트 추가 방법

`data/projects.ts` 파일의 `projects` 배열에 객체 하나를 추가하면 됩니다.

```ts
{
  slug: "new-project",
  title: "NEW PROJECT",
  subtitle: "Short subtitle",
  category: "Web",
  period: "2026.09",
  description: "한 줄 설명",
  summary: "프로젝트 요약",
  tech: ["Next.js", "TypeScript"],
  role: ["내가 맡은 역할"],
  highlights: ["핵심 기능 1", "핵심 기능 2", "핵심 기능 3"],
  problem: "어떤 문제가 있었는지",
  solution: "어떻게 해결했는지",
  outcome: "결과가 어땠는지",
  github: "https://github.com/...",
  featured: false,
  accent: "WEB"
}
```

`featured: true`를 주면 Home의 대표 프로젝트 영역에 노출됩니다.
현재 Home에서는 앞의 3개 featured 프로젝트만 보여줍니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## Vercel

GitHub 리포지토리에 푸시한 뒤 Vercel에 연결하면 됩니다.
Next.js 프로젝트의 `package.json`이 있는 폴더를 Root Directory로 지정하세요.
