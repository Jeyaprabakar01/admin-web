# Cerberus IAM Admin Web – AI Collaboration Guide

## Project Essence

- Next.js 16 (Pages Router) admin interface for the Cerberus IAM platform.
- Built with React 19, TypeScript, Tailwind CSS 4, shadcn/ui, React Hook Form + Zod.
- Strict tooling: ESLint (`npm run lint` with `--max-warnings=0`), Prettier (`npm run format:fix`), Jest, and Playwright.

## Core Principles

- Respect architecture decisions captured in `CLAUDE.md`, reusable patterns in `.cursorrules`/`.windsurfrules`, and contributor workflow in `AGENTS.md`.
- Favor type-safe, accessible components. Use `@/` path aliases and shared utilities (`cn`, `buildPermissionKey`, etc.).
- Keep IAM permission and onboarding flows idempotent and auditable; update tests when behavior changes.

## Preferred Workflow

1. Install deps (`npm install`) and run `npm run dev` for live edits.
2. Implement changes with unit tests colocated (`*.test.ts[x]`), e2e specs in `e2e/`.
3. Validate with:
   - `npm run lint`
   - `npm run format:fix`
   - `npm test`
   - `npm run test:e2e` or `npm run test:all` as needed.
4. Summarize changes using Conventional Commits and prepare PRs with screenshots for UI tweaks.

## Guardrails

- Do not commit secrets; keep environment variables in `.env.local`.
- Preserve shadcn/ui primitives; extend components outside `src/components/ui`.
- Avoid introducing `any` or disabling ESLint without justification; prefer targeted fixes.
- When editing auth or token logic, cross-reference `SECURITY.md` and add regression tests.

## Useful References

- Onboarding & contributor norms: `CONTRIBUTING.md`, `AGENTS.md`
- Testing guidance: `TESTING.md`
- Support channels & escalation: `SUPPORT.md`
- Security reporting: `SECURITY.md`
