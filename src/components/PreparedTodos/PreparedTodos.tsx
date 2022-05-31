import { PreparedTodos, Todos, User } from '../../react-app-env';
import { todos } from '../../api/todos';
import { users } from '../../api/users';

export const preparedTodos: PreparedTodos[] = todos.map((action: Todos) => {
  const userObj = users.find((person: User) => person.id === action.userId)
  || null;
  const newTodos: PreparedTodos = { ...action, user: userObj };

  return newTodos;
});
