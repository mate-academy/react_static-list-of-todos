import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';
import { Todo } from './types/Todo';

const App: React.FC = () => {
  const preparedTodos: Todo[] = todos.map((todo) => {
    const user = users.find(({ id }) => id === todo.userId) || null;

    return {
      ...todo,
      user,
    };
  });

  return (
    <div className="page">
      <h1 className="page__heading">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
