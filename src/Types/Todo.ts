import { User } from './User';

export interface TodosInfo {
  userId: number;
  id: number,
  user: User | null,
  title: string,
  completed: boolean,
}
