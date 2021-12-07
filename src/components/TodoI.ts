import { User } from './UserI';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}
