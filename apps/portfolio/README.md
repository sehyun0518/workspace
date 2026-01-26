# Personal Portfolio

![Next.js](https://img.shields.io/badge/framework-Next.js_16-black)
![React](https://img.shields.io/badge/library-React_19-blue)
![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6)
![Tailwind CSS](https://img.shields.io/badge/style-Tailwind_CSS_v4-38B2AC)
![Vitest](https://img.shields.io/badge/testing-Vitest-yellow)

A professional portfolio website showcasing projects and skills. Built with **Next.js 16**, **React 19**, and rigorous testing with **Vitest**.

## 📝 Description

This application acts as my digital resume and showcase. It is designed to be visually appealing, performant, and easily updatable. It includes sections for projects, about me information, and contact details.

**Key Features:**
- **Next.js 16:** Performance-first framework with App Router.
- **Component-Based:** Clean, reusable component architecture.
- **Robust Testing:** Comprehensive test setup using **Vitest** and **React Testing Library**.
- **Responsive Design:** Fully responsive layout with **Tailwind CSS v4**.

## 📂 Structure

Standard React/Next.js application structure:

```bash
src/
├── app/          # Pages and Layouts
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── lib/          # Utility functions
├── types/        # TypeScript type definitions
└── utils/        # Helper functions
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
pnpm --filter portfolio dev
```

Or, if you are inside the `apps/portfolio` directory:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) (or the next available port) to view the portfolio.

## 🛠 Development

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Starts the development server. |
| `pnpm build` | Builds the application for production. |
| `pnpm start` | Starts the production server. |
| `pnpm lint` | Runs ESLint checks. |
| `pnpm test` | Runs unit and integration tests with Vitest. |

### Testing

Testing is a first-class citizen in this project. We use **Vitest** for its speed and compatibility.

```bash
# Run tests
pnpm test
```

## ⚙️ Configuration

- **Next.js:** `next.config.ts`
- **Tailwind:** `tailwind.config.ts` (imports shared config from `packages/tailwind-config`)
- **TypeScript:** `tsconfig.json` (extends `packages/typescript-config/next.json`)
- **Vitest:** `vitest.config.ts`

## 🤝 Contributing

When adding new sections or components:
- Place reusable UI elements in `src/components`.
- Ensure new logic is covered by tests in `vitest`.
- Keep the `constants` folder updated for static text content.

## 📄 License

Part of the workspace licensed under **ISC**.