export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  foundUser: User | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
}
