import { Person } from './Person';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  person: Person | null;
}
