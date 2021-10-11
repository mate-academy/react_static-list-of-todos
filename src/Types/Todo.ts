import { User } from './User';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user?: User | null;
}

export type TaskInfo = {
  title: string;
  completed: boolean;
};
