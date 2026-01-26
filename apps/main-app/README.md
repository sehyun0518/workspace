# Main Gateway App

![Next.js](https://img.shields.io/badge/framework-Next.js_16-black)
![React](https://img.shields.io/badge/library-React_19-blue)
![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6)
![Tailwind CSS](https://img.shields.io/badge/style-Tailwind_CSS_v4-38B2AC)

The central gateway/landing application for the monorepo workspace.

## 📝 Description

This application serves as the main entry point for the personal web presence. It routes users to different sub-applications (like the Blog or Portfolio) or serves as the primary landing page depending on the deployment strategy.

**Key Features:**
- **Next.js 16:** Leveraging the latest App Router features.
- **Lightweight:** Designed to be a fast, minimal entry point.
- **Tailwind CSS v4:** Consistent styling with the rest of the workspace.

## 📂 Structure

Minimal Next.js structure:

```bash
src/
├── app/          # App Router pages
└── components/   # Application-specific components (e.g., Header)
```

## 📦 Installation

This app is part of a pnpm workspace.

1. **Navigate to the workspace root:**
   ```bash
   cd ../..
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

## ⚡ Quick Start

To run this application strictly from the root:

```bash
pnpm --filter main-app dev
```

Or, if you are inside the `apps/main-app` directory:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) (or the next available port).

## 🛠 Development

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Starts the development server. |
| `pnpm build` | Builds the application for production. |
| `pnpm start` | Starts the production server. |
| `pnpm lint` | Runs ESLint checks. |

## ⚙️ Configuration

- **Next.js:** `next.config.ts`
- **Tailwind:** `tailwind.config.ts` (imports shared config from `packages/tailwind-config`)
- **TypeScript:** `tsconfig.json` (extends `packages/typescript-config/next.json`)

## 📄 License

Part of the workspace licensed under **ISC**.