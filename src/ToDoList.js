import React from 'react';

import todos from './api/todos';
import users from './api/users';

import ToDoItem from './ToDoItem';

function ToDoList() {
  const tasks = todos.map(element => (
    <ToDoItem
      key={element.id}
      id={element.id}
      title={element.title}
      completed={element.completed}
      user={users.find(user => user.id === element.userId)}
    />
  ));

  return (
    tasks
  );
}

export default ToDoList;
