import './App.css';

function getTodosWithUsers(todos, users) {

  for (let user of users) {
    for (let todo of todos) {
      if (user.id === todo.userId) {
        todo.user = Object.assign({}, user);
      }
    }
  }
}

export default getTodosWithUsers;
