import { User } from './User';

export interface Todo {
  title: string;
  completed: boolean;
  user: User | null;
  userId: number;
}
