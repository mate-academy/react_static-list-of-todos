import { User } from './User';

export type PreparedTodo = {
  user?: User | null,
  userId?: number,
  id: number,
  title: string,
  completed: boolean,
};
