import './App.css';

function getTodosWithUsers(todos, users) {

  return todos.map((todo) => {
    const currentUser = users.find(user => user.id === todo.userId);
    let userMutated = todo;
    userMutated.user = currentUser;

    return userMutated;
  });
}
export default getTodosWithUsers;
