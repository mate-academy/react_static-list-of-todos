import { Users } from './user';

export interface PreparedTodos {
  id: number,
  title: string,
  completed: boolean,
  user: Users | null,
}
