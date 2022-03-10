export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user?: User;
}
