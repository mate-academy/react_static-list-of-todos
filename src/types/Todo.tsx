import { User } from '../interfaces/User';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
};
