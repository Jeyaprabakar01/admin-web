# AI Configuration Files

This repository is configured for multiple AI coding assistants. Each tool has its own configuration file optimized for its specific use case.

## Configuration Files Overview

### Tool-Specific Configurations

| File                              | AI Tool           | Purpose                                            |
| --------------------------------- | ----------------- | -------------------------------------------------- |
| `.cursorrules`                    | Cursor AI         | Concise project guide with essential patterns      |
| `.windsurfrules`                  | Windsurf          | Agent profile with workflow expectations           |
| `.github/copilot-instructions.md` | GitHub Copilot    | Primary goals and coding guidelines                |
| `.ai/instructions.md`             | General AI Agents | Collaboration guide (Junie, Aider, Continue, etc.) |

### Reference Documentation

| File         | Purpose                                 | Audience                            |
| ------------ | --------------------------------------- | ----------------------------------- |
| `CLAUDE.md`  | Comprehensive architecture and patterns | Claude Code, detailed context       |
| `AGENTS.md`  | Day-to-day engineering workflows        | All AI assistants, human developers |
| `TESTING.md` | Testing guide and patterns              | All developers, AI assistants       |
| `README.md`  | Project setup and overview              | All developers                      |

## File Usage by AI Tool

### Cursor AI

- **Primary**: `.cursorrules`
- **References**: `CLAUDE.md`, `AGENTS.md`, `TESTING.md`, `SECURITY.md`

### Windsurf

- **Primary**: `.windsurfrules`
- **References**: `CLAUDE.md`, `AGENTS.md`, `TESTING.md`, `SECURITY.md`

### GitHub Copilot

- **Primary**: `.github/copilot-instructions.md`
- **References**: `AGENTS.md`, `CLAUDE.md`, `TESTING.md`, `SECURITY.md`

### Claude Code

- **Primary**: `CLAUDE.md`
- **References**: `TESTING.md`, `README.md`

### General AI Agents (Junie, Aider, Continue)

- **Primary**: `.ai/instructions.md`
- **References**: `CLAUDE.md`, `AGENTS.md`, `TESTING.md`, `CONTRIBUTING.md`, `SECURITY.md`, `SUPPORT.md`

## Configuration Principles

1. **Tool-specific files are concise** - Each AI tool's primary config is optimized for quick context loading
2. **Reference docs provide depth** - `CLAUDE.md`, `AGENTS.md`, and `TESTING.md` contain detailed patterns
3. **No duplication** - Common patterns live in reference docs, not repeated across tool configs
4. **Single source of truth** - Architecture patterns in `CLAUDE.md`, workflows in `AGENTS.md`

## Adding New AI Tool Support

When adding support for a new AI tool:

1. Create a tool-specific config file (e.g., `.newtool`)
2. Keep it concise (aim for < 2000 characters)
3. Reference existing documentation files rather than duplicating content
4. Focus on tool-specific workflows and critical patterns
5. Update this file to document the new configuration

## Maintenance

- Tool-specific configs (`.cursorrules`, `.windsurfrules`, etc.) should remain lightweight
- Architectural changes update `CLAUDE.md`
- Workflow changes update `AGENTS.md`
- Testing changes update `TESTING.md`
- All configs reference these authoritative sources
