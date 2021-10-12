import { Todo } from './Todo';
import { User } from './User';

export type PreparedTodo = Todo & {
  user?: User | null;
};
