# TPH – Teacher Professional Hub

TPH is a reusable personal professional-management platform for secondary-school teachers. This phase bootstraps the core application shell only: navigation, routing, theme handling, configuration, and dashboard placeholders.

## Tech stack

- React + Vite
- TypeScript in strict mode
- Tailwind CSS
- React Router
- shadcn/ui-compatible component structure
- Lucide icons
- Vitest + Testing Library for smoke tests

## Development commands

```
npm install
npm run dev
npm run build
npm run test
```

## Project structure

```
src/app          Application composition and route definitions
src/components   Layout, navigation, and reusable UI components
src/config       Central app, teacher, branding, theme, and navigation configuration
src/hooks        Reusable React hooks
src/pages        Route-level pages and placeholders
src/services     Future external-service boundaries
src/stores       Future shared client state
src/types        Shared TypeScript types
src/utils        Reusable utilities
src/styles       Global styles and theme tokens
```

## Current phase

TPH-01.02 bootstraps the runnable application shell. It intentionally does not integrate Supabase, Google OAuth, Google Drive, AI APIs, or business workflows.

## Future architecture

Future phases can add teacher-specific configuration, persistence, authentication, document storage, AI-assisted workflows, and custom branding while preserving the modular shell and typed boundaries introduced here.

## Development and CI

Codex is used for development work in the repository branch, while GitHub Actions performs clean CI validation for pull requests and pushes to `main`. The CI workflow installs dependencies in GitHub's environment, runs the project build, and runs the configured test command.

Vercel will later be used for production deployment after the application shell and validation pipeline are stable. Local or Codex-specific npm registry restrictions are environment concerns and should not be encoded in the application configuration.
