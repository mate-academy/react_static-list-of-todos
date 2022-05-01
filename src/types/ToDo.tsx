import { User } from './User';

export interface ToDo {
  userId: number,
  user: User | null,
  id: number,
  title: string,
  completed: boolean,
}
