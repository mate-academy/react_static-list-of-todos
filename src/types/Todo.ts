import { User } from './User';

export interface Todo {
  userId: number,
  user: User | null,
  id: number,
  title: string,
  completed: boolean,
}
