export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type Todos = Todo & {
  user?: User;
};
