# Cerberus IAM | Admin Web Portal

A modern, professional admin portal for managing Identity and Access Management (IAM) operations. Built with Next.js, TypeScript, and Shadcn/ui.

## Features

- **User Management**: View, create, edit, and manage user accounts
- **User Activity Tracking**: Monitor and analyze user activities
- **Metrics Dashboard**: Visualize key performance indicators
- **Client Token Management**: Manage API tokens and client credentials
- **Tenant Management**: Multi-tenant support for organization isolation
- **Role-Based Access Control**: Granular permissions and role management

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (Pages Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/) (New York style)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) + [Playwright](https://playwright.dev/)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd admin-web
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:

```env
NEXT_PUBLIC_API_URL=<your-iam-api-url>
NEXT_PUBLIC_APP_NAME=Admin Portal
# Add other required environment variables
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Check code formatting with Prettier
- `npm run format:fix` - Fix formatting issues automatically

### Testing Scripts

- `npm test` - Run all Jest tests
- `npm run test:unit` - Run unit tests
- `npm run test:integration` - Run integration tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:e2e` - Run Playwright end-to-end tests
- `npm run test:e2e:ui` - Run e2e tests with interactive UI
- `npm run test:e2e:headed` - Run e2e tests in headed mode (see browser)
- `npm run test:e2e:debug` - Debug e2e tests
- `npm run test:e2e:report` - View last e2e test report
- `npm run test:all` - Run all tests (Jest + Playwright)

## Project Structure

```
admin-web/
├── src/
│   ├── components/         # React components
│   │   ├── layout/         # Layout components
│   │   ├── onboarding/     # Onboarding flow components
│   │   ├── providers/      # React context providers
│   │   └── ui/             # Shadcn/ui components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   │   └── iam/            # IAM-specific utilities
│   ├── pages/              # Next.js pages
│   │   ├── api/            # API routes
│   │   ├── audit/          # Audit log pages
│   │   ├── iam/            # IAM management pages
│   │   ├── settings/       # Settings pages
│   │   ├── _app.tsx        # App wrapper
│   │   └── _document.tsx
│   ├── styles/             # Global styles
│   └── types/              # TypeScript type definitions
├── e2e/                    # Playwright end-to-end tests
├── public/                 # Static assets
├── .github/                # GitHub workflows and templates
├── jest.config.ts          # Jest configuration
├── playwright.config.ts    # Playwright configuration
└── TESTING.md              # Comprehensive testing guide
```

## Testing

We maintain a comprehensive testing strategy covering unit, integration, and end-to-end tests.

### Test Stack

- **Unit & Integration Tests**: Jest + React Testing Library
- **End-to-End Tests**: Playwright (Chrome, Firefox, WebKit)
- **Coverage**: Comprehensive test coverage with reports

### Quick Start

```bash
# Run all Jest tests (unit + integration)
npm test

# Run e2e tests
npm run test:e2e

# Run all tests
npm run test:all
```

### Test Organization

- **Unit Tests**: Located next to source files (e.g., `utils.test.ts`)
- **Integration Tests**: Component tests (e.g., `Button.test.tsx`)
- **E2E Tests**: Located in the `e2e/` directory

### Running Tests

```bash
# Unit & Integration Tests
npm test                    # Run once
npm run test:watch          # Watch mode
npm run test:coverage       # With coverage report

# End-to-End Tests
npm run test:e2e            # Headless mode
npm run test:e2e:ui         # Interactive mode
npm run test:e2e:headed     # See browser
npm run test:e2e:debug      # Debug mode
```

For detailed testing documentation, patterns, and best practices, see [TESTING.md](TESTING.md).

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for onboarding steps and [AGENTS.md](AGENTS.md) for day-to-day engineering guidelines.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the standards we expect from our community.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions please review [SUPPORT.md](SUPPORT.md) for the recommended support channels. Security-sensitive reports should follow the instructions in [SECURITY.md](SECURITY.md).

## Roadmap

- [ ] Multi-factor authentication support
- [ ] Advanced audit logging
- [ ] Real-time notifications
- [ ] Export functionality for reports
- [ ] Dark mode support (already configured with next-themes)
- [ ] Mobile responsive improvements

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/)
