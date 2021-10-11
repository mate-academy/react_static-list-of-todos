import React from 'react';
import './styles/App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';
import { Todo } from './types/Todo';

const App: React.FC = () => {
  const preparedTodos: Todo[] = todos.map(item => {
    return {
      ...item,
      user: users.find(({ id }) => id === item.userId) || null,
    };
  });

  return (
    <div className="page">
      <h1 className="page__title">
        Static list of todos
      </h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
