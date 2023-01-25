import todosFromServer from '../api/todos';
import { Todo } from '../types/Todo';
import { getUser } from './getUser';

export const todos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));
