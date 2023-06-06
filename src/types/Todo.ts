import { User } from './User';

export interface Todoo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}
