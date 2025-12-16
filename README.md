# DataTables

A project for developing various table views based on headless React Table v7 with UI8Kit styling, featuring local data storage through SQLite in a pure Bun.js environment without any unnecessary code.

## Tech Stack

- **Runtime**: [Bun.js](https://bun.sh/) - Fast JavaScript runtime
- **Table Logic**: [React Table v7](https://react-table.tanstack.com/) - Headless table library
- **Styling**: [UI8Kit](https://github.com/ui8kit/ui8kit) - Custom component system
- **Data Storage**: SQLite via `bun:sqlite` - Built-in database support
- **UI Framework**: React with TypeScript

## Features

- ✅ Zero additional dependencies beyond core stack
- ✅ Multiple table view implementations
- ✅ Local SQLite database integration
- ✅ Pure Bun.js environment
- ✅ TypeScript support
- ✅ Headless table architecture
- ✅ Custom UI8Kit component styling

## Project Structure

```
src/
├── components/
│   ├── ui/           # UI8Kit base components
│   ├── Grid.tsx      # Grid layout component
│   ├── Sheet.tsx     # Modal/panel component
│   └── ui8kit.ts     # Component exports
├── data/             # Data layer (SQLite)
├── lib/
│   └── utils.ts      # Utility functions
└── variants/         # UI8Kit styling variants
```

## Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build
```

## Data Storage

The project uses SQLite through Bun.js's built-in `bun:sqlite` module for local data persistence without any external database dependencies.

## Component Architecture

Built with a headless approach using React Table v7 for logic and UI8Kit for styling, providing maximum flexibility and minimal bundle size.

## Philosophy

- **Zero unnecessary dependencies** - Only essential packages
- **Pure Bun.js ecosystem** - Leveraging built-in capabilities
- **Headless architecture** - Separation of logic and presentation
- **Local-first** - SQLite for offline-capable data storage
- **Type-safe** - Full TypeScript support throughout
