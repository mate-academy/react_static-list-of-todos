import todos from '../todos';
import users from '../users';
import { Todo } from '../types/Todo';

const preparedTodos: Todo[] = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };
});

export default preparedTodos;
