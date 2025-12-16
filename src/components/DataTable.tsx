import React, { useState, useMemo } from 'react';
import { useTable, useSortBy, useFilters, Column } from 'react-table';
import { Box } from './ui/Box';
import { Group } from './ui/Group';
import { Stack } from './ui/Stack';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Text } from './ui/Text';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';
import type { User } from '../data/mockData';

// Custom filter UI component
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}: any) {
  return (
    <Box
      component="input"
      type="text"
      value={filterValue || ''}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value || undefined)}
      placeholder="Search..."
      w="full"
      p="sm"
      rounded="md"
      border="2px"
      borderColor="border"
      bg="background"
      className="focus:ring-2 focus:ring-ring focus:border-transparent"
    />
  );
}

// Status badge component
function StatusBadge({ status }: { status: User['status'] }) {
  const variants = {
    active: 'success',
    inactive: 'secondary',
    pending: 'warning'
  } as const;

  return (
    <Badge variant={variants[status]} size="sm">
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}

// Role badge component
function RoleBadge({ role }: { role: User['role'] }) {
  const colors = {
    admin: 'destructive',
    moderator: 'warning',
    user: 'default'
  } as const;

  return (
    <Badge variant={colors[role]} size="sm">
      {role.charAt(0).toUpperCase() + role.slice(1)}
    </Badge>
  );
}

interface DataTableProps {
  data: User[];
}

function DataTable({ data }: DataTableProps) {
  const [filterInput, setFilterInput] = useState('');

  // Define columns
  const columns: Column<User>[] = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value }) => (
          <Text c="foreground" className="font-medium">{value}</Text>
        ),
      },
      {
        Header: 'Email',
        accessor: 'email',
        Cell: ({ value }) => (
          <Text c="muted">{value}</Text>
        ),
      },
      {
        Header: 'Role',
        accessor: 'role',
        Cell: ({ value }) => <RoleBadge role={value} />,
        Filter: DefaultColumnFilter,
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => <StatusBadge status={value} />,
        Filter: DefaultColumnFilter,
      },
      {
        Header: 'Department',
        accessor: 'department',
        Cell: ({ value }) => (
          <Text c="foreground">{value}</Text>
        ),
        Filter: DefaultColumnFilter,
      },
      {
        Header: 'Last Login',
        accessor: 'lastLogin',
        Cell: ({ value }) => (
          <Text c="muted">
            {new Date(value).toLocaleDateString()}
          </Text>
        ),
        sortType: 'datetime',
      },
    ],
    []
  );

  // Setup table hooks
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );

  // Global filter handler
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value);
    // For now, we'll just update local state
    // Global filtering can be implemented with useGlobalFilter hook
  };

  return (
    <Stack w="full">
      {/* Global Search */}
      <Box mb="md" className="max-w-sm">
        <Box
          display="flex"
          align="center"
          gap="sm"
          p="sm"
          rounded="lg"
          border="default"
          borderColor="border"
          bg="background"
          className="focus-within:ring-2 focus-within:ring-ring"
        >
          <Search size={16} className="text-muted-foreground" />
          <Box
            component="input"
            type="text"
            placeholder="Search users..."
            value={filterInput}
            onChange={handleFilterChange}
            w="full"
            bg="transparent"
            border="none"
            className="focus:outline-none"
          />
        </Box>
      </Box>

      {/* Table */}
      <Box
        w="full"
        rounded="lg"
        border="2px"
        borderColor="border"
        overflow="hidden"
        className="shadow-sm"
      >
        <Box
          component="table"
          w="full"
          className="table-fixed"
        >
          {/* Table Header */}
          <Box component="thead" bg="muted">
            {headerGroups.map((headerGroup, headerGroupIndex) => (
              <Box
                key={`header-group-${headerGroupIndex}`}
                component="tr"
              >
                {headerGroup.headers.map((column, index) => (
                  <Box
                    key={column.id || index}
                    component="th"
                    p="md"
                    c="foreground"
                    borderBottom="2px"
                    borderColor="border"
                    className="text-left font-semibold cursor-pointer hover:bg-accent select-none"
                  >
                    <Group align="center" gap="xs">
                      {column.render('Header')}
                      <Box className="ml-auto">
                        {/* Sort indicators can be added later */}
                        <Box className="w-4" />
                      </Box>
                    </Group>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>

          {/* Table Body */}
          <Box component="tbody" bg="background">
            {rows.length > 0 ? (
              rows.map((row, index) => {
                prepareRow(row);
                return (
                  <Box
                    key={row.id || index}
                    component="tr"
                    className="hover:bg-muted/50 transition-colors"
                  >
                    {row.cells.map((cell, cellIndex) => (
                      <Box
                        key={cellIndex}
                        component="td"
                        p="md"
                        borderBottom="2px"
                        borderColor="border"
                        className="align-middle"
                      >
                        {cell.render('Cell')}
                      </Box>
                    ))}
                  </Box>
                );
              })
            ) : (
              <Box component="tr">
                <Box
                  component="td"
                  colSpan={columns.length}
                  p="lg"
                  c="muted"
                  className="text-center"
                >
                  No users found matching your search.
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* Table Footer */}
      <Group justify="between" align="center" className="mt-4">
        <Text c="muted">
          Showing {rows.length} of {data.length} users
        </Text>
        <Group gap="sm">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </Group>
      </Group>
    </Stack>
  );
}

export default DataTable;
