export const prepareTodos = (todos, users) => [...todos].map((todo) => {
  const matchedUser = users.find(user => user.id === todo.userId);

  return {
    ...todo, user: { ...matchedUser },
  };
});
