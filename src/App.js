import React from 'react';
import './App.scss';

import './components/TodoList/TodoList.scss';

import todosFromServer from './api/todos';
import usersFromSrever from './api/users';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <>
      <div className="App">
        <h1 className="header">Static list of todos</h1>
        <p>
          <span>Todos: </span>
          {todosFromServer.length}
        </p>

        <p>
          <span>Users: </span>
          {usersFromSrever.length}
        </p>
      </div>
      <TodoList todos={preparedTodos} />
    </>
  );
}

const preparedTodos = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromSrever.find(person => todo.userId === person.id),
}));

export default App;
