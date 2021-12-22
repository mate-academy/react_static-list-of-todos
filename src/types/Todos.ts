import { User } from './User';

export type Todos = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | undefined,
};
