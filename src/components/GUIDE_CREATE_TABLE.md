# Creating Tables with ui8kit/core

This guide demonstrates how to build tables using the `Block` and `Box` components from `@ui8kit/core`.

## Overview

ui8kit/core provides polymorphic components that can render as any HTML element:
- **Block** - Semantic container with `component` prop for table structure
- **Box** - Flexible primitive with full variant support for table cells and headers

## Basic Table Structure

Use `Block` with `component="table"` as the table wrapper:

```jsx
import { Block, Box } from '@ui8kit/core';

function SimpleTable() {
  return (
    <Block 
      component="table"
      w="full"
      border="default"
      borderColor="gray-200"
      rounded="md"
      overflow="hidden"
    >
      {/* Table content goes here */}
    </Block>
  );
}
```

## Creating Table Headers

Use `Box` with `component="thead"` for table headers:

```jsx
<Box component="thead" bg="gray-50">
  <Box component="tr">
    <Box 
      component="th" 
      p="md"
      textAlign="left"
      fw="semibold"
      c="gray-900"
      borderBottom="default"
      borderColor="gray-200"
    >
      Name
    </Box>
    <Box 
      component="th" 
      p="md"
      textAlign="left"
      fw="semibold"
      c="gray-900"
      borderBottom="default"
      borderColor="gray-200"
    >
      Email
    </Box>
    <Box 
      component="th" 
      p="md"
      textAlign="left"
      fw="semibold"
      c="gray-900"
      borderBottom="default"
      borderColor="gray-200"
    >
      Status
    </Box>
  </Box>
</Box>
```

## Creating Table Body

Use `Box` with `component="tbody"` for table body:

```jsx
<Box component="tbody" bg="white">
  <Box component="tr" className="hover:bg-gray-50">
    <Box 
      component="td" 
      p="md"
      borderBottom="default"
      borderColor="gray-100"
    >
      John Doe
    </Box>
    <Box 
      component="td" 
      p="md"
      borderBottom="default"
      borderColor="gray-100"
    >
      john@example.com
    </Box>
    <Box 
      component="td" 
      p="md"
      borderBottom="default"
      borderColor="gray-100"
    >
      Active
    </Box>
  </Box>
</Box>
```

## Table Variants

### Striped Rows
```jsx
<Box component="tbody" bg="white">
  <Box component="tr" bg="gray-50">
    <Box component="td" p="md">Row 1</Box>
  </Box>
  <Box component="tr" bg="white">
    <Box component="td" p="md">Row 2</Box>
  </Box>
</Box>
```

### Bordered Table
```jsx
<Block 
  component="table"
  w="full"
  border="default"
  borderColor="gray-300"
  rounded="lg"
>
  <Box component="thead">
    <Box component="tr">
      <Box 
        component="th" 
        p="lg"
        border="default"
        borderColor="gray-300"
        fw="bold"
      >
        Header
      </Box>
    </Box>
  </Box>
  <Box component="tbody">
    <Box component="tr">
      <Box 
        component="td" 
        p="lg"
        border="default"
        borderColor="gray-300"
      >
        Cell
      </Box>
    </Box>
  </Box>
</Block>
```

### Compact Table
```jsx
<Block component="table" w="full">
  <Box component="thead">
    <Box component="tr">
      <Box component="th" p="sm" fw="semibold">Name</Box>
      <Box component="th" p="sm" fw="semibold">Value</Box>
    </Box>
  </Box>
  <Box component="tbody">
    <Box component="tr">
      <Box component="td" p="sm">Item 1</Box>
      <Box component="td" p="sm">Value 1</Box>
    </Box>
  </Box>
</Block>
```

## Complete Table Example

Here's a full data table implementation with sorting and actions:

```jsx
import { Block, Box, Button, Badge } from '@ui8kit/core';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active', role: 'User' },
];

function DataTable() {
  return (
    <Block 
      component="table"
      w="full"
      bg="white"
      rounded="lg"
      shadow="md"
      border="default"
      borderColor="gray-200"
      overflow="hidden"
    >
      {/* Table Header */}
      <Box component="thead" bg="gray-50">
        <Box component="tr">
          <Box 
            component="th" 
            p="lg"
            textAlign="left"
            fw="semibold"
            c="gray-900"
            borderBottom="default"
            borderColor="gray-200"
          >
            Name
          </Box>
          <Box 
            component="th" 
            p="lg"
            textAlign="left"
            fw="semibold"
            c="gray-900"
            borderBottom="default"
            borderColor="gray-200"
          >
            Email
          </Box>
          <Box 
            component="th" 
            p="lg"
            textAlign="left"
            fw="semibold"
            c="gray-900"
            borderBottom="default"
            borderColor="gray-200"
          >
            Role
          </Box>
          <Box 
            component="th" 
            p="lg"
            textAlign="left"
            fw="semibold"
            c="gray-900"
            borderBottom="default"
            borderColor="gray-200"
          >
            Status
          </Box>
          <Box 
            component="th" 
            p="lg"
            textAlign="center"
            fw="semibold"
            c="gray-900"
            borderBottom="default"
            borderColor="gray-200"
          >
            Actions
          </Box>
        </Box>
      </Box>

      {/* Table Body */}
      <Box component="tbody" bg="white">
        {users.map((user, index) => (
          <Box 
            key={user.id} 
            component="tr" 
            className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            className="hover:bg-blue-50 transition-colors"
          >
            <Box 
              component="td" 
              p="lg"
              fw="medium"
              c="gray-900"
              borderBottom="default"
              borderColor="gray-100"
            >
              {user.name}
            </Box>
            <Box 
              component="td" 
              p="lg"
              c="gray-600"
              borderBottom="default"
              borderColor="gray-100"
            >
              {user.email}
            </Box>
            <Box 
              component="td" 
              p="lg"
              c="gray-600"
              borderBottom="default"
              borderColor="gray-100"
            >
              {user.role}
            </Box>
            <Box 
              component="td" 
              p="lg"
              borderBottom="default"
              borderColor="gray-100"
            >
              <Badge 
                variant={user.status === 'active' ? 'success' : 'secondary'}
                size="sm"
              >
                {user.status}
              </Badge>
            </Box>
            <Box 
              component="td" 
              p="lg"
              borderBottom="default"
              borderColor="gray-100"
              textAlign="center"
            >
              <Block display="flex" gap="sm" justify="center">
                <Button size="sm" variant="outline">
                  Edit
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </Block>
            </Box>
          </Box>
        ))}
      </Box>
    </Block>
  );
}
```

## Table with Sorting

```jsx
import { Block, Box, Button } from '@ui8kit/core';
import { ChevronUp, ChevronDown } from 'lucide-react';

function SortableTable({ data, sortConfig, onSort }) {
  const getSortIcon = (column) => {
    if (sortConfig.key !== column) return null;
    return sortConfig.direction === 'asc' ? 
      <ChevronUp size={16} /> : 
      <ChevronDown size={16} />;
  };

  return (
    <Block component="table" w="full" bg="white" rounded="lg" shadow="sm">
      <Box component="thead" bg="gray-50">
        <Box component="tr">
          {['name', 'email', 'role'].map(column => (
            <Box 
              key={column}
              component="th" 
              p="md"
              textAlign="left"
              fw="semibold"
              borderBottom="default"
              borderColor="gray-200"
            >
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onSort(column)}
                display="flex"
                align="center"
                gap="xs"
                p="0"
                h="auto"
                fw="semibold"
              >
                {column.charAt(0).toUpperCase() + column.slice(1)}
                {getSortIcon(column)}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      <Box component="tbody">
        {data.map((item, index) => (
          <Box 
            key={index} 
            component="tr" 
            className="hover:bg-gray-50"
          >
            <Box component="td" p="md" borderBottom="default" borderColor="gray-100">
              {item.name}
            </Box>
            <Box component="td" p="md" borderBottom="default" borderColor="gray-100">
              {item.email}
            </Box>
            <Box component="td" p="md" borderBottom="default" borderColor="gray-100">
              {item.role}
            </Box>
          </Box>
        ))}
      </Box>
    </Block>
  );
}
```

## Available Table Props

### Cell Alignment
- `textAlign` - "left", "center", "right"

### Cell Spacing
- `p`, `px`, `py`, `pt`, `pb`, `pl`, `pr` - Padding
- Use consistent padding values like "sm", "md", "lg"

### Borders
- `border` - Border width
- `borderColor` - Border color
- `borderBottom` - Bottom border specifically

### Colors
- `bg` - Background color
- `c` - Text color

### Typography
- `fw` - Font weight ("normal", "medium", "semibold", "bold")
- `size` - Font size

## Best Practices

1. **Always set `w="full"`** on table elements for consistent width
2. **Use `Block` for table structure** (table, thead, tbody containers)
3. **Use `Box` for table cells** (th, td, tr elements)
4. **Apply consistent padding** using the spacing scale ("sm", "md", "lg")
5. **Use `borderBottom`** on cells for clean row separation
6. **Add hover states** with `className="hover:bg-gray-50"`
7. **Use semantic colors** for headers (`bg="gray-50"`, `c="gray-900"`)
8. **Apply `rounded="lg"` and `shadow`** for modern card-like appearance

## Responsive Tables

For mobile-responsive tables, consider horizontal scrolling:

```jsx
<Block 
  component="div" 
  w="full"
  overflowX="auto"
  className="scrollbar-thin"
>
  <Block 
    component="table"
    w="full"
    minW="48rem" // Minimum width for content
    bg="white"
    rounded="lg"
    shadow="md"
  >
    {/* Table content */}
  </Block>
</Block>
```

## Conclusion

The `Block` and `Box` components from ui8kit/core provide a powerful foundation for building tables with:
- Type-safe variant props
- Consistent styling system
- Full HTML element flexibility via `component` prop
- Seamless integration with Tailwind CSS
- Easy responsive design support

This approach ensures your tables are both beautiful and maintainable, with all the power of modern CSS-in-JS variants.