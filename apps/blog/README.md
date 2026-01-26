# Personal Blog

![Next.js](https://img.shields.io/badge/framework-Next.js_16-black)
![React](https://img.shields.io/badge/library-React_19-blue)
![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6)
![Tailwind CSS](https://img.shields.io/badge/style-Tailwind_CSS_v4-38B2AC)
![FSD](https://img.shields.io/badge/architecture-Feature_Sliced_Design-orange)

A modern, high-performance blog application built with **Next.js 16** and **React 19**, featuring a modular **Feature-Sliced Design (FSD)** architecture for scalability and maintainability.

## 📝 Description

This application serves as a personal content platform. It leverages the latest web technologies to provide a fast, accessible, and seo-friendly reading experience. The architecture is explicitly designed to handle growing complexity through strict separation of concerns using FSD principles.

**Key Features:**
- **Next.js 16 App Router:** Utilizes Server Components and the latest routing paradigms.
- **Feature-Sliced Design:** Modular architecture (`widgets`, `features`, `entities`) for better code organization.
- **Modern UI:** Styled with **Tailwind CSS v4** and **Lucide React** icons.
- **Testing Ready:** Configured with **Vitest** for unit and component testing.

## 📂 Structure

This project follows [Feature-Sliced Design](https://feature-sliced.design/) principles:

```bash
src/
├── app/          # Next.js App Router (Routing & Layouts)
├── widgets/      # Compositional layers (composition of features & entities)
├── features/     # User interactions (business logic)
├── entities/     # Business entities (data model)
├── shared/       # Reusable infrastructure code (UI kit, libs)
└── lib/          # Global utilities
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
pnpm --filter blog dev
```

Or, if you are inside the `apps/blog` directory:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) (or the next available port) to view the blog.

## 🛠 Development

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Starts the development server. |
| `pnpm build` | Builds the application for production. |
| `pnpm start` | Starts the production server. |
| `pnpm lint` | Runs ESLint checks. |
| `pnpm test` | Runs tests using Vitest (if configured in scripts). |

### Testing

This application uses **Vitest** for testing.

```bash
# Run tests
pnpm --filter blog test
```

## ⚙️ Configuration

- **Next.js:** `next.config.ts`
- **Tailwind:** `tailwind.config.ts` (imports shared config from `packages/tailwind-config`)
- **TypeScript:** `tsconfig.json` (extends `packages/typescript-config/next.json`)

## 🤝 Contributing

Contributions are managed through the monorepo root. Please ensure you follow the FSD architectural guidelines when adding new components or features.

1. **Shared UI** goes to `shared/components/ui`.
2. **Business Logic** related to a specific domain goes to `entities`.
3. **User Actions** go to `features`.
4. **Complex Blocks** go to `widgets`.

## 📄 License

Part of the workspace licensed under **ISC**.