export interface User {
  id: number;
  name: string;
  email: string;
}

export interface PreparedTodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}
