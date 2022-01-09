export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}
