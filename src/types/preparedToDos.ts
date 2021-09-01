import { User } from './User';

export interface PreparedToDos {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}
