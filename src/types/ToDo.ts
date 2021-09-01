import { User } from './User';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}
