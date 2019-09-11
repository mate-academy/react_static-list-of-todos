// import React from 'react';

function getTodosWithUsers(todosData, usersData) {
  return todosData.map((todo) => {
    const todoUser = usersData.find(user => user.id === todo.userId);

    return {
      ...todo,
      user: todoUser,
    };
  });
}

export default getTodosWithUsers;
