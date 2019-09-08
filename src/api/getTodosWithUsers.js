import todos from './todos';
import users from './users';

const todosWithUsers = getTodosWithUsers(todos, users);

function getTodosWithUsers(todos,users) {
  return todos.map(todo => {
   return { ...todo,
    user: users.find(user => user.id === todo.userId),
    }
  })
}

export default todosWithUsers;
