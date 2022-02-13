import React from 'react';
import { Todo } from './Types/Todo';

import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './Components/TodoList/TodoList';

const App: React.FC = () => {
  const preparedTodos: Todo[] = todos.map(todo => {
    return {
      ...todo,
      user: users.find(user => user.id === todo.userId) || null,
    };
  });

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
