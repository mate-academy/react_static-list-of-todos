import todos from './todos';
import users from './users';

export const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id),
}));

export default preparedTodos;
