export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  status: 'active' | 'inactive' | 'pending';
  department: string;
  lastLogin: string;
  createdAt: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    status: "active",
    department: "Engineering",
    lastLogin: "2024-01-15T10:30:00Z",
    createdAt: "2023-06-15T08:00:00Z"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "user",
    status: "active",
    department: "Marketing",
    lastLogin: "2024-01-14T14:20:00Z",
    createdAt: "2023-07-22T09:15:00Z"
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "moderator",
    status: "inactive",
    department: "Support",
    lastLogin: "2024-01-10T16:45:00Z",
    createdAt: "2023-08-10T11:30:00Z"
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice.brown@example.com",
    role: "user",
    status: "active",
    department: "Sales",
    lastLogin: "2024-01-16T09:10:00Z",
    createdAt: "2023-09-05T13:20:00Z"
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie.wilson@example.com",
    role: "user",
    status: "pending",
    department: "Engineering",
    lastLogin: "2024-01-12T11:55:00Z",
    createdAt: "2023-10-18T15:40:00Z"
  },
  {
    id: 6,
    name: "Diana Prince",
    email: "diana.prince@example.com",
    role: "admin",
    status: "active",
    department: "HR",
    lastLogin: "2024-01-16T08:25:00Z",
    createdAt: "2023-05-30T10:00:00Z"
  },
  {
    id: 7,
    name: "Edward Norton",
    email: "edward.norton@example.com",
    role: "user",
    status: "active",
    department: "Finance",
    lastLogin: "2024-01-13T17:30:00Z",
    createdAt: "2023-11-12T14:15:00Z"
  },
  {
    id: 8,
    name: "Fiona Green",
    email: "fiona.green@example.com",
    role: "moderator",
    status: "inactive",
    department: "Marketing",
    lastLogin: "2024-01-08T12:40:00Z",
    createdAt: "2023-04-25T16:50:00Z"
  }
];

export const departments = [
  "Engineering",
  "Marketing",
  "Sales",
  "Support",
  "HR",
  "Finance"
] as const;

export const userRoles = ['admin', 'user', 'moderator'] as const;
export const userStatuses = ['active', 'inactive', 'pending'] as const;
