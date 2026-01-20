# [Project Name]

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Manager](https://img.shields.io/badge/monorepo-pnpm_workspaces-orange)
![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6)

A monorepo workspace for managing my personal portfolio, blog, and various toy projects.
Built with **Next.js**, **React**, and **TypeScript**, managed using **pnpm workspaces**.

## 📂 Repository Structure

This project follows a monorepo architecture to share UI components and configurations across multiple applications.

```bash
.
├── apps/
│   ├── portfolio/    # Main entry point (Next.js app)
│   ├── blog/         # Tech blog & TIL logs
│   └── projects/     # Experimental React apps
├── packages/
│   ├── ui/           # Shared UI component library
│   ├── config/       # Shared TSConfig & ESLint settings
│   └── utils/        # Common utility functions
├── pnpm-workspace.yaml
└── package.json
