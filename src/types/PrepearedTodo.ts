import { Todo } from './Todo';
import { User } from './User';

export interface PrepearedTodo extends Todo {
  user: User | null,
}
