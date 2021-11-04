import { User } from './typedefs';

export interface TodosItem {
  user: User | null,
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}
