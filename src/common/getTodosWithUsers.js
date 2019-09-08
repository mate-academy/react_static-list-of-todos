function getTodosWithUsers(todos, users) {
  return users.map(user => todos.filter(todo => (
    user.id === todo.userId
      ? Object.assign(todo, { user })
      : 0))).flat(1);
}

export default getTodosWithUsers;
