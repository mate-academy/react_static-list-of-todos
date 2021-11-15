import { UserTypes } from './User';

export interface Todo {
  user: UserTypes | null,
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}
