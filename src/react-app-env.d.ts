/// <reference types="react-scripts" />

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface Todo {
  user: User | null;
  id: number;
  title: string;
  completed: boolean;
}
