import todos from './todos';
import users from './users';

const preparedTodos = todos.map((todo) => {
  const todoCopy = { ...todo };

  todoCopy.user = users.find(user => user.id === todoCopy.userId).name;

  return todoCopy;
});

export default preparedTodos;
