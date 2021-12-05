import { User } from './User';
import { Todo } from './Todo';

export interface Props extends Todo {
  user: User | null,
}
