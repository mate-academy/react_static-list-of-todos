import React from 'react';

import todos from './api/todos';
import users from './api/users';

import ToDoItem from './ToDoItem';

function ToDoList() {
  const list = todos.map(item => (
    <ToDoItem
      item={item}
      user={users.find(user => user.id === item.userId)}
    />
  ));

  return list;
}

export default ToDoList;
