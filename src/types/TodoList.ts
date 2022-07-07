import { User } from '../types/User';

export interface ToDoListWithUser {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user?: User | null;
}
