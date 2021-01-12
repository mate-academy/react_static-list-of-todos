import todos from './todos';
import users from './users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

export default preparedTodos;
