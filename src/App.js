import React from 'react';
import './App.scss';
import { ToDoList } from './component/todolist';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const user = users.find(userObj => userObj.id === todo.userId);

  return {
    ...todo, user,
  };
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <ToDoList list={preparedTodos} />
    </div>
  );
}

export default App;
