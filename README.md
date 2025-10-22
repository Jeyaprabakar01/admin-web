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
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)

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

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## Project Structure

```
admin-web/
├── src/
│   ├── components/      # React components
│   │   └── ui/          # Shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Next.js pages
│   │   ├── api/         # API routes
│   │   ├── _app.tsx     # App wrapper
│   │   └── _document.tsx
│   ├── styles/          # Global styles
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
├── .github/             # GitHub workflows and templates
└── tests/               # Test files
```

## Testing

We use Jest and React Testing Library for testing. Tests are colocated with components in `__tests__` directories.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started.

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
