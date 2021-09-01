import React from 'react';
import { TodoList } from './components/TodoList';

import { User } from './types/User';
import { Todo } from './types/Todo';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

const App: React.FC = () => {
  const preparedTodos: Todo[] = todos.map(({
    userId,
    id,
    title,
    completed,
  }) => {
    const user: User | null = users.find(({ id: uId }) => uId === userId) || null;

    return {
      id,
      title,
      completed,
      user,
    };
  });

  return (
    <div className="App">
      <TodoList todoList={preparedTodos} />
    </div>
  );
};

export default App;
