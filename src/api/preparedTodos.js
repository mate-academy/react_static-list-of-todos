import todos from './todos';
import users from './users';

const preparedTodos = todos
  .map((todo) => {
    const todoCopy = { ...todo };
    const userCopy = { ...users.find(user => user.id === todoCopy.userId) };

    todoCopy.user = userCopy.name;

    return todoCopy;
  })
  .sort((a, b) => a.userId - b.userId);

export default preparedTodos;
