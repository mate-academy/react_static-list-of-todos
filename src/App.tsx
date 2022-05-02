import React from 'react';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './component/TodoList/TodoList';
import './App.scss';

const preparedTodos = todos.map((elem) => {
  return {
    ...elem,
    user: users.find(use => use.id === elem.userId) || null,
  };
});

const App: React.FC = () => (
  <>
    <div className="App">
      <h1>Static list of todos</h1>
    </div>
    <TodoList prepared={preparedTodos} />
  </>
);

export default App;
