import { Users } from './Users';

export interface PreparedTodos {
  user: Users | null;
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
