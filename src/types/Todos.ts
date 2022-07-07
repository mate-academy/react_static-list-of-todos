import { User } from './User';
import { Todo } from './Todo';

export interface Todos extends Todo {
  id: number
  user: User | null,
}
