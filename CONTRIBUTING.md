# Contributing to Admin Web Portal

Thank you for your interest in contributing to the Admin Web Portal! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Testing Guidelines](#testing-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/admin-web.git
   cd admin-web
   ```
3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/original-owner/admin-web.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. **Keep your fork synced**:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Make your changes**:
   - Write clean, maintainable code
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

3. **Test your changes**:
   ```bash
   npm test
   npm run lint
   npm run build
   ```

4. **Commit your changes** (see [Commit Messages](#commit-messages))

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Properly type all variables, functions, and components
- Avoid using `any` - use `unknown` if type is truly unknown
- Use interfaces for object shapes, types for unions/intersections

### React/Next.js

- Use functional components with hooks
- Keep components small and focused (Single Responsibility Principle)
- Use custom hooks to extract complex logic
- Follow Next.js best practices for performance
- Use proper semantic HTML

### Styling

- Use Tailwind CSS utility classes
- Follow Shadcn/ui component patterns
- Maintain responsive design (mobile-first approach)
- Use CSS variables for theme customization

### File Naming

- Components: `PascalCase.tsx` (e.g., `UserTable.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Hooks: `use-kebab-case.ts` (e.g., `use-auth.ts`)
- Types: `kebab-case.types.ts` (e.g., `user.types.ts`)

### Code Organization

```typescript
// 1. Imports (external first, then internal)
import { useState } from 'react'
import { Button } from '@/components/ui/button'

// 2. Types/Interfaces
interface UserTableProps {
  users: User[]
  onUserClick: (user: User) => void
}

// 3. Component
export function UserTable({ users, onUserClick }: UserTableProps) {
  // Hooks
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  // Event handlers
  const handleClick = (user: User) => {
    setSelectedUser(user)
    onUserClick(user)
  }

  // Render
  return (
    // JSX
  )
}
```

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(users): add user search functionality

fix(auth): resolve token expiration issue

docs: update README with new installation steps

test(users): add tests for user table component
```

## Pull Request Process

1. **Before submitting**:
   - Ensure all tests pass
   - Update documentation if needed
   - Add/update tests for your changes
   - Ensure your code follows the style guide
   - Rebase on the latest main branch

2. **PR Title**: Follow the same format as commit messages

3. **PR Description**: Include:
   - Summary of changes
   - Related issue numbers (if applicable)
   - Screenshots (for UI changes)
   - Testing steps
   - Breaking changes (if any)

4. **Review Process**:
   - At least one maintainer must approve
   - All CI checks must pass
   - Address review comments promptly
   - Keep PR scope focused and reasonable in size

5. **After Approval**:
   - Squash commits if requested
   - Maintainers will merge your PR

## Testing Guidelines

### Unit Tests

- Test components in isolation
- Mock external dependencies
- Test edge cases and error states
- Aim for high coverage on critical paths

### Example Test

```typescript
import { render, screen } from '@testing-library/react'
import { UserTable } from './UserTable'

describe('UserTable', () => {
  it('renders user list correctly', () => {
    const users = [
      { id: '1', name: 'John Doe', email: 'john@example.com' }
    ]

    render(<UserTable users={users} onUserClick={jest.fn()} />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
  })
})
```

### Integration Tests

- Test user workflows
- Test API integration points
- Test form submissions

## Reporting Bugs

When reporting bugs, include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Detailed steps to reproduce the issue
3. **Expected Behavior**: What you expected to happen
4. **Actual Behavior**: What actually happened
5. **Environment**:
   - OS and version
   - Node.js version
   - Browser and version
6. **Screenshots**: If applicable
7. **Additional Context**: Any other relevant information

Use the bug report template when creating an issue.

## Suggesting Features

When suggesting features, include:

1. **Problem Statement**: What problem does this solve?
2. **Proposed Solution**: How would you implement it?
3. **Alternatives**: Other solutions you've considered
4. **Use Cases**: Real-world scenarios where this would be useful
5. **Additional Context**: Mockups, examples, etc.

Use the feature request template when creating an issue.

## Questions?

If you have questions:
- Check existing issues and discussions
- Create a new discussion for questions
- Reach out to maintainers

Thank you for contributing!
