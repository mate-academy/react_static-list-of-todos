import { User } from './User';

export interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}
