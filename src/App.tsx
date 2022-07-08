import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';
import { Todo, User } from './types';

const App: React.FC = () => {
  const preparedTodos = todos.map((todo: Todo) => {
    const user: User | undefined = users.find(u => {
      return u.id === todo.userId;
    });

    return { ...todo, user: user || null };
  });

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
};

export default App;
