import { User } from './Users';

export interface Todo {
  user: User | null;
  id: number;
  title: string;
  completed: boolean;
}
