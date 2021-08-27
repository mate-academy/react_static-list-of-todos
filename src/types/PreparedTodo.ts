import { UserTodo } from './UserTodo';
import { User } from './User';

export interface PreparedTodo extends UserTodo {
  user: User | null
}
