import { UserTypes } from './UserTypes';

export interface PreparedTodosType {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: UserTypes | null,
}
