import { User } from '../Types/User';
import { Todo } from '../Types/todo';

export interface PreparedTodo extends Todo {
  user: User | null;
}
