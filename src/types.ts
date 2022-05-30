export interface User {
  name: string;
  email: string;
}

export interface Todo {
  title: string;
  completed: boolean;
}

export interface PreparedTodo {
  todo: Todo;
  user: User | null;
}
