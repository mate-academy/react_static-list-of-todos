import React from 'react';
import './App.scss';
import { TodoList } from './component/TodoList';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

const preperedTodos = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <>
      <div className="App">
        <h1>Static list of todos</h1>
      </div>
      <div>
        <TodoList todos={preperedTodos} />
      </div>
    </>
  );
}

export default App;
