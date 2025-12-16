# AGENTS.md

This file provides context and instructions for AI coding agents working on the DataTables project.

## Project Overview

A project for developing various table views based on headless React Table v7 with UI8Kit styling, featuring local data storage through JSON files in a pure Bun.js environment without any unnecessary code.

## Tech Stack

- **Runtime**: Bun.js - Fast JavaScript runtime
- **Table Logic**: React Table v7 - Headless table library
- **Styling**: UI8Kit + Tailwind CSS v4 - Component system with utility-first CSS
- **Data Storage**: JSON files (prototype) → SQLite (production)
- **UI Framework**: React with TypeScript
- **Build Tool**: Bun's built-in bundler (no additional tools)

## Development Setup

### Prerequisites
- Bun.js installed (`curl -fsSL https://bun.sh/install | bash`)

### Quick Start
```bash
# Clone and install (only essential deps)
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

### Project Structure
```
src/
├── components/
│   ├── ui/           # UI8Kit base components (Block, Box, etc.)
│   ├── Grid.tsx      # Grid layout component
│   ├── Sheet.tsx     # Modal/panel component
│   └── ui8kit.ts     # Component exports
├── data/             # Data layer (JSON files for prototype)
├── lib/
│   └── utils.ts      # Utility functions
└── variants/         # UI8Kit styling variants (Tailwind classes)

public/
├── index.html        # Main HTML with CDN Tailwind
└── data/            # JSON data files

package.json          # Minimal dependencies
bun.lock             # Bun's lockfile
AGENTS.md            # This file
```

## Code Style Guidelines

### TypeScript
- Strict mode enabled
- Use interfaces over types for component props
- Explicit return types for functions
- Avoid `any` type, use `unknown` when necessary

### React
- Functional components with hooks
- Custom hooks for reusable logic
- Props destructuring at component start
- Early returns for conditional rendering

### Naming Conventions
- Components: PascalCase (e.g., `DataTable`, `UserRow`)
- Files: PascalCase for components, camelCase for utilities
- Hooks: camelCase with `use` prefix (e.g., `useTableData`)
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

### Import Order
```typescript
// 1. React imports
import React from 'react';

// 2. Third-party libraries
import { useTable } from 'react-table';

// 3. Local imports - absolute paths
import { Block, Box } from '@/components/ui8kit';

// 4. Relative imports
import { mockData } from '../data/mockData';

// 5. Type imports
import type { User } from '@/types/user';
```

## Component Architecture

### UI8Kit Components
- **Block**: Semantic containers (`<div>`, `<section>`, `<table>`, etc.)
- **Box**: Polymorphic elements (any HTML tag via `component` prop)
- **Variants**: Consistent styling through CVA (Class Variance Authority)

### Table Implementation
```typescript
// Use React Table v7 for logic
const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow
} = useTable({ columns, data });

// Use UI8Kit for styling
<Block component="table" w="full" rounded="lg" shadow="md">
  <Box component="thead" bg="gray-50">
    {/* Header rows */}
  </Box>
  <Box component="tbody">
    {/* Data rows */}
  </Box>
</Block>
```

## Data Management (Prototype)

### JSON File Structure
- `public/data/users.json` - User data
- `public/data/departments.json` - Department reference data
- `public/data/mockData.ts` - TypeScript constants for static data

### Data Access Pattern
```typescript
// Load data
const users = await Bun.file('public/data/users.json').json();

// Save data
await Bun.write('public/data/users.json', JSON.stringify(users, null, 2));
```

## Build and Deployment

### Development Server
```bash
bun run dev  # Uses Bun's built-in server
```

### Production Build
```bash
bun run build  # Uses Bun's built-in bundler
```

### File Serving
- Static files served from `public/` directory
- JSON data files accessible via fetch API
- No additional server setup required

## Testing Strategy

### Manual Testing
- Component visual testing in browser
- Data persistence testing
- Table functionality testing (sort, filter, pagination)

### Code Quality
- TypeScript strict checking
- Import organization
- Consistent code formatting

## Performance Considerations

### Bundle Size
- Keep dependencies minimal (currently only React Table v7)
- Use dynamic imports for large components if needed
- Tree-shake unused code

### Data Loading
- Load JSON files asynchronously
- Implement pagination for large datasets
- Cache frequently accessed data

## Security Notes

- JSON files are client-accessible (prototype limitation)
- No authentication implemented yet
- Data validation on client side only
- Move to SQLite for production data security

## Common Patterns

### Table with Sorting
```typescript
const [sortBy, setSortBy] = useState('name');
const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

const sortedData = useMemo(() => {
  return [...data].sort((a, b) => {
    // Sorting logic
  });
}, [data, sortBy, sortOrder]);
```

### Table with Filtering
```typescript
const [filter, setFilter] = useState('');

const filteredData = useMemo(() => {
  return data.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
}, [data, filter]);
```

## Future Migration Notes

### To SQLite
- Replace JSON file operations with `bun:sqlite`
- Update data access layer
- Add database schema migrations
- Implement proper error handling

### To Production
- Add authentication
- Implement data validation
- Add error boundaries
- Performance optimization
- Testing infrastructure

## Troubleshooting

### Common Issues
- **Tailwind classes not working**: Check CDN loading in index.html
- **JSON files not loading**: Verify file paths and Bun server setup
- **Component styles broken**: Check variant imports in ui8kit.ts

### Debug Commands
```bash
# Check Bun version
bun --version

# Clear cache
rm -rf node_modules && bun install

# Check file permissions
ls -la public/data/
```

## Contribution Guidelines

### Commit Messages
- Format: `[component] description`
- Examples: `[DataTable] add sorting functionality`, `[ui] fix button variants`

### Code Review
- Ensure TypeScript passes
- Check component prop types
- Verify data flow correctness
- Test table functionality manually

## Resources

- [Bun.js Documentation](https://bun.sh/docs)
- [React Table v7](https://react-table.tanstack.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [UI8Kit Components](https://github.com/ui8kit/ui8kit)
- [AGENTS.md Standard](https://agents.md/)
