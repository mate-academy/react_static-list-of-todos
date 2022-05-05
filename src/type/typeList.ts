import { User } from './typeUser';

export interface List {
  user: User | null;
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
