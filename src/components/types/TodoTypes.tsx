import { UserTypes } from './UserTypes';

export interface TodoTypes {
  user: UserTypes | null,
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}
