import './App.css';

function getTodosWithUsers(todos, users) {

  return todos.map((todo) => {
    const currentUser = users.find(user => user.id === todo.userId);
    todo.user = currentUser;

    return todo;
  });
}
export default getTodosWithUsers;
