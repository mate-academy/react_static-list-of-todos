export function readyTodosList(todosItems, usersList) {
  const readyList = todosItems.map((item) => {
    const clonedItem = { ...item };

    clonedItem.user = {
      ...usersList.find(user => user.id === clonedItem.userId),
    };

    return clonedItem;
  });

  return readyList;
}
