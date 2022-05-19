import { User } from './user';

export interface PreparedTodo {
  id: number,
  title: string,
  completed: boolean,
  user: User | null;
}
