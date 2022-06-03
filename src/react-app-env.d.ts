/// <reference types="react-scripts" />

export interface User {
  name: string;
  email: string;
}

export interface Todos {
  userId: number;
  title: string;
  completed: boolean;
  user: User | null;
}
