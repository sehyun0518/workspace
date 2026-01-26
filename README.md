# Personal Monorepo Workspace

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Manager](https://img.shields.io/badge/monorepo-pnpm_workspaces-orange)
![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6)
![Next.js](https://img.shields.io/badge/framework-Next.js_16-black)
![Biome](https://img.shields.io/badge/linter-Biome-yellow)

A modern, scalable monorepo workspace managing my personal portfolio, blog, and gateway application. Built with **Next.js 16**, **React 19**, and **TypeScript**, leveraging **pnpm workspaces** for efficient dependency management and **Biome** for high-performance linting and formatting.

## 📝 Description

This repository serves as the central hub for my personal web presence. It adopts a monorepo architecture to maximize code sharing, consistency, and ease of maintenance across multiple distinct applications.

**Key Features:**
- **Unified Architecture:** centralized configuration for TypeScript, Tailwind CSS, and linting.
- **Modern Stack:** Bleeding-edge Next.js 16 (App Router) and React 19.
- **Shared UI & Logic:** Reusable components and hooks across the blog, portfolio, and main app.
- **High Performance:** Optimized with Biome for linting/formatting and pnpm for fast installs.

## 📑 Table of Contents

- [Structure](#-structure)
- [Applications](#-applications)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Development](#-development)
  - [Linting & Formatting](#linting--formatting)
  - [Testing](#testing)
- [Configuration](#-configuration)
- [Contributing](#-contributing)
- [License](#-license)

## 📂 Structure

```bash
.
├── apps/
│   ├── main-app/    # Gateway application (Entry point)
│   ├── blog/        # Personal Blog (Next.js 16)
│   └── portfolio/   # Personal Portfolio with Vitest tests
├── packages/
│   ├── tailwind-config/   # Shared Tailwind CSS v4 configuration
│   └── typescript-config/ # Shared TypeScript base configurations
├── docs/            # Documentation & AI Agent Skills
├── biome.json       # Root Biome configuration
├── pnpm-workspace.yaml
└── package.json
```

## 🚀 Applications

| App | Description | Stack |
|-----|-------------|-------|
| **`apps/main-app`** | The main landing/gateway application. | Next.js 16, React 19, Tailwind v4 |
| **`apps/blog`** | A personal blog platform. | Next.js 16, Lucide React |
| **`apps/portfolio`** | Professional portfolio showcasing projects. | Next.js 16, Vitest, Lucide React |

## 📦 Installation

This project uses **pnpm** as its package manager. Ensure you have Node.js (LTS recommended) and pnpm installed.

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd workspace
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

## ⚡ Quick Start

You can run individual applications or all of them simultaneously.

### Running a specific app

**Blog:**
```bash
pnpm --filter blog dev
```

**Portfolio:**
```bash
pnpm --filter portfolio dev
```

**Main App:**
```bash
pnpm --filter main-app dev
```

The applications will typically start on `http://localhost:3000`. If running multiple, Next.js will auto-assign the next available port (e.g., 3001, 3002).

## 🛠 Development

### Linting & Formatting

This project uses **Biome** for fast and strict linting and formatting.

- **Lint:**
  ```bash
  pnpm lint
  ```
- **Format (Write):**
  ```bash
  pnpm format
  ```
- **Check & Fix (Unsafe):**
  ```bash
  pnpm check:fix
  ```

### Testing

Testing is implemented using **Vitest**, primarily within the `portfolio` and `blog` apps.

To run tests for the portfolio:
```bash
pnpm --filter portfolio test
```

## ⚙️ Configuration

- **Biome:** Configured in `biome.json` at the root. This is the single source of truth for code style.
- **TypeScript:** Base configs located in `packages/typescript-config`. Apps extend `react-library.json` or `next.json`.
- **Tailwind:** Shared presets in `packages/tailwind-config`.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

Please ensure all linting checks pass before submitting.

## 📄 License

This project is licensed under the **ISC License**. See the `package.json` file for details.

## 👤 Author

**Sehyeoun Kim**

---
*Generated with ❤️ by Gemini CLI*