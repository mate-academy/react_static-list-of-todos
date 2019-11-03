import './App.css';

function getTodosWithUsers(todos, users) {

  return todos.map((todo) => {
    const currentUser = Object.assign({}, users.find(user => user.id === todo.userId));
    let userMutated = Object.assign({}, todo);
    userMutated.user = currentUser;

    return userMutated;
  });
}
export default getTodosWithUsers;
