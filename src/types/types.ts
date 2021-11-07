export interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface Todos {
  id: number;
  user: User | null;
  title: string;
  completed: boolean;
}
