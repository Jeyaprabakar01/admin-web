# Repository Guidelines

## Project Structure & Module Organization

- `src/` contains app code written in TypeScript. `src/components` hosts reusable UI built with shadcn/ui and Tailwind; organize new components by feature in subfolders. `src/pages` maps to Next.js routes; add folders with `page.tsx` for new views. `src/lib` holds domain utilities such as IAM helpers alongside colocated unit tests (e.g., `src/lib/iam/utils.test.ts`). `src/hooks`, `src/config`, and `src/types` centralize shared hooks, environment helpers, and TypeScript contracts. `public/` serves static assets, and `e2e/` stores Playwright `.spec.ts` files and fixtures.

## Build, Test, and Development Commands

- `npm run dev` launches the Next.js dev server with hot reload.
- `npm run build` generates the production build; `npm start` serves it.
- `npm run lint` / `npm run lint:fix` run ESLint with the Next.js Core Web Vitals rules.
- `npm run format` / `npm run format:fix` verify or rewrite formatting via Prettier.
- Testing commands: `npm test` for all Jest suites, `npm run test:watch` during iteration, `npm run test:coverage` for coverage, `npm run test:e2e` (or `:ui`, `:headed`, `:debug`) for Playwright, and `npm run test:all` to chain Jest + Playwright.

## Coding Style & Naming Conventions

- Prettier enforces 2-space indentation, 100-character lines, double quotes, semicolons, and trailing commas; run `npm run format:fix` before committing. React components and files use PascalCase (`UserTable.tsx`), hooks start with `use`, utilities remain camelCase, and test files append `.test.ts`. Tailwind classes live inline; extract shared styles into `src/styles`. ESLint extends `next/core-web-vitals` and `next/typescript`; resolve all warnings locally because CI treats them as errors (`--max-warnings=0`).

## Testing Guidelines

- Prefer colocated Jest tests near the code under test and name them `*.test.ts[x]`. Mock fetches with Testing Library helpers and keep snapshots deterministic. Playwright specs in `e2e/` should reset state via fixtures and tag multi-tenant flows explicitly in the test name. Run `npm run test:coverage` and ensure new code keeps coverage trending upward; include the HTML report path in PR comments if coverage dips.

## Commit & Pull Request Guidelines

- Follow Conventional Commits (`feat`, `fix`, `docs`, `chore`, etc.), mirroring the existing history. Each commit should be scoped and testable; stage only related changes. PRs need a concise summary, linked issue or ticket, screenshots/gifs for UI updates, and a checklist confirming tests (`npm run test:all`) and lint have passed. Request a review once CI is green and respond to feedback promptly.
