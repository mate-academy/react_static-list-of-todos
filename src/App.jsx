import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import Todos from './components/TodosList/TodosList';

function getTodoWithUser(todosArr, usersArr) {
  return todosArr.map(todo => ({
    ...todo,
    user: usersArr.find(user => user.id === todo.userId),
  }));
}

const preparedTodos = getTodoWithUser(todos, users);

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <div className="wrapper">
        <Todos todos={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
