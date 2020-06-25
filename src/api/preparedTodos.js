import todos from './todos';
import users from './users';

export const preparedTodos = todos.map(task => ({
  ...task,
  user: users.find(person => person.id === task.userId),
}));
