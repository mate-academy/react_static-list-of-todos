import todos from './todos';
import users from './users';

const usersMap = {};

users.forEach((user) => {
  usersMap[user.id] = { ...user };
});

export const preparedTodos = [...todos]
  .map(todo => ({
    ...todo, user: usersMap[todo.userId],
  }));
