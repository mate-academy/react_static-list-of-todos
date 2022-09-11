import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

export const TodoList = (prop: Todo[]) => prop
  .filter(a => a.user)
  .map(a => TodoInfo(a));
