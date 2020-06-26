import todos from './todos';
import users from './users';

const preparedTodos = todos.map((todo) => {
  const todoCopy = { ...todo };
  const matchedUser = users.find(user => user.id === todoCopy.userId);

  todoCopy.user = matchedUser ? matchedUser.name : '';

  return todoCopy;
});

export default preparedTodos;
