function getTodosWithUsers(todos, users) {
  const todosWithUser = Array.from(todos);

  for (let i = 0; i < todosWithUser.length; i += 1) {
    todosWithUser[i].user = users.find(
      user => todosWithUser[i].userId === user.id
    );
  }

  return todosWithUser;
}

export default getTodosWithUsers;
