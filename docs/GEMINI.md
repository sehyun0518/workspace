# Project Context: Mono-repo Setup

## 1. 프로젝트 개요
이 레포지토리는 **pnpm workspace**를 기반으로 한 모노레포입니다.
중앙 집중식 관리와 어플리케이션 간의 유기적인 연결을 목표로 합니다.

## 2. 기술 스택 및 툴링 (Tech Stack)
- **Package Manager:** pnpm (Workspace 모드 사용)
- **Linter & Formatter:** **Biome** (ESLint, Prettier 사용 안 함)
  - **중요:** 모든 설정은 **Root 레벨**의 `biome.json`에서 통합 관리합니다. 개별 패키지에서 별도의 설정을 오버라이딩하지 않는 것을 원칙으로 합니다.
- **Framework:** Next.js, React Native Expo

## 3. 아키텍처 및 디렉토리 구조 (Architecture)

### 구조 요약
```text
root/
├── apps/
│   ├── main-app/  # [Entry Point] 메인 게이트웨이 (Blog, Portfolio 등으로 라우팅)
│   ├── blog/      # 블로그 어플리케이션
│   └── portfolio/ # 포트폴리오 어플리케이션
├── packages/      # 공유 라이브러리 (UI Kit, Utils 등)
├── biome.json     # [Single Source of Truth] 린트/포맷터 설정
├── pnpm-workspace.yaml
└── gemini.md