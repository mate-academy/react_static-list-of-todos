import { User } from './User';

export type TodoCard = {
  user: User | null;
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
