export interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface Todo {
  id: number;
  user: User | null;
  title: string;
  completed: boolean;
}
