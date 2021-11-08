export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type PreparedTodo = {
  user: User | null;
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
