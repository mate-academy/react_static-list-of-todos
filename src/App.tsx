import React from 'react';
import './App.scss';

import { users } from './api/users';
import { TodoList } from './TodoList/TodoList';
import { todos } from './api/todos';

const App: React.FC = () => {
  const preparedTodos = todos.map(todo => {
    const { userId, id } = todo;
    const userLink = users.find(user => user.id === userId);
    let finishEl;

    if (userLink === undefined) {
      finishEl = {
        user: null,
        uniqueKey: id,
      };
    } else {
      finishEl = {
        user: userLink,
        uniqueKey: id,
      };
    }

    return finishEl;
  });

  return (
    <div className="App">
      <h1 className="todos-title">Static list of todos</h1>
      <TodoList arrayTodos={preparedTodos} />
    </div>
  );
};

export default App;
