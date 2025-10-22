# GitHub Copilot Project Instructions

## Primary Goals

- Build and maintain the Cerberus IAM Admin Web portal using Next.js 16, React 19, and TypeScript.
- Follow repository standards in `AGENTS.md`, `CLAUDE.md`, `TESTING.md`, and `SECURITY.md`.
- Preserve shadcn/ui component contracts and Tailwind CSS 4 design tokens.

## Coding Guidelines

- Use `@/` path aliases for all internal imports.
- Wrap new pages with `NextPageWithLayout` from `@/types/page` and define `getLayout` returning `AppLayout`.
- Keep React components typed, default to functional components, and avoid inline `any`.
- When updating forms, enforce Zod schemas without `.default()` on required booleans; supply defaults via `useForm({ defaultValues })`.
- Prefer `cn()` from `@/lib/utils` for conditional class names.
- Place unit/integration tests next to the source file with the `.test.ts[x]` suffix; create Playwright specs under `e2e/`.

## Tooling Requirements

- Run `npm run lint` and `npm run format:fix` before proposing changes; fix lint violations locally (CI blocks warnings).
- Use Prettier settings (`printWidth: 100`, semicolons, double quotes) and Tailwind class sorting per project conventions.
- Execute relevant tests: `npm test` for Jest, `npm run test:e2e` for Playwright, `npm run test:all` for full regression.

## Pull Request Expectations

- Follow Conventional Commits (`feat:`, `fix:`, `docs:`, etc.).
- Include concise descriptions, linked issues, and screenshots/gifs for UI updates.
- Note coverage impact when touching critical IAM flows; attach Playwright report link if failures occur.

## Safety Checks

- Never commit secrets; use `.env.local` for sensitive values.
- Confirm user-facing copy changes with design/product references when available.
- Reference `SECURITY.md` before modifying authentication, authorization, or token logic.
