import { User } from './User';

export interface ToDos {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}
