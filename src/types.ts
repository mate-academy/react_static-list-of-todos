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

export interface Todos extends Todo {
  user?: User;
}
