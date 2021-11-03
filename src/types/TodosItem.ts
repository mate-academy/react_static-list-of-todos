import { User } from './User';

export interface TodosItem {
  user: User | null,
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}
