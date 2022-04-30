export interface Users {
  id?: number;
  name: string;
  email: string;
}

export interface PreparedTodos {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
  user: Users | null;
}
