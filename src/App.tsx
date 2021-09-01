import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './TodoList';

const preparedTodos: Todo[] = todos
  .map(todo => {
    const newUser = users.find(user => user.id === todo.userId) || null;

    return {
      ...todo,
      user: newUser,
    };
  });

// eslint-disable-next-line no-console
console.log(preparedTodos);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
