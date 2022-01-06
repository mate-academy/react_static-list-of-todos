import todos from '../api/todos';
import users from '../api/users';
import { Todo } from '../types/Types';

export const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(person => person.id === todo.userId) || null,
}));
