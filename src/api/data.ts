import { Todo, Todos, User } from '../types';
import todosFromServer from './todos';
import usersFromServer from './users';

function preparedTodos(
  todos: Todo[],
  users: User[],
): Todos[] {
  return todos.map((todo) => ({
    ...todo,
    user: users.find((user) => user.id === todo.userId),
  }));
}

export const preapareTodos = preparedTodos(todosFromServer, usersFromServer);
