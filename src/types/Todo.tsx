import { Users } from './Users';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: Users | null
}
