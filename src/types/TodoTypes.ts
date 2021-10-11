import { UserTypes } from './UserTypes';

export interface TodoTypes {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: UserTypes | null;
}
