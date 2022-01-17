import { User } from './User';
import { Todo } from './Todo';

export interface PreparedTodos extends Todo {
  user: User | null,
}
